import { authKey } from "@/constants/authKey";
import { getUserInfo } from "@/services/auth.services";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

const commonPath = ["/dashboard", "/dashboard/change-password"];

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;

	const accessToken = cookies().get(authKey)?.value;
	const userRole = getUserInfo().role;

	if (!accessToken) {
		return NextResponse.redirect(new URL("/login", request.url));
	}
	if (accessToken && commonPath.includes(pathname)) {
		return NextResponse.next();
	}

	if (accessToken && pathname.split("/")[2] === userRole) {
		return NextResponse.next();
	}

	return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
	matcher: ["/dashboard/:page*"],
};
