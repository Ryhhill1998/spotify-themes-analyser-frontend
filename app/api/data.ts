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

const makeAPIRequest = async (route: string) => {
	const cookiesToSend = await cookies();
	const res = await fetch(`${API_BASE_URL}${route}`, {
		headers: { Cookie: cookiesToSend.toString() },
	});
	return res;
};

const fetchProfile = async () => {
	const res = await makeAPIRequest("/data/me/profile");
	const profileData: ProfileAPI = await res.json();
	const profile: Profile = {
		...profileData,
		displayName: profileData.display_name,
	};
	return profile;
};

// TODO - get track by ID
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

// TODO - get track by ID
const fetchArtist = async (artistId: string) => {
	const res = await makeAPIRequest(`/data/artists/${artistId}`);
	const data: ArtistAPI = await res.json();
	const artist: Artist = { ...data, spotifyUrl: data.spotify_url };
	return artist;
};

// TODO - get top tracks
const fetchTopTracks = async (timeRange: string, limit: number = 50) => {
	const res = await makeAPIRequest(
		`/data/me/top/tracks/?time_range=${timeRange}&limit=${limit}`
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

// TODO - get top artists
const fetchTopArtists = async (timeRange: string, limit: number = 50) => {
	const res = await makeAPIRequest(
		`/data/me/top/artists/?time_range=${timeRange}&limit=${limit}`
	);
	const data: ArtistAPI[] = await res.json();
	const artists: Artist[] = data.map((data) => ({
		...data,
		spotifyUrl: data.spotify_url,
	}));
	return artists;
};

// TODO - get top emotions
const fetchTopEmotions = async (timeRange: string) => {
	const res = await makeAPIRequest(
		`/data/me/top/emotions/?time_range=${timeRange}`
	);
	const data: EmotionAPI[] = await res.json();
	const emotions: Emotion[] = data.map((data) => ({
		...data,
		percentage: Math.round(data.percentage * 100),
		trackId: data.track_id,
	}));
	return emotions;
};

// TODO - get track's lyrics with emotion tags
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

const handleCookieSet = async () => {
	const res = await fetch(`${API_BASE_URL}/auth/spotify/cookies`, {
		credentials: "include", // Ensure cookies are included in the request
	});
	return res;
};

export {
	fetchProfile,
	fetchTrack,
	fetchArtist,
	fetchTopTracks,
	fetchTopArtists,
	fetchTopEmotions,
	fetchTrackLyricsWithEmotionalTags,
	handleCookieSet,
};
