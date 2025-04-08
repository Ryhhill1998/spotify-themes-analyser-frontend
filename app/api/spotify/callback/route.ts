import { redirect } from "next/navigation";
import { NextRequest } from "next/server";
import { getTokens } from "../../data";
import { cookies } from "next/headers";

const GET = async (request: NextRequest) => {
	const searchParams = request.nextUrl.searchParams;
	const code = searchParams.get("code");
	const state = searchParams.get("state");
	const oauthStateCookie = request.cookies.get("oauth_state")?.value;

	if (!code || state !== oauthStateCookie) {
		redirect("/login");
	}

	const cookieStore = await cookies();
	cookieStore.delete("oauth_state");

	await getTokens(code);

	redirect("/profile");
};

export { GET };
