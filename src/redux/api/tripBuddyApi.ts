import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const tripBuddyApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		sendRequest: build.mutation({
			query: (data: Record<string, any>) => ({
				url: `/trip/${data.id}`,
				method: "POST",
				data: data.body,
			}),
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
				url: "travel-buddies/requests-to-join",
				method: "GET",
			}),
			providesTags: [tagTypes.requestsToJoinTrip],
		}),
		respondToTravelReq: build.mutation({
			query: (data: Record<string, any>) => ({
				url: `travel-buddies/${data.buddyId}`,
				method: "PATCH",
				data: data.body,
			}),
			invalidatesTags: [
				tagTypes.myReqTrips,
				tagTypes.requestsToJoinTrip,
				tagTypes.travelBuddies,
			],
		}),
	}),
});

export const {
	useGetRequestsToJoinMyTripsQuery,
	useGetTravelBuddiesForATripQuery,
	useRespondToTravelReqMutation,
	useSendRequestMutation,
} = tripBuddyApi;
