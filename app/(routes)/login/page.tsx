"use client";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

import SpotifySignInButton from "@/app/(routes)/login/components/SpotifySignInButton";
import { getTokens } from "@/app/api/data";

const TokensSetter = () => {
	const searchParams = useSearchParams();

	const code = searchParams.get("code");

	useEffect(() => {
		if (code) {
			getTokens(code);
		}
	}, [code]);

	return <></>;
};

const LoginPage = () => {
	return (
		<div>
			<h1>Login page</h1>

			<Suspense>
				<TokensSetter />
			</Suspense>

			<SpotifySignInButton />
		</div>
	);
};

export default LoginPage;
