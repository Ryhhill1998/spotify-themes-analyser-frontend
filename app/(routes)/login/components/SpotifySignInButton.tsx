"use client";

import Link from "next/link";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const SpotifySignInButton = () => {
	return (
		<Link href={`${API_BASE_URL}/auth/spotify/login`} className="bg-white">
			Sign in with Spotify
		</Link>
	);
};

export default SpotifySignInButton;
