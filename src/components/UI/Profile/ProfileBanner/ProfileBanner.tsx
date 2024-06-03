import { Box, Typography } from "@mui/material";

const ProfileBanner = () => {
	return (
		<Box
			sx={{
				width: "100%",
				backgroundColor: "#d1c0c0",
				borderRadius: "15px",
				textAlign: "center",
				pb: { xs: 3, md: 12 },
				pt: { xs: 5, md: 12 },
				px: { xs: 1 },
			}}
		>
			<Typography
				variant="h3"
				component="h3"
				color="#3E8E38"
				fontWeight={700}
				fontSize={{ xs: "35px", md: "60px" }}
				letterSpacing={{ xs: 2, md: 5 }}
				mb={{ xs: 1, md: 0 }}
			>
				Profile Overview
			</Typography>
			<Typography
				variant="h4"
				component="h4"
				color="white"
				fontSize={{ xs: "22px", md: "40px" }}
				fontWeight={{ xs: 400, md: 600 }}
				lineHeight={{ xs: 1.5, md: 2 }}
			>
				View and Update Your Information
			</Typography>
			<Typography
				color="#796f6f"
				fontWeight={500}
				pt={{ md: 5 }}
				fontSize={{ xs: 14, md: 18 }}
				display={{ xs: "none", md: "block" }}
			>
				Welcome to your profile page. Here, you can view, manage, and update
				your personal information. <br /> Keep your details current to enhance
				your travel experience and ensure you never miss out on important
				updates.
			</Typography>
			<Typography
				color="#796f6f"
				fontWeight={500}
				pt={{ xs: 4, md: 5 }}
				pb={{ xs: 2 }}
				fontSize={{ xs: 14, md: 18 }}
				display={{ xs: "block", md: "none" }}
			>
				Welcome to your profile page. Here, you can view, manage, and update
				your personal information. Keep your details current to enhance your
				travel experience and ensure you never miss out on important updates.
			</Typography>
		</Box>
	);
};

export default ProfileBanner;
