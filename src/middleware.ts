import { authKey } from "@/constants/authKey";
import { getUserInfo } from "@/services/auth.services";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// const commonPath = ["/dashboard", "/dashboard/change-password"];

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;

	const accessToken = cookies().get(authKey)?.value;
	const userRole = getUserInfo().role;

	if (
		accessToken &&
		pathname.includes("dashboard") &&
		(userRole === "admin" || userRole === "super_admin")
	) {
		return NextResponse.next();
	} else if (
		accessToken &&
		pathname.includes("dashboard") &&
		userRole === "traveler"
	) {
		return NextResponse.redirect(new URL("/login", request.url));
	} else if (accessToken && !pathname.includes("dashboard")) {
		return NextResponse.next();
	}

	return NextResponse.redirect(
		new URL(`/login?pathname=${pathname}`, request.url)
	);
}

export const config = {
	matcher: ["/dashboard/:page*", "/share-trip", "/trips/send-request"],
};
