"use client";

import { handleCookieSet } from "@/app/api/data";

const SpotifySignInButton = () => {
	return (
		<button className="bg-white" onClick={handleCookieSet}>
			Sign in with Spotify
		</button>
	);
};

export default SpotifySignInButton;
