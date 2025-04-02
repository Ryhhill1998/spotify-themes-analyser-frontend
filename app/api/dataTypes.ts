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
}

interface Track extends TrackBase {
	albumName: string;
	spotifyUrl: string;
	releaseDate: string;
	durationMs: number;
	durationFormatted: string;
}

// -------------------- ARTIST -------------------- //
interface ArtistBase {
	id: string;
	name: string;
	images: Image[];
	genres: string[];
}

interface ArtistAPI extends ArtistBase {
	spotify_url: string;
}

interface Artist extends ArtistBase {
	spotifyUrl: string;
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
