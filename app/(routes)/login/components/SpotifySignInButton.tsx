"use client";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const handleSpotifyLogin = async () => {
	window.location.href = `${API_BASE_URL}/auth/spotify/login`;
};

const SpotifySignInButton = () => {
	return (
		<button className="bg-white" onClick={handleSpotifyLogin}>
			Sign in with Spotify
		</button>
	);
};

export default SpotifySignInButton;
