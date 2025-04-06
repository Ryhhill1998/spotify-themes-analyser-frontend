"use client";

import { authUrl } from "@/app/api/data";
import Link from "next/link";

const SpotifySignInButton = () => {
	return (
		<Link href={authUrl} className="bg-white">
			Sign in with Spotify
		</Link>
	);
};

export default SpotifySignInButton;
