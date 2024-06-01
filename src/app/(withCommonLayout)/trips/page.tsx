import AllTripsBanner from "@/components/UI/AllTrips/AllTripsBanner/AllTripsBanner";
import AllTripsDetails from "@/components/UI/AllTrips/AllTripsDetails/AllTripsDetails";
import { Container } from "@mui/material";

const AllTripsPage = () => {
	return (
		<Container
			sx={{
				transform: { xs: "translateY(-160px)", md: "translateY(-240px)" },
				marginBottom: { xs: "-160px", md: "-200px" },
			}}
		>
			<AllTripsBanner />
			<AllTripsDetails />
		</Container>
	);
};

export default AllTripsPage;
