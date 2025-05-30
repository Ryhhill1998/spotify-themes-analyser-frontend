"use server";

import { cookies } from "next/headers";
import {
	Tokens,
	ProfileAPI,
	Profile,
	TrackAPI,
	Track,
	ArtistAPI,
	Artist,
	EmotionAPI,
	Emotion,
	TaggedLyricsAPI,
	SpotifyAuth,
} from "./dataTypes";
import {
	BadRequestAPIError,
	UnauthorisedAPIError,
	UnexpectedAPIError,
} from "./errors";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// -------------------- HELPERS -------------------- //
const makeAPIRequest = async (
	route: string,
	method?: string,
	headers?: object,
	body?: string
) => {
	const cookieStore = await cookies();

	const res = await fetch(`${API_BASE_URL}${route}`, {
		method: method ? method : "GET",
		headers: {
			Cookie: cookieStore.toString(),
			...headers,
		},
		redirect: "manual",
		body: body ?? null,
	});

	if (res.status === 400) {
		throw new BadRequestAPIError();
	}

	if (res.status === 401) {
		throw new UnauthorisedAPIError();
	}

	if (!res.ok) {
		throw new UnexpectedAPIError();
	}

	return res;
};

const setCookie = (
	cookieStore: ReadonlyRequestCookies,
	name: string,
	value: string,
	maxAge?: number
) => {
	cookieStore.set({
		name: name,
		value: value,
		secure: true,
		sameSite: "none",
		maxAge: maxAge,
		httpOnly: true,
	});
};

const handleTokensRequest = async (
	route: string,
	body: string,
	cookieStore?: ReadonlyRequestCookies
) => {
	if (!cookieStore) cookieStore = await cookies();

	try {
		const res = await makeAPIRequest(
			`/auth/spotify/${route}`,
			"POST",
			{
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body
		);

		const data: Tokens = await res.json();

		setCookie(cookieStore, "access_token", data.access_token, 3300);
		setCookie(cookieStore, "refresh_token", data.refresh_token);
	} catch (error) {
		console.error(error);

		cookieStore.delete("access_token");
		cookieStore.delete("refresh_token");
	}
};

// -------------------- AUTH -------------------- //
const getSpotifyAuthUrl = async () => {
	const res = await makeAPIRequest("/auth/spotify/login");
	const data: SpotifyAuth = await res.json();
	const cookieStore = await cookies();
	setCookie(cookieStore, "oauth_state", data.oauth_state);
	return data.login_url;
};

const getTokens = async (code: string) => {
	await handleTokensRequest("tokens", JSON.stringify({ code }));
};

const refreshTokens = async () => {
	const cookieStore = await cookies();
	const refreshToken = cookieStore.get("refresh_token")?.value;

	if (!refreshToken) return;

	await handleTokensRequest(
		"refresh-tokens",
		JSON.stringify({ refresh_token: refreshToken }),
		cookieStore
	);
};

// -------------------- PROFILE -------------------- //
const fetchProfile = async () => {
	const res = await makeAPIRequest("/data/me/profile");
	const profileData: ProfileAPI = await res.json();
	const profile: Profile = {
		...profileData,
		displayName: profileData.display_name,
	};
	return profile;
};

// -------------------- TRACKS -------------------- //
const fetchTrack = async (trackId: string) => {
	const res = await makeAPIRequest(`/data/tracks/${trackId}`);
	const data: TrackAPI = await res.json();
	const totalSeconds = data.duration_ms / 1000;
	const seconds = totalSeconds % 60;
	const minutes = Math.floor(totalSeconds / 60);
	const track: Track = {
		...data,
		albumName: data.album_name,
		spotifyUrl: data.spotify_url,
		releaseDate: data.release_date,
		durationMs: data.duration_ms,
		durationFormatted: `${minutes}:${seconds}`,
		positionChange: data.position_change,
	};
	return track;
};

const fetchTopTracks = async (timeRange: string, limit: number = 50) => {
	const res = await makeAPIRequest(
		`/data/me/top/tracks?time_range=${timeRange}&limit=${limit}`
	);
	const data: TrackAPI[] = await res.json();
	const tracks: Track[] = data.map((data) => {
		const totalSeconds = Math.round(data.duration_ms / 1000);
		const seconds = String(totalSeconds % 60).padStart(2, "0");
		const minutes = Math.floor(totalSeconds / 60);

		return {
			...data,
			albumName: data.album_name,
			spotifyUrl: data.spotify_url,
			releaseDate: data.release_date,
			durationMs: data.duration_ms,
			durationFormatted: `${minutes}:${seconds}`,
			positionChange: data.position_change,
		};
	});
	return tracks;
};

// -------------------- ARTISTS -------------------- //
const fetchArtist = async (artistId: string) => {
	const res = await makeAPIRequest(`/data/artists/${artistId}`);
	const data: ArtistAPI = await res.json();
	const artist: Artist = {
		...data,
		spotifyUrl: data.spotify_url,
		positionChange: data.position_change,
	};
	return artist;
};

const fetchTopArtists = async (timeRange: string, limit: number = 50) => {
	const res = await makeAPIRequest(
		`/data/me/top/artists?time_range=${timeRange}&limit=${limit}`
	);
	const data: ArtistAPI[] = await res.json();
	const artists: Artist[] = data.map((data) => ({
		...data,
		spotifyUrl: data.spotify_url,
		positionChange: data.position_change,
	}));
	return artists;
};

// -------------------- EMOTIONS -------------------- //
const fetchTopEmotions = async (timeRange: string) => {
	const res = await makeAPIRequest(
		`/data/me/top/emotions?time_range=${timeRange}`
	);
	const data: EmotionAPI[] = await res.json();
	const emotions: Emotion[] = data.map((data) => ({
		...data,
		percentage: Math.round(data.percentage * 100),
		trackId: data.track_id,
	}));
	return emotions;
};

const fetchTrackLyricsWithEmotionalTags = async (
	trackId: string,
	emotionName: string
) => {
	const res = await makeAPIRequest(
		`/data/tracks/${trackId}/lyrics/emotional-tags/${emotionName}`
	);
	const data: TaggedLyricsAPI = await res.json();
	const taggedLyrics = data.lyrics;
	return taggedLyrics;
};

// -------------------- EXPORTS -------------------- //
export {
	setCookie,
	getSpotifyAuthUrl,
	getTokens,
	refreshTokens,
	fetchProfile,
	fetchTrack,
	fetchArtist,
	fetchTopTracks,
	fetchTopArtists,
	fetchTopEmotions,
	fetchTrackLyricsWithEmotionalTags,
};
