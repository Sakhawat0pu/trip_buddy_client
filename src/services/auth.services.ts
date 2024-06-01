import { jwtDecode } from "jwt-decode";
import { removeTokensFromCookies } from "./actions/removeTokensFromCookies";
import { axiosInstance } from "@/helpers/axios/axiosInstance";
import { getAccessTokenFromCookies } from "./actions/getAccessTokenFromCookies";
import { hasAccessToken } from "./actions/hasAccessToken";

export const getUserInfo =  () => {
	const token =  getAccessTokenFromCookies();

	if (token) {
		const decodedData: any = jwtDecode(token);
		return {
			...decodedData,
			role: decodedData?.role.toLowerCase(),
		};
	} else {
		return {};
	}
};

export const isLoggedIn = () => {
	return hasAccessToken();
};

export const removeUser = (redirectPath?: string) => {
	return removeTokensFromCookies(redirectPath);
};

export const getNewAccessToken = async () => {
	return await axiosInstance({
		url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/refresh-token`,
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		withCredentials: true,
	});
};
