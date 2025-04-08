import { redirect } from "next/navigation";
import { NextRequest } from "next/server";
import { getTokens } from "../../data";

const GET = async (request: NextRequest) => {
	const searchParams = request.nextUrl.searchParams;
	const code = searchParams.get("code");
	const state = searchParams.get("state");
	const oauthStateCookie = request.cookies.get("oauth_state")?.value;

	if (!code || state !== oauthStateCookie) {
		redirect("/login");
	}

	await getTokens(code);

	redirect("/profile");
};

export { GET };
