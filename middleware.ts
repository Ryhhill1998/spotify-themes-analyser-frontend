import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

const protectedRoutes = [
	/^\/profile$/,
	/^\/top\/tracks(?:\?.*)?$/,
	/^\/top\/artists(?:\?.*)?$/,
	/^\/top\/emotions(?:\?.*)?$/,
	/^\/tracks\/[^/]+(?:\?.*)?$/,
];
const publicRoutes = ["/", "/login"];

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

type Tokens = {
	access_token: string;
	refresh_token: string;
};

const middleware = async (req: NextRequest) => {
	const path = req.nextUrl.pathname;

	const isProtectedRoute = protectedRoutes.some((pattern) =>
		pattern.test(path)
	);
	const isPublicRoute = publicRoutes.includes(path);

	const cookieStore = await cookies();
	const accessToken = cookieStore.get("access_token");
	const refreshToken = cookieStore.get("refresh_token");

	// Redirect to /login if the user is not authenticated
	if ((isProtectedRoute || path === "/") && !(accessToken && refreshToken)) {
		return NextResponse.redirect(new URL("/login", req.nextUrl));
	}

	// Redirect to /profile if the user is authenticated
	if (isPublicRoute && accessToken && refreshToken) {
		return NextResponse.redirect(new URL("/profile", req.nextUrl));
	}

	// create response object
	const response = NextResponse.next();

	// Refresh tokens if accessToken has expired but refreshToken exists
	if (!accessToken && refreshToken) {
		try {
			const res = await fetch(
				`${API_BASE_URL}/auth/spotify/refresh-tokens`,
				{
					method: "POST",
				}
			);
			const refreshData: Tokens = await res.json();
			response.cookies.set({
				name: "access_token",
				value: refreshData.access_token,
			});
			response.cookies.set({
				name: "refresh_token",
				value: refreshData.refresh_token,
			});
		} catch (error) {
			cookieStore.delete("access_token");
			return NextResponse.redirect(new URL("/login", req.nextUrl));
		}
	}

	return response;
};

// Routes Middleware should not run on
const config = {
	matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};

export default middleware;

export { config };
