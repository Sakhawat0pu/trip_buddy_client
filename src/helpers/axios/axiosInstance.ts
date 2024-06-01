"use server";
import { getAccessTokenFromCookies } from "@/services/actions/getAccessTokenFromCookies";
import { setAccessTokenToCookiesAndRedirect } from "@/services/actions/setAccessTokenToCookies";
import { getNewAccessToken } from "@/services/auth.services";
import { TErrorResponse, TSuccessResponse } from "@/types";
import axios from "axios";

const instance = axios.create();

instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 60000;

instance.interceptors.request.use(
	function (config) {
		const accessToken = getAccessTokenFromCookies();

		if (accessToken) {
			config.headers.Authorization = accessToken;
		}

		return config;
	},

	function (error) {
		return Promise.reject(error);
	}
);

instance.interceptors.response.use(
	//@ts-ignore
	function (response) {
		const responseObject: TSuccessResponse = {
			data: response?.data?.data,
			meta: response?.data?.meta,
		};

		return responseObject;
	},
	async function (error) {
		const config = error?.config;
		if (
			error?.response?.status === 401 &&
			error?.response?.data?.error?.name === "TokenExpiredError" &&
			!config.sent
		) {
			config.sent = true;
			const res = await getNewAccessToken();

			const accessToken = res?.data?.accessToken;
			config.headers["Authorization"] = accessToken;
			setAccessTokenToCookiesAndRedirect(accessToken);
			return instance(config);
		} else {
			const errorObject: TErrorResponse = {
				statusCode: error?.response?.data?.statusCode,
				message: error?.response?.data?.message,
				errorMessages: error?.response?.data?.error,
			};
			return errorObject;
		}
	}
);

export { instance as axiosInstance };
