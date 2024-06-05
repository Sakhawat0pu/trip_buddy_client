import AboutUsBanner from "@/components/UI/Homepage/AboutUs/AboutUsBanner/AboutUsBanner";
import AboutUsDetail from "@/components/UI/Homepage/AboutUs/AboutUsDetail/AboutUsDetail";
import { Container } from "@mui/material";

const AboutUsPage = () => {
	return (
		<Container
			sx={{
				transform: { xs: "translateY(-160px)", md: "translateY(-240px)" },
				marginBottom: { xs: "-160px", md: "-200px" },
			}}
		>
			<AboutUsBanner />
			<AboutUsDetail />
		</Container>
	);
};

export default AboutUsPage;
