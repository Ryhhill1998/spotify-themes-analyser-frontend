"use client";
// import { useRouter, useSearchParams } from "next/navigation";
// import { Suspense, useEffect } from "react";

import SpotifySignInButton from "@/app/(routes)/login/components/SpotifySignInButton";
// import { getTokens } from "@/app/api/data";

// const TokensSetter = () => {
// 	const router = useRouter();
// 	const searchParams = useSearchParams();

// 	const code = searchParams.get("code");

// 	useEffect(() => {
// 		if (code) {
// 			getTokens(code).then(() => router.push("/"));
// 		}
// 	}, [code, router]);

// 	return <></>;
// };

const LoginPage = () => {
	return (
		<div>
			<h1>Login page</h1>

			<SpotifySignInButton />

			{/* <Suspense>
				<TokensSetter />
			</Suspense> */}
		</div>
	);
};

export default LoginPage;
