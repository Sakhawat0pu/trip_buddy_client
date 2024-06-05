import { Box, Container } from "@mui/material";
import banner from "@/assets/banner1.jpg";
import Image from "next/image";
import HeroSectionPage from "@/components/UI/Homepage/HeroSection/HeroSection";
import RecentlyTripsPosted from "@/components/UI/Homepage/RecentTrips/RecentlyTripsPosted";
import FeaturedDestination from "@/components/UI/Homepage/FeaturedDestination/FeaturedDestination";
import TravelTipsAndGuides from "@/components/UI/Homepage/TravelTipsAndGuides/TravelTipsAndGuides";

const HomePage = () => {
	return (
		<Container
			sx={{
				transform: { xs: "translateY(-160px)", md: "translateY(-240px)" },
				marginBottom: { xs: "-200px", md: "-200px" },
			}}
		>
			<HeroSectionPage />
			<RecentlyTripsPosted />
			<FeaturedDestination />
			<TravelTipsAndGuides />
		</Container>
	);
};

export default HomePage;
