"use client";

import { redirect } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import { getSpotifyAuthUrl } from "@/app/api/data";
import LoadingSpinner from "./components/LoadingSpinner";

const LoginPage = () => {
	const [isLoading, setIsLoading] = useState(false);

	const handleLoginClick = async () => {
		setIsLoading(true);
		const loginUrl = await getSpotifyAuthUrl();
		redirect(loginUrl);
	};

	return (
		<div className="container mx-auto mt-10 p-6 flex flex-col gap-4 items-center justify-center">
			<h1 className="text-white font-bold text-2xl">
				Welcome to Spotify Insights!
			</h1>

			<p className="text-center text-stone-200 font-medium">
				Discover what music truly resonates with you. See your top
				artists, tracks and even the dominant emotions in your listening
				history.
			</p>

			<p className="text-center text-stone-200 font-medium">
				Sign in to explore your unique musical fingerprint.
			</p>

			<Button
				className="bg-stone-700 hover:bg-stone-600 text-stone-100 text-sm w-fit px-4 py-5 rounded-4xl font-semibold flex gap-2 items-center cursor-pointer"
				onClick={handleLoginClick}
				disabled={isLoading}
			>
				<Image
					src="/spotify-icon-dark-mode.svg"
					alt="Spotify"
					width={22}
					height={22}
				/>
				Sign in with Spotify
			</Button>

			{isLoading && <LoadingSpinner text="Connecting to Spotify" />}
		</div>
	);
};

export default LoginPage;
