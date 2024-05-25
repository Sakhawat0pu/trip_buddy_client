"use server";

import { authKey } from "@/constants/authKey";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const removeTokensFromCookies = (redirectPath?: string) => {
	cookies().delete(authKey);
	cookies().delete("refreshToken");
	if (redirectPath) {
		redirect(redirectPath);
	}
};
