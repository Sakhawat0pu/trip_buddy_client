import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

type TTripBannerProps = {
	tripId: string;
	bannerImages?: string[];
	user?: Record<string, any>;
};

const TripBanner = ({ bannerImages, user, tripId }: TTripBannerProps) => {
	return (
		<Box width="100%" mb={{ xs: 3, md: 6 }}>
			<Box
				sx={{
					width: "100%",
					height: { xs: "300px", md: "420px" },
					position: "relative",
				}}
			>
				{bannerImages && bannerImages.length && (
					<Image
						src={bannerImages[0]}
						style={{
							borderRadius: "18px",
						}}
						alt="An image of a trip destination place"
						fill
					/>
				)}
			</Box>
			<Box
				my={{ xs: 2, md: 4 }}
				display="flex"
				// flexDirection={{ xs: "column", md: "row" }}
				justifyContent="space-between"
				alignItems="center"
				flexWrap="wrap"
			>
				{bannerImages?.slice(1).map((img: string, index) => (
					<Box
						key={index}
						position="relative"
						width={{ xs: 120, md: 480 }}
						height={{ xs: 120, md: 420 }}
						mb={{ xs: 2, md: 4 }}
					>
						<Image
							src={img}
							alt="banner images"
							fill
							style={{ borderRadius: "15px" }}
							sizes="small"
						/>
					</Box>
				))}
			</Box>
			<Box
				width="100%"
				height={{ xs: 100, md: 180 }}
				bgcolor="#d3d3d3"
				borderRadius={4}
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				px={{ xs: 2, md: 4 }}
			>
				<Box>
					<Typography
						variant="h6"
						component="h6"
						fontWeight={600}
						fontSize={{ xs: 17, md: 27 }}
					>
						Host Info
					</Typography>
					<Typography fontSize={{ xs: 12, md: 18 }}>
						<strong>Name</strong>: {user?.name}
					</Typography>
					<Typography fontSize={{ xs: 12, md: 18 }}>
						<strong>Email</strong>: {user?.email}
					</Typography>
				</Box>
				<Box>
					<Button
						component={Link}
						href={`/trips/send-request?tripId=${tripId}`}
						sx={{
							fontSize: { xs: 10, md: 18 },
							px: { xs: 2, md: 3 },
							bgcolor: "darkgreen",
						}}
					>
						Book Trip Now
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default TripBanner;
