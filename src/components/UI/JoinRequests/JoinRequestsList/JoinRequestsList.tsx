"use client";
import { useGetMyTripsJoinRequestsQuery } from "@/redux/api/tripsApi";
import { Box, Grid, Pagination, Stack, Typography } from "@mui/material";
import { useState } from "react";
import JoinRequestCard from "../JoinRequestsCard/JoinRequestsCard";

const JoinRequestsList = () => {
	const [page, setPage] = useState(1);
	const { data, isLoading } = useGetMyTripsJoinRequestsQuery({
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
	const myTripsJoinRequests = data?.data;

	if (myTripsJoinRequests?.length === 0) {
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
					No Join Requests Available at the Moment.
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
				Trip Participation Requests
			</Typography>
			{!isLoading && (
				<Grid container spacing={2}>
					{myTripsJoinRequests?.map((req: any) => (
						<Grid key={req.id} item xs={12} md={4}>
							<JoinRequestCard
								id={req.trip.id}
								tripId={req.tripId}
								userId={req.userId}
								name={req.trip.user.name}
								imgUrl={req.trip.photos[0]}
								destination={req.trip.destination}
								startDate={req.trip.startDate}
								endDate={req.trip.endDate}
								status={req.status}
								requesterName={req.requesterName}
								requesterEmail={req.requesterEmail}
								requesterContactNo={req.requesterContactNo}
								requesterAccomPreference={req?.requesterAccomPreference}
								message={req?.message}
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

export default JoinRequestsList;
