import Banner from "@/components/UI/ShareTrip/Banner/Banner";
import TripDetails from "@/components/UI/ShareTrip/TripDetails/TripDetails";
import { Container } from "@mui/material";

const ShareTripPage = () => {
	return (
		<Container
			sx={{
				transform: { xs: "translateY(-160px)", md: "translateY(-240px)" },
				marginBottom: { xs: "-160px", md: "-200px" },
			}}
		>
			<Banner />
			<TripDetails />
		</Container>
	);
};

export default ShareTripPage;
