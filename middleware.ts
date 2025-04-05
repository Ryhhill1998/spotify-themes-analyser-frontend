import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

const protectedRoutes = [
	/^\/profile$/,
	/^\/top\/tracks$/,
	/^\/top\/artists$/,
	/^\/top\/emotions$/,
	/^\/tracks\/[^/]+$/,
	/^\/tracks\/[^/]+\/emotions\/[^/]+$/,
];
const publicRoutes = [/^\/$/, /^\/login(?:\?.*)?$/];

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
	const isPublicRoute = publicRoutes.some((pattern) => pattern.test(path));

	const cookieStore = await cookies();
	const accessToken = cookieStore.get("access_token");
	const accessTokenExists = accessToken?.value;
	const refreshToken = cookieStore.get("refresh_token");
	const refreshTokenExists = refreshToken?.value;

	// Refresh tokens if accessToken has expired but refreshToken exists
	if (!accessTokenExists && refreshTokenExists) {
		try {
			const res = await fetch(
				`${API_BASE_URL}/auth/spotify/refresh-tokens`,
				{
					method: "POST",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ refresh_token: refreshToken.value }),
				}
			);
			const refreshData: Tokens = await res.json();
			const response = NextResponse.next();
			response.cookies.set({
				name: "access_token",
				value: refreshData.access_token,
				secure: true,
				sameSite: "none",
				maxAge: 3300,
			});
			response.cookies.set({
				name: "refresh_token",
				value: refreshData.refresh_token,
				secure: true,
				sameSite: "none",
			});
			return response;
		} catch (error) {
			cookieStore.delete("access_token");
			cookieStore.delete("refresh_token");
			return NextResponse.redirect(new URL("/login", req.nextUrl));
		}
	}

	// Redirect to /login if the user is not authenticated
	if (
		(isProtectedRoute || path === "/") &&
		!(accessTokenExists && refreshTokenExists)
	) {
		return NextResponse.redirect(new URL("/login", req.nextUrl));
	}

	// Redirect to /profile if the user is authenticated
	if (isPublicRoute && accessTokenExists && refreshTokenExists) {
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
