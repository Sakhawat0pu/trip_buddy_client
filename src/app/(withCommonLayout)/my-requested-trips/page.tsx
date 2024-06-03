import MyRequestedTripsBanner from "@/components/UI/MyRequestedTrips/MyRequestedTripsBanner/MyRequestedTripsBanner";
import MyRequestedTripsList from "@/components/UI/MyRequestedTrips/MyRequestedTripsList/MyRequestedTripsList";
import { Container } from "@mui/material";

const MyRequestedTripsPage = () => {
	return (
		<Container
			sx={{
				transform: { xs: "translateY(-160px)", md: "translateY(-240px)" },
				marginBottom: { xs: "-160px", md: "-200px" },
			}}
		>
			<MyRequestedTripsBanner />
			<MyRequestedTripsList />
		</Container>
	);
};

export default MyRequestedTripsPage;
