// -------------------- AUTH -------------------- //
type SpotifyAuth = {
	login_url: string;
	oauth_state: string;
};

type Tokens = {
	access_token: string;
	refresh_token: string;
};

// -------------------- COMMON -------------------- //
type Image = { url: string; height: number; width: number };

// -------------------- PROFILE -------------------- //
interface ProfileBase {
	id: string;
	email: string;
	href: string;
	images: Image[];
	followers: number;
}

interface ProfileAPI extends ProfileBase {
	display_name: string;
}

interface Profile extends ProfileBase {
	displayName: string;
}

// -------------------- ITEM -------------------- //
// type Item = {
// 	id: string;
// 	name: string;

// }

// -------------------- TRACK -------------------- //
type TrackArtist = {
	id: string;
	name: string;
};

interface TrackBase {
	id: string;
	name: string;
	images: Image[];
	artist: TrackArtist;
	explicit: boolean;
	popularity: number;
}

interface TrackAPI extends TrackBase {
	album_name: string;
	spotify_url: string;
	release_date: string;
	duration_ms: number;
	position_change: string | number | null;
}

interface Track extends TrackBase {
	albumName: string;
	spotifyUrl: string;
	releaseDate: string;
	durationMs: number;
	durationFormatted: string;
	positionChange: string | number | null;
}

// -------------------- ARTIST -------------------- //
interface ArtistBase {
	id: string;
	name: string;
	images: Image[];
	genres: string[];
	followers: number;
	popularity: number;
}

interface ArtistAPI extends ArtistBase {
	spotify_url: string;
	position_change: string | number | null;
}

interface Artist extends ArtistBase {
	spotifyUrl: string;
	positionChange: string | number | null;
}

// -------------------- EMOTION -------------------- //
interface EmotionBase {
	name: string;
	percentage: number;
}

interface EmotionAPI extends EmotionBase {
	track_id: string;
}

interface Emotion extends EmotionBase {
	trackId: string;
}

// -------------------- EMOTION TAGGED LYRICS -------------------- //
type TaggedLyricsAPI = {
	track_id: string;
	emotion: string;
	lyrics: string;
};

// -------------------- EXPORTS -------------------- //
export type {
	SpotifyAuth,
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
};
