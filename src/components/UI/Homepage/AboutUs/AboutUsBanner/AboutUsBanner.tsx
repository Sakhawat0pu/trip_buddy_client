import { Box, Typography } from "@mui/material";

const AboutUsBanner = () => {
	return (
		<Box
			sx={{
				width: "100%",
				backgroundColor: "#d1c0c0",
				borderRadius: "15px",
				textAlign: "center",
				pb: { xs: 3, md: 12 },
				pt: { xs: 4, md: 12 },
				px: { xs: 2 },
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
				Discover Our Journey
			</Typography>
			<Typography
				variant="h4"
				component="h4"
				color="white"
				fontSize={{ xs: "22px", md: "30px" }}
				fontWeight={{ xs: 400, md: 600 }}
				lineHeight={{ md: 2 }}
			>
				Embark on an Adventure with Us
			</Typography>
			<Typography
				color="#796f6f"
				fontWeight={500}
				pt={{ md: 6 }}
				fontSize={{ xs: 14, md: 18 }}
				display={{ xs: "none", md: "block" }}
			>
				We're more than just a travel platform - we're your gateway to
				unforgettable experiences and lifelong memories. <br /> Founded on a
				passion for exploration and a commitment to connecting travelers
				worldwide, <br /> we strive to make every journey an enriching and
				fulfilling adventure.
			</Typography>
			<Typography
				color="#796f6f"
				fontWeight={500}
				pt={{ xs: 2, md: 5 }}
				fontSize={{ xs: 14, md: 18 }}
				display={{ xs: "block", md: "none" }}
			>
				We're more than just a travel platform - we're your gateway to
				unforgettable experiences and lifelong memories. Founded on a passion
				for exploration and a commitment to connecting travelers worldwide, we
				strive to make every journey an enriching and fulfilling adventure.
			</Typography>
		</Box>
	);
};

export default AboutUsBanner;
