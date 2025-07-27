"use server";

import { cookies } from "next/headers";
import {
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
	TokenResponse,
	Genre,
	GenreAPI,
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
	const accessToken = cookieStore.get("access_token");
	if (accessToken) {
		const authorisationHeader = {
			Authorization: `Bearer ${accessToken.value}`,
		};
		headers = { ...headers, ...authorisationHeader };
	}

	const res = await fetch(`${API_BASE_URL}${route}`, {
		method: method ? method : "GET",
		headers: { ...headers },
		body: body ?? null,
	});

	if (res.status === 400) {
		console.log(res);

		throw new BadRequestAPIError();
	}

	if (res.status === 401) {
		console.log(res);

		throw new UnauthorisedAPIError();
	}

	if (!res.ok) {
		console.log(res);

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
	console.log("set cookie:", {
		name: name,
		value: value,
		secure: true,
		sameSite: "none",
		maxAge: maxAge,
		httpOnly: true,
	});

	cookieStore.set({
		name: name,
		value: value,
		secure: true,
		sameSite: "none",
		maxAge: maxAge,
		httpOnly: true,
	});
};

// -------------------- AUTH -------------------- //
const getSpotifyAuthUrl = async () => {
	const res = await makeAPIRequest("/auth/spotify/login");
	const data: SpotifyAuth = await res.json();
	const cookieStore = await cookies();
	setCookie(cookieStore, "oauth_state", data.oauth_state);
	return data.login_url;
};

const getToken = async (code: string) => {
	const cookieStore = await cookies();

	try {
		const res = await makeAPIRequest(
			"/auth/spotify/token",
			"POST",
			{
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			JSON.stringify({ code })
		);

		const data: TokenResponse = await res.json();

		setCookie(cookieStore, "access_token", data.access_token, data.max_age);
	} catch (error) {
		console.error(error);
		cookieStore.delete("access_token");
	}
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

// -------------------- GENRES -------------------- //
const fetchTopGenres = async (timeRange: string, limit: number = 5) => {
	const res = await makeAPIRequest(
		`/data/me/top/genres?time_range=${timeRange}&limit=${limit}`
	);
	const data: GenreAPI[] = await res.json();
	const genres: Genre[] = data.map((data) => ({
		...data,
		name: data.genre_name,
		percentage: Math.round(data.percentage * 100),
		positionChange: data.position_change,
	}));

	return genres;
};

// -------------------- EMOTIONS -------------------- //
const fetchTopEmotions = async (timeRange: string, limit: number = 5) => {
	const res = await makeAPIRequest(
		`/data/me/top/emotions?time_range=${timeRange}&limit=${limit}`
	);
	const data: EmotionAPI[] = await res.json();
	const emotions: Emotion[] = data.map((data) => ({
		...data,
		name: data.emotion_name,
		percentage: Math.round(data.percentage * 100),
		trackId: data.track_id,
		positionChange: data.position_change,
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

// -------------------- PERCENTAGE TOP ITEMS -------------------- //
const fetchPercentageTopItems = async (
	topItemType: string,
	timeRange: string,
	limit: number = 5
) => {
	const res = await makeAPIRequest(
		`/data/me/top/${topItemType}?time_range=${timeRange}&limit=${limit}`
	);
	const data: EmotionAPI[] = await res.json();
	const emotions: Emotion[] = data.map((data) => ({
		...data,
		name: data.emotion_name,
		percentage: Math.round(data.percentage * 100),
		trackId: data.track_id,
		positionChange: data.position_change,
	}));

	return emotions;
};

// -------------------- EXPORTS -------------------- //
export {
	setCookie,
	getSpotifyAuthUrl,
	getToken,
	fetchProfile,
	fetchTrack,
	fetchArtist,
	fetchTopTracks,
	fetchTopArtists,
	fetchTopGenres,
	fetchTopEmotions,
	fetchTrackLyricsWithEmotionalTags,
};
