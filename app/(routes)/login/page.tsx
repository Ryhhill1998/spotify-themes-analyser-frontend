"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

import SpotifySignInButton from "@/app/(routes)/login/components/SpotifySignInButton";
import { getCookies } from "@/app/api/data";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const LoginPage = () => {
	const searchParams = useSearchParams();
	const router = useRouter();

	const code = searchParams.get("code");

	useEffect(() => {
		if (code) {
			getCookies(code);
		}
	}, [code, router]);

	return (
		<div>
			<h1>Login page</h1>

			<SpotifySignInButton />
		</div>
	);
};

export default LoginPage;
