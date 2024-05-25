"use server";

import { authKey } from "@/constants/authKey";
import { cookies } from "next/headers";

export const hasAccessToken = () => {
	return cookies().has(authKey);
};
