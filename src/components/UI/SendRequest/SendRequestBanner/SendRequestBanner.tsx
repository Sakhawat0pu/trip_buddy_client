import { Box, Typography } from "@mui/material";
import Image from "next/image";
import bannerImg from "@/assets/city.jpg";

const SendRequestBanner = () => {
	return (
		<Box
			sx={{
				width: "100%",
				borderRadius: "15px",
				textAlign: "center",
			}}
		>
			<Box
				width="100%"
				height={{ xs: 320, md: 500 }}
				position="relative"
				sx={{ pt: { xs: 3, md: 15 }, px: { xs: 1 }, pb: { xs: 7, md: 10 } }}
			>
				<Image
					src={bannerImg}
					alt="background image"
					fill
					quality={100}
					style={{ zIndex: -1, borderRadius: "15px" }}
				/>
				<Typography
					variant="h3"
					component="h3"
					color="white"
					fontWeight={600}
					fontSize={{ xs: "30px", md: "50px" }}
					letterSpacing={4}
					mb={{ xs: 1, md: 0 }}
				>
					Join the Fun – Book Your Trip Here
				</Typography>
				<Typography
					variant="h5"
					component="h5"
					color="blue"
					fontSize={{ xs: "16px", md: "25px" }}
					fontWeight={{ xs: 500, md: 500 }}
					lineHeight={{ md: 3 }}
				>
					Take the first step towards your next great journey. Request to book
					now.
				</Typography>
				<Typography
					color="#bff9ff"
					fontWeight={500}
					pt={5}
					display={{ md: "none" }}
					fontSize={{ xs: 14 }}
				>
					Sign up now to join this incredible adventure and create <br />
					lasting memories. Whether it&apos;s hiking through majestic mountains
					or exploring vibrant cities, your
					<br /> next adventure is just a booking away.
				</Typography>
				<Typography
					color="#bff9ff"
					fontWeight={500}
					pt={5}
					display={{ xs: "none", md: "block" }}
					fontSize={{ xs: 14, md: 18 }}
				>
					Complete the form below to request your booking and join fellow
					travelers on an unforgettable adventure. <br />
					Don’t miss out on this opportunity to explore new destinations and
					make new friends. Your next great journey starts here!
				</Typography>
			</Box>
		</Box>
	);
};

export default SendRequestBanner;
