"use client";
import TripsCard from "@/components/Shared/Trips/TripsCard";
import { useGetAllTripsQuery } from "@/redux/api/tripsApi";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { useState } from "react";

const AllTripsDetails = () => {
	const [page, setPage] = useState(1);
	const { data, isLoading } = useGetAllTripsQuery({
		sortBy: "createdAt",
		sortOrder: "desc",
		page: page,
		limit: 9,
	});

	const trips = data?.data;
	const meta = data?.meta;

	const handlePageChange = (
		event: React.ChangeEvent<unknown>,
		value: number
	) => {
		setPage(value);
	};

	return (
		<Box sx={{ my: { xs: 8, md: 10 } }}>
			<Typography
				variant="h3"
				component="h3"
				color="primary.main"
				fontWeight={600}
				textAlign="center"
				fontSize={{ xs: 30, md: 50 }}
				mb={{ xs: 5, md: 7 }}
			>
				Discover Upcoming Trips
			</Typography>
			{!isLoading && (
				<Grid container spacing={2}>
					{trips?.map((trip: any) => (
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

export default AllTripsDetails;
