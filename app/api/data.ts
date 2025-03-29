"use server";

import { cookies } from "next/headers";
import {
	ProfileAPI,
	Profile,
	TrackAPI,
	Track,
	ArtistAPI,
	Artist,
} from "./dataTypes";

const API_BASE_URL = "http://localhost:8080";

const makeAPIRequest = async (route: string) => {
	const cookiesToSend = await cookies();
	const res = await fetch(`${API_BASE_URL}${route}`, {
		headers: { Cookie: cookiesToSend.toString() },
	});
	return res;
};

const fetchProfile = async () => {
	const res = await makeAPIRequest("/data/me/profile");
	const data: ProfileAPI = await res.json();
	const profile: Profile = { ...data, displayName: data.display_name };
	return profile;
};

// TODO - get track by ID
const fetchTrack = async (trackId: string) => {
	const res = await makeAPIRequest(`/data/tracks/${trackId}`);
	const data: TrackAPI = await res.json();
	const track: Track = {
		...data,
		spotifyUrl: data.spotify_url,
		releaseDate: data.release_date,
		durationMs: data.duration_ms,
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
const fetchTopTracks = async () => {
	const res = await makeAPIRequest("/data/me/top/tracks");
	const data: TrackAPI[] = await res.json();
	const tracks: Track[] = data.map((data) => ({
		...data,
		spotifyUrl: data.spotify_url,
		releaseDate: data.release_date,
		durationMs: data.duration_ms,
	}));
	return tracks;
};

// TODO - get top artists
const fetchTopArtists = async () => {
	const res = await makeAPIRequest("/data/me/top/artists");
	const data: ArtistAPI[] = await res.json();
	const artists: Artist[] = data.map((data) => ({
		...data,
		spotifyUrl: data.spotify_url,
	}));
	return artists;
};

// TODO - get top emotions
// TODO - get track's lyrics with emotion tags

export {
	fetchProfile,
	fetchTrack,
	fetchArtist,
	fetchTopTracks,
	fetchTopArtists,
};
