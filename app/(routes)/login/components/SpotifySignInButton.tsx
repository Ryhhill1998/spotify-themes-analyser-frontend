"use client";

import ListenOnSpotifyButton from "../../(auth)/components/common/ListenOnSpotifyButton";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const SpotifySignInButton = () => {
	return (
		<ListenOnSpotifyButton
			spotifyUrl={`${API_BASE_URL}/auth/spotify/login`}
		/>
	);
};

export default SpotifySignInButton;
