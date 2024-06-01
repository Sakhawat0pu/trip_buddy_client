import { Box, Stack, Typography } from "@mui/material";
import shareTripBanner from "@/assets/share-trip-banner.jpg";
import Image from "next/image";
const Banner = () => {
	return (
		<Box
			sx={{
				width: "100%",
				height: { xs: "300px", md: "600px" },
				backgroundColor: "#effdfa",
				borderRadius: "15px",
				textAlign: "center",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Stack direction="column" gap={2} justifyContent="center">
				<Typography
					variant="h4"
					component="h4"
					color="#3E8E38"
					fontWeight={600}
					fontSize={{ xs: "30px", md: "45px" }}
					letterSpacing={5}
				>
					Plan & Share Your Next Adventure
				</Typography>
				<Box
					width="1300px"
					height="450px"
					sx={{ display: { xs: "none", md: "block" } }}
				>
					<Image
						src={shareTripBanner}
						// layout="responsive"
						alt="share trip banner"
						style={{
							borderRadius: "10px",
						}}
					/>
				</Box>
				<Box>
					<Typography
						variant="h5"
						component="h5"
						fontWeight={600}
						color="#2D2543"
					>
						Share Your Upcoming Trips and Connect with Like-Minded Travelers
					</Typography>
				</Box>
			</Stack>
		</Box>
	);
};

export default Banner;
