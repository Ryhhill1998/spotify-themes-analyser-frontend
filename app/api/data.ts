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
} from "./dataTypes";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

type Tokens = {
	access_token: string;
	refresh_token: string;
};

const getTokens = async (code: string) => {
	const cookieStore = await cookies();
	const res = await fetch(`${API_BASE_URL}/auth/spotify/tokens`, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ code }),
	});
	const data: Tokens = await res.json();
	cookieStore.set({
		name: "access_token",
		value: data.access_token,
		secure: true,
		sameSite: "none",
	});
	cookieStore.set({
		name: "refresh_token",
		value: data.refresh_token,
		secure: true,
		sameSite: "none",
	});
};

const makeAPIRequest = async (route: string) => {
	const cookieStore = await cookies();
	console.log(`COOKIES BEING SENT: ${cookieStore.getAll()}`);

	const res = await fetch(`${API_BASE_URL}${route}`, {
		headers: { Cookie: cookieStore.toString() },
		redirect: "manual",
	});

	if (res.status === 401) {
		throw new Error("Unauthorised");
	}

	return res;
};

const fetchProfile = async () => {
	try {
		const res = await makeAPIRequest("/data/me/profile");
		const profileData: ProfileAPI = await res.json();
		const profile: Profile = {
			...profileData,
			displayName: profileData.display_name,
		};
		return profile;
	} catch (error) {
		console.error(error);
		return null;
	}
};

// TODO - get track by ID
const fetchTrack = async (trackId: string) => {
	try {
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
	} catch (error) {
		console.error(error);
		return null;
	}
};

// TODO - get track by ID
const fetchArtist = async (artistId: string) => {
	try {
		const res = await makeAPIRequest(`/data/artists/${artistId}`);
		const data: ArtistAPI = await res.json();
		const artist: Artist = { ...data, spotifyUrl: data.spotify_url };
		return artist;
	} catch (error) {
		console.error(error);
		return null;
	}
};

// TODO - get top tracks
const fetchTopTracks = async (timeRange: string, limit: number = 50) => {
	try {
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
	} catch (error) {
		console.error(error);
		return null;
	}
};

// TODO - get top artists
const fetchTopArtists = async (timeRange: string, limit: number = 50) => {
	try {
		const res = await makeAPIRequest(
			`/data/me/top/artists?time_range=${timeRange}&limit=${limit}`
		);
		const data: ArtistAPI[] = await res.json();
		const artists: Artist[] = data.map((data) => ({
			...data,
			spotifyUrl: data.spotify_url,
		}));
		return artists;
	} catch (error) {
		console.error(error);
		return null;
	}
};

// TODO - get top emotions
const fetchTopEmotions = async (timeRange: string) => {
	try {
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
	} catch (error) {
		console.error(error);
		return null;
	}
};

// TODO - get track's lyrics with emotion tags
const fetchTrackLyricsWithEmotionalTags = async (
	trackId: string,
	emotionName: string
) => {
	try {
		const res = await makeAPIRequest(
			`/data/tracks/${trackId}/lyrics/emotional-tags/${emotionName}`
		);
		const data: TaggedLyricsAPI = await res.json();
		const taggedLyrics = data.lyrics;
		return taggedLyrics;
	} catch (error) {
		console.error(error);
		return null;
	}
};

export {
	fetchProfile,
	fetchTrack,
	fetchArtist,
	fetchTopTracks,
	fetchTopArtists,
	fetchTopEmotions,
	fetchTrackLyricsWithEmotionalTags,
	getTokens,
};
