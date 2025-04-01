import { redirect } from "next/navigation";
import { cookies } from "next/headers";

import SpotifySignInButton from "@/app/components/SpotifySignInButton";

const LoginPage = async () => {
	const cookieStore = await cookies();

	if (cookieStore.has("access_token") && cookieStore.has("refresh_token")) {
		redirect("/profile");
	}

	return (
		<div>
			<h1>Login page</h1>

			<SpotifySignInButton />
		</div>
	);
};

export default LoginPage;
