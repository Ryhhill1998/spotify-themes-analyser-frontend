"use client";

import { handleCookieSet } from "@/app/api/data";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// const handleSpotifyLogin = async () => {
// 	window.location.href = `${API_BASE_URL}/auth/spotify/cookies`;
// };

const SpotifySignInButton = () => {
	return (
		<button className="bg-white" onClick={handleCookieSet}>
			Sign in with Spotify
		</button>
	);
};

export default SpotifySignInButton;
