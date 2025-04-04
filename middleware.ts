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

const middleware = async (req: NextRequest) => {
	const path = req.nextUrl.pathname;

	const isProtectedRoute = protectedRoutes.some((pattern) =>
		pattern.test(path)
	);
	const isPublicRoute = publicRoutes.includes(path);

	const cookieStore = await cookies();

	const isAuthenticated =
		cookieStore.has("access_token") && cookieStore.has("refresh_token");

	cookieStore.set({ name: "test", value: "test" });

	// Redirect to /login if the user is not authenticated
	if ((isProtectedRoute || path === "/") && !isAuthenticated) {
		return NextResponse.redirect(new URL("/login", req.nextUrl));
	}

	// Redirect to /profile if the user is authenticated
	if (isPublicRoute && isAuthenticated) {
		return NextResponse.redirect(new URL("/profile", req.nextUrl));
	}

	const response = NextResponse.next();

	return response;
};

// Routes Middleware should not run on
const config = {
	matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};

export default middleware;

export { config };
