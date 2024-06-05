"use client";
import TripsCard from "@/components/Shared/Trips/TripsCard";
import { useGetMyPostedTripsQuery } from "@/redux/api/tripsApi";
import { Box, Grid, Pagination, Stack, Typography } from "@mui/material";
import { useState } from "react";

const MyPostDetails = () => {
	const [page, setPage] = useState(1);
	const { data, isLoading } = useGetMyPostedTripsQuery({
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
	const myTrips = data?.data;

	if (!isLoading && myTrips?.length === 0) {
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
					You haven't shared any trip plan yet!
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
				My Scheduled Trips
			</Typography>
			{!isLoading && (
				<Grid container spacing={2}>
					{myTrips?.map((trip: any) => (
						<Grid key={trip.id} item xs={12} md={4}>
							<TripsCard
								id={trip.id}
								name={trip.user.name}
								imgUrl={trip.photos[0]}
								destination={trip.destination}
								activities={trip.activities}
								startDate={trip.startDate}
								endDate={trip.endDate}
								budget={trip.budget}
								showDetails={false}
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

export default MyPostDetails;
