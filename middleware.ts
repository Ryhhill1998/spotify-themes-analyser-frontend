import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { refreshTokens } from "./app/api/data";

const protectedRoutes = [
	/^\/profile$/,
	/^\/top\/tracks$/,
	/^\/top\/artists$/,
	/^\/top\/emotions$/,
	/^\/tracks\/[^/]+$/,
	/^\/tracks\/[^/]+\/emotions\/[^/]+$/,
];
const publicRoutes = [/^\/$/, /^\/login(?:\?.*)?$/];

const middleware = async (req: NextRequest) => {
	const path = req.nextUrl.pathname;

	const isProtectedRoute = protectedRoutes.some((pattern) =>
		pattern.test(path)
	);
	const isPublicRoute = publicRoutes.some((pattern) => pattern.test(path));

	const cookieStore = await cookies();
	const accessToken = cookieStore.get("access_token");
	const refreshToken = cookieStore.get("refresh_token");

	// Refresh tokens if accessToken has expired but refreshToken exists
	if (!accessToken && refreshToken) {
		await refreshTokens();
		return NextResponse.redirect(new URL(path, req.nextUrl));
	}

	// Redirect to /login if the user is not authenticated
	if ((isProtectedRoute || path === "/") && !(accessToken && refreshToken)) {
		return NextResponse.redirect(new URL("/login", req.nextUrl));
	}

	// Redirect to /profile if the user is authenticated
	if (isPublicRoute && accessToken && refreshToken) {
		return NextResponse.redirect(new URL("/profile", req.nextUrl));
	}

	return NextResponse.next();
};

// Routes Middleware should not run on
const config = {
	matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};

export default middleware;

export { config };
