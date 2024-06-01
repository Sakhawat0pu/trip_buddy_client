import {
	Box,
	Button,
	IconButton,
	InputBase,
	Paper,
	TextField,
	Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";

const HeroSectionPage = () => {
	return (
		<Box
			sx={{
				width: "100%",
				backgroundColor: "#d1c0c0",
				borderRadius: "15px",
				textAlign: "center",
				pb: { xs: 7, md: 10 },
				pt: { xs: 3, md: 10 },
				px: { xs: 1 },
			}}
		>
			<Typography
				variant="h3"
				component="h3"
				color="#3E8E38"
				fontWeight={700}
				fontSize={{ xs: "35px", md: "65px" }}
				letterSpacing={10}
				mb={{ xs: 1, md: 0 }}
			>
				Travel Buddy
			</Typography>
			<Typography
				variant="h4"
				component="h4"
				color="white"
				fontSize={{ xs: "25px", md: "45px" }}
				fontWeight={{ xs: 400, md: 600 }}
				lineHeight={{ md: 2 }}
			>
				Your Ultimate Companion Matching Destination!
			</Typography>
			<Typography
				color="#796f6f"
				fontWeight={500}
				pt={3}
				fontSize={{ xs: 14, md: 18 }}
			>
				Going on a trip? Meet people who love to travel. Share your adventures
				with a travel companion.
			</Typography>
			<Typography
				color="#796f6f"
				fontWeight={500}
				fontSize={{ xs: 14, md: 18 }}
			>
				Start your journey now and find your ultimate travel companion
			</Typography>
			<Button
				sx={{ bgcolor: "darkgreen", marginTop: "30px" }}
				component={Link}
				href="/share-trip"
			>
				Share your trip plan
			</Button>
			<Box width={{ xs: "85%", md: "50%" }} mx="auto" position="relative">
				<Paper
					sx={{
						p: "2px 4px",
						display: "flex",
						alignItems: "center",
						width: "100%",
						position: "absolute",
						top: { xs: "33px", md: "54px" },
						left: "0px",
					}}
				>
					<InputBase
						sx={{ ml: 1, flex: 1 }}
						placeholder="Search Your Travel Destination"
						inputProps={{ "aria-label": "search google maps" }}
					/>
					<IconButton type="button" sx={{ p: "10px" }} aria-label="search">
						<Link href="/trips">
							<SearchIcon />
						</Link>
					</IconButton>
				</Paper>
			</Box>
		</Box>
	);
};

export default HeroSectionPage;
