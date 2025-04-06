"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

import SpotifySignInButton from "@/app/(routes)/login/components/SpotifySignInButton";
import { getTokens } from "@/app/api/data";

const TokensSetter = () => {
	const router = useRouter();
	const searchParams = useSearchParams();

	const code = searchParams.get("code");

	useEffect(() => {
		if (code) {
			getTokens(code).then(() => router.push("/"));
		}
	}, [code, router]);

	return <></>;
};

const LoginPage = () => {
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

			<SpotifySignInButton />

			<Suspense>
				<TokensSetter />
			</Suspense>
		</div>
	);
};

export default LoginPage;
