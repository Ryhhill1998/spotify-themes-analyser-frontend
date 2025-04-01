import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

const protectedRoutes = ["/dashboard"];
const publicRoutes = ["/", "/login"];

export default async function middleware(req: NextRequest) {
	const path = req.nextUrl.pathname;
	const isProtectedRoute = protectedRoutes.includes(path);
	const isPublicRoute = publicRoutes.includes(path);

	const cookieStore = await cookies();

	// Redirect to /login if the user is not authenticated
	if (
		isProtectedRoute &&
		!(cookieStore.has("access_token") && cookieStore.has("refresh_token"))
	) {
		return NextResponse.redirect(new URL("/login", req.nextUrl));
	}

	// Redirect to /profile if the user is authenticated
	if (
		isPublicRoute &&
		cookieStore.has("access_token") &&
		cookieStore.has("refresh_token")
	) {
		return NextResponse.redirect(new URL("/profile", req.nextUrl));
	}

	return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
	matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
