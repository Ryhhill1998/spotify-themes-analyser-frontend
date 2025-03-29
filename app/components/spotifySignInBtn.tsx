"use client";

const API_BASE_URL = "http://localhost:8080";

const handleSpotifyLogin = () => {
	window.location.href = `${API_BASE_URL}/auth/spotify/login`;
};

const SpotifySignInBtn = () => {
	return (
		<button className="bg-white" onClick={handleSpotifyLogin}>
			Sign in with Spotify
		</button>
	);
};

export default SpotifySignInBtn;
