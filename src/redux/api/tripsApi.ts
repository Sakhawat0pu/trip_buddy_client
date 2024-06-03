import { TMeta } from "@/types";
import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const tripsApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getAtrip: build.query({
			query: (id: string) => ({
				url: `/trips/${id}/single-trip`,
				method: "GET",
			}),
			providesTags: [tagTypes.tripPost],
		}),
		getAllTrips: build.query({
			query: (args: Record<string, any> | undefined) => ({
				url: "/trips",
				method: "GET",
				params: args,
			}),
			transformResponse: (data: Record<string, any>[], meta: TMeta) => ({
				data,
				meta,
			}),
			providesTags: [tagTypes.tripPosts],
		}),
		getMyRequestedTrips: build.query({
			query: (args: Record<string, any> | undefined) => ({
				url: "/trips/my-requested-trips",
				method: "GET",
				params: args,
			}),
			transformResponse: (data: Record<string, any>[], meta: TMeta) => ({
				data,
				meta,
			}),
			providesTags: [tagTypes.myReqTrips],
		}),
		getMyPostedTrips: build.query({
			query: (args: Record<string, any> | undefined) => ({
				url: "/trips/my-posted-trips",
				method: "GET",
				params: args,
			}),
			transformResponse: (data: Record<string, any>[], meta: TMeta) => ({
				data,
				meta,
			}),
			providesTags: [tagTypes.myPostTrips],
		}),
		getMyTripsJoinRequests: build.query({
			query: (args: Record<string, any> | undefined) => ({
				url: "/trips/join-requests",
				method: "GET",
				params: args,
			}),
			transformResponse: (data: Record<string, any>[], meta: TMeta) => ({
				data,
				meta,
			}),
			providesTags: [tagTypes.tripJoinRequests],
		}),
		deleteATrip: build.mutation({
			query: (id: string) => ({
				url: `/trips/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: [
				tagTypes.tripPost,
				tagTypes.tripPosts,
				tagTypes.myPostTrips,
				tagTypes.myReqTrips,
			],
		}),
		createATrip: build.mutation({
			query: (data) => ({
				url: "/trips",
				method: "POST",
				contentType: "multipart/form-data",
				data: data,
			}),
			invalidatesTags: [
				tagTypes.tripPosts,
				tagTypes.myPostTrips,
				tagTypes.myReqTrips,
			],
		}),
	}),
	overrideExisting: true,
});

export const {
	useCreateATripMutation,
	useGetAtripQuery,
	useGetAllTripsQuery,
	useGetMyPostedTripsQuery,
	useGetMyRequestedTripsQuery,
	useGetMyTripsJoinRequestsQuery,
	useDeleteATripMutation,
} = tripsApi;
