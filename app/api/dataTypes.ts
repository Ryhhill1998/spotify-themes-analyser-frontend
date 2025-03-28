// -------------------- COMMON -------------------- //
type Image = { url: string; height: number; width: number };

// -------------------- PROFILE -------------------- //
interface ProfileBase {
	id: string;
	email: string;
	href: string;
	images: Image[];
	followers: { total: number };
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
	spotify_url: string;
	release_date: string;
	duration_ms: number;
}

interface Track extends TrackBase {
	spotifyUrl: string;
	releaseDate: string;
	durationMs: number;
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

// -------------------- TOP TRACKS -------------------- //

// -------------------- TOP ARTISTS -------------------- //

// -------------------- TOP EMOTIONS -------------------- //

// -------------------- EXPORTS -------------------- //
export type { ProfileAPI, Profile, TrackAPI, Track, ArtistAPI, Artist };
