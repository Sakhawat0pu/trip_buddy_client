import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const tripBuddyApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		sendRequest: build.mutation({
			query: (data: Record<string, any>) => {
				return {
					url: `/trip/${data?.id}/request`,
					method: "POST",
					contentType: "application/json",
					data: data?.body,
				};
			},
			invalidatesTags: [
				tagTypes.myReqTrips,
				tagTypes.requestsToJoinTrip,
				tagTypes.travelBuddies,
			],
		}),
		getTravelBuddiesForATrip: build.query({
			query: (id: string) => ({
				url: `/travel-buddies/${id}`,
				method: "GET",
			}),
			providesTags: [tagTypes.travelBuddies],
		}),
		getRequestsToJoinMyTrips: build.query({
			query: () => ({
				url: "/travel-buddies/requests-to-join",
				method: "GET",
			}),
			providesTags: [tagTypes.requestsToJoinTrip],
		}),
		respondToTravelReq: build.mutation({
			query: (data: Record<string, any>) => ({
				url: `/travel-buddies/${data.userId}/respond`,
				method: "PATCH",
				data: data.body,
			}),
			invalidatesTags: [
				tagTypes.myReqTrips,
				tagTypes.requestsToJoinTrip,
				tagTypes.travelBuddies,
				tagTypes.tripJoinRequests,
			],
		}),
	}),
	overrideExisting: true,
});

export const {
	useGetRequestsToJoinMyTripsQuery,
	useGetTravelBuddiesForATripQuery,
	useRespondToTravelReqMutation,
	useSendRequestMutation,
} = tripBuddyApi;
