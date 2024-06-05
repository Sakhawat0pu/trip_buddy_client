"use client";
import { useGetAllTripsQuery } from "@/redux/api/tripsApi";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import TripsCard from "@/components/Shared/Trips/TripsCard";

const RecentlyTripsPosted = () => {
	const { data: trips, isLoading } = useGetAllTripsQuery({
		sortBy: "createdAt",
		sortOrder: "desc",
		limit: 9,
	});

	return (
		<Box sx={{ mt: { xs: 10, md: 12 }, mb: { xs: 6, md: 9 } }}>
			<Typography
				variant="h3"
				component="h3"
				color="primary.main"
				fontWeight={600}
				textAlign="center"
				fontSize={{ xs: 24, md: 40 }}
				mb={{ xs: 5, md: 7 }}
				lineHeight={1.5}
			>
				Upcoming Trips by Fellow Adventurers
			</Typography>
			{!isLoading && (
				<Grid container spacing={2}>
					{trips?.data?.map((trip: any) => (
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
				mt={{ xs: 6, md: 8 }}
			>
				<Link href={`/trips`}>
					<Button sx={{ textAlign: "center" }} size="large">
						See More
					</Button>
				</Link>
			</Stack>
		</Box>
	);
};

export default RecentlyTripsPosted;
