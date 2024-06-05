import { TUserRole, TUserStatus } from "@/types";
import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const userApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getMe: build.query({
			query: () => ({
				url: "/users/me",
				method: "GET",
			}),
			providesTags: [tagTypes.me],
		}),
		getAllUsers: build.query({
			query: (args: Record<string, any> | undefined) => ({
				url: "/users",
				method: "GET",
				params: args,
			}),
			providesTags: [tagTypes.users],
		}),
		getSingleUser: build.query({
			query: (id: string) => ({
				url: `/users/${id}`,
				method: "GET",
			}),
			providesTags: [tagTypes.user],
		}),
		updateMe: build.mutation({
			query: (data: Record<string, any>) => ({
				url: `/users/update-me`,
				method: "PATCH",
				data: data,
			}),
			invalidatesTags: [tagTypes.me, tagTypes.user, tagTypes.user],
		}),

		updateUserRole: build.mutation({
			query: (data: { id: string; role: TUserRole }) => ({
				url: `/users/role/${data?.id}/edit`,
				method: "PATCH",
				data: data,
			}),
			invalidatesTags: [
				tagTypes.tripPosts,
				tagTypes.myPostTrips,
				tagTypes.myReqTrips,
				tagTypes.me,
				tagTypes.user,
				tagTypes.users,
			],
		}),
		updateUserStatus: build.mutation({
			query: (data: { id: string; status: TUserStatus }) => ({
				url: `/users/status/${data?.id}`,
				method: "PATCH",
				data: data,
			}),
			invalidatesTags: [
				tagTypes.tripPosts,
				tagTypes.myPostTrips,
				tagTypes.myReqTrips,
				tagTypes.me,
				tagTypes.user,
				tagTypes.users,
			],
		}),
		createAdmin: build.mutation({
			query: (data) => ({
				url: "/register",
				method: "POST",
				data: data,
			}),
			invalidatesTags: [tagTypes.users],
		}),
	}),
	overrideExisting: true,
});

export const {
	useGetMeQuery,
	useGetSingleUserQuery,
	useGetAllUsersQuery,
	useUpdateMeMutation,
	useUpdateUserRoleMutation,
	useUpdateUserStatusMutation,
	useCreateAdminMutation,
} = userApi;
