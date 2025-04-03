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
	console.log({ path });
	console.log("COOKIES FROM REQUEST:", req.cookies);

	const isProtectedRoute = protectedRoutes.some((pattern) =>
		pattern.test(path)
	);
	const isPublicRoute = publicRoutes.includes(path);

	const cookieStore = await cookies();
	// console.log(cookieStore.getAll());

	const isAuthenticated =
		cookieStore.has("access_token") && cookieStore.has("refresh_token");

	const response = NextResponse.next();

	const accessToken = req.cookies.get("access_token")?.value ?? "";
	const refreshToken = req.cookies.get("refresh_token")?.value ?? "";

	if (path === "/login/?success=true") {
		response.cookies.set({
			name: "access_token",
			value: accessToken,
			path: "/",
		});
		response.cookies.set({
			name: "refresh_token",
			value: refreshToken,
			path: "/",
		});
	}

	// Redirect to /login if the user is not authenticated
	// if (
	// 	(isProtectedRoute || req.nextUrl.pathname === "/") &&
	// 	!isAuthenticated
	// ) {
	// 	return NextResponse.redirect(new URL("/login", req.nextUrl));
	// }

	// // Redirect to /profile if the user is authenticated
	// if (isPublicRoute && isAuthenticated) {
	// 	return NextResponse.redirect(new URL("/profile", req.nextUrl));
	// }

	return response;
};

// Routes Middleware should not run on
const config = {
	matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};

export default middleware;

export { config };
