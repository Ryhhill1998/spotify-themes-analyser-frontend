import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

const protectedRoutes = [
	/^\/profile$/,
	/^\/top\/(artists|tracks|emotions)\/(short|medium|long)-term$/,
	/^\/tracks\/[^/]+$/,
	/^\/artists\/[^/]+$/,
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

	// Redirect to /login if the user is not authenticated
	if ((isProtectedRoute || path === "/") && !accessToken) {
		return NextResponse.redirect(new URL("/login", req.nextUrl));
	}

	// Redirect to /profile if the user is authenticated
	if (isPublicRoute && accessToken) {
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
