import { createApi } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "../tagTypes";
import { axiosBaseQuery } from "../../helpers/axios/axiosBaseQuery";

export const baseApi = createApi({
	reducerPath: "baseApi",
	baseQuery: axiosBaseQuery({
		baseUrl: process.env.NEXT_PUBLIC_BACKEND_URL as string,
	}),
	tagTypes: tagTypesList,
	endpoints: () => ({}),
});
