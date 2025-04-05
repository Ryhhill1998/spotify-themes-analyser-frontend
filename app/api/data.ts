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
} from "./dataTypes";
import {
	BadRequestAPIError,
	UnauthorisedAPIError,
	UnexpectedAPIError,
} from "./errors";

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
		headers: { Cookie: cookieStore.toString(), ...headers },
		redirect: "manual",
		body: body ?? null,
	});

	if (res.status === 401) {
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

const setTokens = async (data: Tokens) => {
	const cookieStore = await cookies();
	cookieStore.set({
		name: "access_token",
		value: data.access_token,
		secure: true,
		sameSite: "none",
		maxAge: 3300,
	});
	cookieStore.set({
		name: "refresh_token",
		value: data.refresh_token,
		secure: true,
		sameSite: "none",
	});
};

// -------------------- TOKENS -------------------- //
const getTokens = async (code: string) => {
	const res = await makeAPIRequest(
		`${API_BASE_URL}/auth/spotify/tokens`,
		"POST",
		{
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		JSON.stringify({ code })
	);

	const data: Tokens = await res.json();

	setTokens(data);
};

const refreshTokens = async () => {
	const cookieStore = await cookies();
	const refeshToken = cookieStore.get("refresh_token")?.value;

	const res = await makeAPIRequest(
		`${API_BASE_URL}/auth/spotify/refresh-tokens`,
		"POST",
		{
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		JSON.stringify({ refresh_token: refeshToken })
	);

	const data: Tokens = await res.json();

	setTokens(data);
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
		};
	});
	return tracks;
};

// -------------------- ARTISTS -------------------- //
const fetchArtist = async (artistId: string) => {
	const res = await makeAPIRequest(`/data/artists/${artistId}`);
	const data: ArtistAPI = await res.json();
	const artist: Artist = { ...data, spotifyUrl: data.spotify_url };
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
