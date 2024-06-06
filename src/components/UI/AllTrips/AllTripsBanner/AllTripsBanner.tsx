"use client";
import { Box, Paper, Typography, InputBase, IconButton } from "@mui/material";
import Image from "next/image";
import bgImg from "@/assets/hot_ballon.jpg";
import { useState } from "react";
import { useAppDispatch, useAppSelector, useDebounced } from "@/redux/hook";
import { assignSearchTerm } from "@/redux/slice/searchTermSlice";

const AllTripsBanner = () => {
	const searchTerm = useAppSelector((state) => state.searchTerm.searchTerm);
	const dispatch = useAppDispatch();
	const [term, setTerm] = useState<string>(searchTerm || "");

	const debouncedValue = useDebounced({ searchTerm: term, delay: 300 });
	if (debouncedValue) {
		dispatch(assignSearchTerm(debouncedValue));
	} else {
		dispatch(assignSearchTerm(""));
	}
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
					src={bgImg}
					alt="background image"
					fill
					quality={100}
					style={{ zIndex: -1, borderRadius: "15px" }}
				/>
				<Typography
					variant="h3"
					component="h3"
					color="primary.main"
					fontWeight={600}
					fontSize={{ xs: "30px", md: "50px" }}
					letterSpacing={4}
					mb={{ xs: 1, md: 0 }}
				>
					Adventure Calls: Join Exciting Upcoming Trips!
				</Typography>
				<Typography
					variant="h5"
					component="h5"
					color="#598565"
					fontSize={{ xs: "18px", md: "30px" }}
					fontWeight={{ xs: 400, md: 500 }}
					lineHeight={{ md: 3 }}
				>
					Join trips organized by fellow travelers and make new friends along
					the way.
				</Typography>
				<Typography
					color="#bff9ff"
					fontWeight={500}
					pt={3}
					display={{ md: "none" }}
					fontSize={{ xs: 14, md: 18 }}
				>
					We bring together a variety of trips organized by passionate <br />
					explorers, offering you the chance to join in, and to <br />
					experience the thrill of discovering new places.
				</Typography>
				<Typography
					color="#bff9ff"
					fontWeight={500}
					pt={3}
					display={{ xs: "none", md: "block" }}
					fontSize={{ xs: 14, md: 18 }}
				>
					Answer the call of adventure with our Discover Upcoming Trips page.
					This is your chance to join exciting journeys to destinations around
					the world, <br /> all planned by other enthusiastic travelers. From
					action-packed outdoor adventures to relaxing retreats and cultural
					excursions, <br /> there&apos;s something for everyone. Browse through
					the upcoming trips, find the one that excites you, <br /> and get
					ready to embark on a journey full of discovery and new friendships.
				</Typography>
			</Box>

			<Box width={{ xs: "85%", md: "50%" }} mx="auto" position="relative">
				<Paper
					sx={{
						p: "2px 4px",
						display: "flex",
						alignItems: "center",
						width: "100%",
						position: "absolute",
						top: { xs: "-18px", md: "-26px" },
						left: "0px",
					}}
				>
					<InputBase
						sx={{ ml: 1, flex: 1, py: { md: 1 }, px: "auto" }}
						placeholder="Search Your Travel Destination"
						defaultValue={searchTerm ? searchTerm : ""}
						onChange={(e) => setTerm(e.target.value)}
					/>
					<IconButton
						type="button"
						sx={{ p: "10px" }}
						aria-label="search"
					></IconButton>
				</Paper>
			</Box>
		</Box>
	);
};

export default AllTripsBanner;
