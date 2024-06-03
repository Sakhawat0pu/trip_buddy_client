import { Box, Typography } from "@mui/material";

const MyRequestedTripsBanner = () => {
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
				letterSpacing={{ xs: 2, md: 10 }}
				mb={{ xs: 1, md: 0 }}
			>
				Your Adventure Requests
			</Typography>
			<Typography
				variant="h4"
				component="h4"
				color="white"
				fontSize={{ xs: "22px", md: "40px" }}
				fontWeight={{ xs: 400, md: 600 }}
				lineHeight={{ md: 2 }}
			>
				Track Your Journey Applications
			</Typography>
			<Typography
				color="#796f6f"
				fontWeight={500}
				pt={4}
				fontSize={{ xs: 14, md: 18 }}
			>
				Keep tabs on all the trips you've requested to join and stay updated on
				their status. <br />
				Review your pending, accepted, and declined requests all in one place.
				<br />
				Your next adventure is just a confirmation away!
			</Typography>
		</Box>
	);
};

export default MyRequestedTripsBanner;
