"use client";

import TripBanner from "@/components/UI/TripDetails/TripBanner/TripBanner";
import TripInfo from "@/components/UI/TripDetails/TripBanner/TripInfo";
import { useGetAtripQuery } from "@/redux/api/tripsApi";
import { Box, Container } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const TripDetails = ({ params }: { params: Record<string, any> }) => {
	const { data: tripData, isLoading } = useGetAtripQuery(params?.tripId);
	const bannerImages = tripData?.photos;

	if (isLoading) {
		return (
			<Box width="100%" sx={{ display: "flex", justifyContent: "center" }}>
				<CircularProgress />
			</Box>
		);
	}
	return (
		<Container
			sx={{
				transform: { xs: "translateY(-160px)", md: "translateY(-240px)" },
				marginBottom: { xs: "-160px", md: "-200px" },
			}}
		>
			<TripBanner
				bannerImages={bannerImages}
				user={tripData.user}
				tripId={tripData.id}
			/>
			<TripInfo tripDetails={tripData} />
		</Container>
	);
};

export default TripDetails;
