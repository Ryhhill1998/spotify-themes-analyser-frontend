// -------------------- AUTH -------------------- //
type SpotifyAuth = {
	login_url: string;
	oauth_state: string;
};

type TokenResponse = {
	access_token: string;
	max_age: number;
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
	position_change: string | null;
}

interface Track extends TrackBase {
	albumName: string;
	spotifyUrl: string;
	releaseDate: string;
	durationMs: number;
	durationFormatted: string;
	positionChange: string | null;
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
	position_change: string | null;
}

interface Artist extends ArtistBase {
	spotifyUrl: string;
	positionChange: string | null;
}

// -------------------- GENRE -------------------- //
interface GenreBase {
	percentage: number;
}

interface GenreAPI extends GenreBase {
	genre_name: string;
	position_change: string | null;
}

interface Genre extends GenreBase {
	name: string;
	positionChange: string | null;
}

// -------------------- EMOTION -------------------- //
interface EmotionBase {
	percentage: number;
}

interface EmotionAPI extends EmotionBase {
	emotion_name: string;
	track_id: string;
	position_change: string | null;
}

interface Emotion extends EmotionBase {
	name: string;
	trackId: string;
	positionChange: string | null;
}

// -------------------- GENERIC PERCENTAGE TOP ITEM -------------------- //
type PercentageTopItem = {
	name: string;
	percentage: number;
	positionChange: string | null;
};

// -------------------- EMOTION TAGGED LYRICS -------------------- //
type TaggedLyricsAPI = {
	track_id: string;
	emotion: string;
	lyrics: string;
};

// -------------------- EXPORTS -------------------- //
export type {
	SpotifyAuth,
	TokenResponse,
	ProfileAPI,
	Profile,
	TrackAPI,
	Track,
	ArtistAPI,
	Artist,
	GenreAPI,
	Genre,
	EmotionAPI,
	Emotion,
	PercentageTopItem,
	TaggedLyricsAPI,
};
