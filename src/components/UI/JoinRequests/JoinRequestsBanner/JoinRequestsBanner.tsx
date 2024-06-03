import { Box, Typography } from "@mui/material";

const JoinRequestsBanner = () => {
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
				Review Your Trip Requests
			</Typography>
			<Typography
				variant="h4"
				component="h4"
				color="white"
				fontSize={{ xs: "22px", md: "30px" }}
				fontWeight={{ xs: 400, md: 600 }}
				lineHeight={{ md: 2 }}
			>
				Manage and Respond to Requests for Your Trips
			</Typography>
			<Typography
				color="#796f6f"
				fontWeight={500}
				pt={{ md: 5 }}
				fontSize={{ xs: 14, md: 18 }}
				display={{ xs: "none", md: "block" }}
			>
				Monitor and manage all join requests from travelers interested in your
				posted trips. Ensure a smooth coordination <br /> by reviewing and
				responding to each request promptly. Your organized handling of <br />
				these requests enhances the travel experience for everyone involved.
			</Typography>
			<Typography
				color="#796f6f"
				fontWeight={500}
				pt={{ xs: 2, md: 5 }}
				fontSize={{ xs: 14, md: 18 }}
				display={{ xs: "block", md: "none" }}
			>
				Monitor and manage all join requests from travelers interested in your
				posted trips. Your organized handling of these requests enhances the
				travel experience for everyone involved.
			</Typography>
		</Box>
	);
};

export default JoinRequestsBanner;
