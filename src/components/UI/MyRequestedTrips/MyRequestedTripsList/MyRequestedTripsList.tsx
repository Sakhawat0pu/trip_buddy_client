"use client";
import TripsCard from "@/components/Shared/Trips/TripsCard";
import { useGetMyRequestedTripsQuery } from "@/redux/api/tripsApi";
import { Box, Grid, Pagination, Stack, Typography } from "@mui/material";
import { useState } from "react";

const MyRequestedTripsList = () => {
	const [page, setPage] = useState(1);
	const { data, isLoading } = useGetMyRequestedTripsQuery({
		sortBy: "createdAt",
		sortOrder: "desc",
		page: page,
		limit: 9,
	});

	const handlePageChange = (
		event: React.ChangeEvent<unknown>,
		value: number
	) => {
		setPage(value);
	};

	const meta = data?.meta;
	const myRequestedTrips = data?.data;

	if (myRequestedTrips?.length === 0) {
		return (
			<Box my={{ xs: 5, md: 8 }}>
				<Typography
					variant="h3"
					component="h3"
					color="red"
					fontWeight={600}
					textAlign="center"
					fontSize={{ xs: 25, md: 50 }}
					mb={{ xs: 5, md: 7 }}
				>
					No Join Requests Sent Yet.
				</Typography>
			</Box>
		);
	}

	return (
		<Box my={{ xs: 5, md: 8 }}>
			<Typography
				variant="h3"
				component="h3"
				color="primary.main"
				fontWeight={600}
				textAlign="center"
				fontSize={{ xs: 25, md: 50 }}
				mb={{ xs: 5, md: 7 }}
			>
				My Requests To Join Trips
			</Typography>
			{!isLoading && (
				<Grid container spacing={2}>
					{myRequestedTrips?.map((myRequestedTrip: any) => (
						<Grid key={myRequestedTrip.id} item xs={12} md={4}>
							<TripsCard
								id={myRequestedTrip.trip.id}
								name={myRequestedTrip.trip.user.name}
								imgUrl={myRequestedTrip.trip.photos[0]}
								destination={myRequestedTrip.trip.destination}
								activities={myRequestedTrip.trip.activities}
								startDate={myRequestedTrip.trip.startDate}
								endDate={myRequestedTrip.trip.endDate}
								budget={myRequestedTrip.trip.budget}
								showDetails={false}
								status={myRequestedTrip.status}
							/>
						</Grid>
					))}
				</Grid>
			)}
			<Stack
				direction="row"
				justifyContent="center"
				alignItems="center"
				sx={{ mt: { xs: 8, md: 12 } }}
			>
				<Pagination
					count={meta?.totalPages}
					variant="outlined"
					size="medium"
					page={page}
					onChange={handlePageChange}
				/>
			</Stack>
		</Box>
	);
};

export default MyRequestedTripsList;
