"use client";

import SpotifyButton from "../../(auth)/components/common/SpotifyButton";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const SpotifySignInButton = () => {
	return (
		<SpotifyButton
			text="Sign in with Spotify"
			spotifyUrl={`${API_BASE_URL}/auth/spotify/login`}
		/>
	);
};

export default SpotifySignInButton;
