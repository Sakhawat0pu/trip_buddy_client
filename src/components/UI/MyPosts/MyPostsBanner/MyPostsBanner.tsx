import { Box, Typography } from "@mui/material";

const MyPostsBanner = () => {
	return (
		<Box
			sx={{
				width: "100%",
				backgroundColor: "#d1c0c0",
				borderRadius: "15px",
				textAlign: "center",
				pb: { xs: 3, md: 12 },
				pt: { xs: 4, md: 12 },
				px: { xs: 1 },
			}}
		>
			<Typography
				variant="h3"
				component="h3"
				color="#3E8E38"
				fontWeight={700}
				fontSize={{ xs: "35px", md: "50px" }}
				letterSpacing={{ xs: 2, md: 5 }}
				mb={{ xs: 1, md: 0 }}
			>
				Embark on Your Shared Adventures
			</Typography>
			<Typography
				variant="h4"
				component="h4"
				color="white"
				fontSize={{ xs: "22px", md: "40px" }}
				fontWeight={{ xs: 400, md: 600 }}
				lineHeight={{ md: 2.5 }}
			>
				Your Curated Travel Experiences
			</Typography>
			<Typography
				color="#796f6f"
				fontWeight={500}
				pt={4}
				fontSize={{ xs: 14, md: 18 }}
			>
				Welcome to your hub of adventures! Here, you can see all the exciting
				journeys you&apos;ve curated for our community. <br />
				Monitor booking requests, update trip details, and engage with fellow
				travelers. Your journey of exploration and connection starts here!
			</Typography>
		</Box>
	);
};

export default MyPostsBanner;
