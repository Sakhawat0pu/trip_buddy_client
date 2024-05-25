"use server";

import { authKey } from "@/constants/authKey";
import { cookies } from "next/headers";

export const getAccessTokenFromCookies = () => {
	const accessToken = cookies().get(authKey)?.value;
	return accessToken;
};
