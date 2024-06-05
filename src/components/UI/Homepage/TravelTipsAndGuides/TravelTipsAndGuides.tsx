import { Box, Grid, List, ListItem, Typography } from "@mui/material";

const TravelTipsAndGuides = () => {
	return (
		<Box sx={{ mt: { xs: 7, md: 9 }, mb: { xs: 12, md: 5 } }}>
			<Typography
				variant="h3"
				component="h3"
				color="primary.main"
				fontWeight={600}
				textAlign="center"
				fontSize={{ xs: 24, md: 40 }}
				// mb={{ xs: 5, md: 7 }}
				lineHeight={1.5}
			>
				Travel Tips & Guides
			</Typography>
			<Typography
				variant="h3"
				component="h3"
				color="gray"
				// fontWeight={600}
				textAlign="center"
				fontSize={{ xs: 14, md: 25 }}
				mb={{ xs: 5, md: 7 }}
				lineHeight={1.5}
			>
				Essential advice to make your travel experiences smooth and enjoyable
			</Typography>
			<Grid container spacing={2}>
				<Grid item xs={6} md={3}>
					<Box
						p={2}
						boxShadow={2}
						borderRadius={2}
						height={{ xs: 260, md: 350 }}
					>
						<Typography
							variant="h6"
							component="h6"
							color="primary.main"
							textAlign="center"
							fontWeight={{ xs: 500, md: 600 }}
							sx={{ fontSize: { xs: 16, md: 20 } }}
							py={{ md: 2 }}
						>
							Packing Tips
						</Typography>
						<List>
							<ListItem>
								<Typography fontSize={{ xs: 8, md: 14 }}>
									Choose versatile clothing items and pack layers.
								</Typography>
							</ListItem>
							<ListItem>
								<Typography fontSize={{ xs: 8, md: 14 }}>
									Travel-sized toiletries and prescription medications.
								</Typography>
							</ListItem>
							<ListItem>
								<Typography fontSize={{ xs: 8, md: 14 }}>
									Phone, charger, power bank, and international adapters.
								</Typography>
							</ListItem>
							<ListItem>
								<Typography fontSize={{ xs: 8, md: 14 }}>
									Passport, visas, travel insurance, and copies of important
									documents.
								</Typography>
							</ListItem>
						</List>
					</Box>
				</Grid>
				<Grid item xs={6} md={3}>
					<Box
						p={2}
						boxShadow={2}
						borderRadius={2}
						height={{ xs: 260, md: 350 }}
					>
						<Typography
							variant="h6"
							component="h6"
							color="primary.main"
							textAlign="center"
							fontWeight={{ xs: 500, md: 600 }}
							sx={{ fontSize: { xs: 16, md: 20 } }}
							py={{ md: 2 }}
						>
							Travel Hacks
						</Typography>
						<List>
							<ListItem>
								<Typography fontSize={{ xs: 8, md: 14 }}>
									Use packing cubes or compression bags to maximize luggage
									space.
								</Typography>
							</ListItem>
							<ListItem>
								<Typography fontSize={{ xs: 8, md: 14 }}>
									Bring a reusable water bottle to save money and reduce plastic
									waste.
								</Typography>
							</ListItem>
							<ListItem>
								<Typography fontSize={{ xs: 8, md: 14 }}>
									Download offline maps or use GPS apps to navigate without
									data.
								</Typography>
							</ListItem>
							<ListItem>
								<Typography fontSize={{ xs: 8, md: 14 }}>
									Take photos of important documents like passports and tickets
									as backups.
								</Typography>
							</ListItem>
						</List>
					</Box>
				</Grid>
				<Grid item xs={6} md={3}>
					<Box
						p={2}
						boxShadow={2}
						borderRadius={2}
						height={{ xs: 260, md: 350 }}
					>
						<Typography
							variant="h6"
							component="h6"
							color="primary.main"
							textAlign="center"
							fontWeight={{ xs: 500, md: 600 }}
							sx={{ fontSize: { xs: 16, md: 20 } }}
							py={{ md: 2 }}
						>
							Budget Travel
						</Typography>
						<List>
							<ListItem>
								<Typography fontSize={{ xs: 8, md: 14 }}>
									Share your itinerary with family or friends and check in
									regularly.
								</Typography>
							</ListItem>
							<ListItem>
								<Typography fontSize={{ xs: 8, md: 14 }}>
									Dress like the locals and keep a low profile.
								</Typography>
							</ListItem>
							<ListItem>
								<Typography fontSize={{ xs: 8, md: 14 }}>
									Trust your instincts and avoid isolated areas, especially at
									night
								</Typography>
							</ListItem>
							<ListItem>
								<Typography fontSize={{ xs: 8, md: 14 }}>
									Use a money belt and lock your bags.
								</Typography>
							</ListItem>
						</List>
					</Box>
				</Grid>
				<Grid item xs={6} md={3}>
					<Box
						p={2}
						boxShadow={2}
						borderRadius={2}
						height={{ xs: 260, md: 350 }}
					>
						<Typography
							variant="h6"
							component="h6"
							color="primary.main"
							textAlign="center"
							fontWeight={{ xs: 500, md: 600 }}
							sx={{ fontSize: { xs: 16, md: 20 } }}
							py={{ md: 2 }}
						>
							Travel Safety
						</Typography>
						<List>
							<ListItem>
								<Typography fontSize={{ xs: 8, md: 14 }}>
									Stay aware of your surroundings and trust your instincts.
								</Typography>
							</ListItem>
							<ListItem>
								<Typography fontSize={{ xs: 8, md: 14 }}>
									Keep your belongings secure and avoid displaying expensive
									items.
								</Typography>
							</ListItem>
							<ListItem>
								<Typography fontSize={{ xs: 8, md: 14 }}>
									Use reputable transportation services and be cautious in
									crowded areas.
								</Typography>
							</ListItem>
							<ListItem>
								<Typography fontSize={{ xs: 8, md: 14 }}>
									Keep emergency contact information handy and know the local
									emergency numbers.
								</Typography>
							</ListItem>
						</List>
					</Box>
				</Grid>
				<Grid item xs={6} md={3}>
					<Box
						p={2}
						boxShadow={2}
						borderRadius={2}
						height={{ xs: 260, md: 350 }}
					>
						<Typography
							variant="h6"
							component="h6"
							color="primary.main"
							textAlign="center"
							fontWeight={{ xs: 500, md: 600 }}
							sx={{ fontSize: { xs: 16, md: 20 } }}
							py={{ md: 2 }}
						>
							Transportation Tips
						</Typography>
						<List>
							<ListItem>
								<Typography fontSize={{ xs: 8, md: 14 }}>
									Book transportation in advance for better deals and
									availability
								</Typography>
							</ListItem>
							<ListItem>
								<Typography fontSize={{ xs: 8, md: 14 }}>
									Familiarize yourself with local transport options and
									schedules.
								</Typography>
							</ListItem>
							<ListItem>
								<Typography fontSize={{ xs: 8, md: 14 }}>
									Use navigation apps to navigate airports and public transit
									systems.
								</Typography>
							</ListItem>
						</List>
					</Box>
				</Grid>
				<Grid item xs={6} md={3}>
					<Box
						p={2}
						boxShadow={2}
						borderRadius={2}
						height={{ xs: 260, md: 350 }}
					>
						<Typography
							variant="h6"
							component="h6"
							color="primary.main"
							textAlign="center"
							fontWeight={{ xs: 500, md: 600 }}
							sx={{ fontSize: { xs: 16, md: 20 } }}
							py={{ md: 2 }}
						>
							Destination Guides
						</Typography>
						<List>
							<ListItem>
								<Typography fontSize={{ xs: 8, md: 14 }}>
									Research your destination's landmarks, attractions, and local
									customs.
								</Typography>
							</ListItem>
							<ListItem>
								<Typography fontSize={{ xs: 8, md: 14 }}>
									Plan your itinerary in advance to make the most of your time.
								</Typography>
							</ListItem>
							<ListItem>
								<Typography fontSize={{ xs: 8, md: 14 }}>
									Learn basic phrases in the local language to communicate with
									locals.
								</Typography>
							</ListItem>
							<ListItem>
								<Typography fontSize={{ xs: 8, md: 14 }}>
									Check for any travel advisories or safety tips specific to
									your destination.
								</Typography>
							</ListItem>
						</List>
					</Box>
				</Grid>
				<Grid item xs={6} md={3}>
					<Box
						p={2}
						boxShadow={2}
						borderRadius={2}
						height={{ xs: 260, md: 350 }}
					>
						<Typography
							variant="h6"
							component="h6"
							color="primary.main"
							textAlign="center"
							fontWeight={{ xs: 500, md: 600 }}
							sx={{ fontSize: { xs: 16, md: 20 } }}
							py={{ md: 2 }}
						>
							Accommodation Tips
						</Typography>
						<List>
							<ListItem>
								<Typography fontSize={{ xs: 8, md: 14 }}>
									Research accommodation options based on budget, location, and
									amenities.
								</Typography>
							</ListItem>
							<ListItem>
								<Typography fontSize={{ xs: 8, md: 14 }}>
									Read guest reviews to ensure a comfortable and safe stay.
								</Typography>
							</ListItem>
							<ListItem>
								<Typography fontSize={{ xs: 8, md: 14 }}>
									Consider alternative accommodations like hostels or home-stays
									for unique experiences.
								</Typography>
							</ListItem>
						</List>
					</Box>
				</Grid>
				<Grid item xs={6} md={3}>
					<Box
						p={2}
						boxShadow={2}
						borderRadius={2}
						height={{ xs: 260, md: 350 }}
					>
						<Typography
							variant="h6"
							component="h6"
							color="primary.main"
							textAlign="center"
							fontWeight={{ xs: 500, md: 600 }}
							sx={{ fontSize: { xs: 16, md: 20 } }}
							py={{ md: 2 }}
						>
							Food and Dining Tips
						</Typography>
						<List>
							<ListItem>
								<Typography fontSize={{ xs: 8, md: 14 }}>
									Explore local markets and street food vendors for authentic
									culinary experiences.
								</Typography>
							</ListItem>
							<ListItem>
								<Typography fontSize={{ xs: 8, md: 14 }}>
									Learn about local dining etiquette and customs to avoid
									cultural faux pas.
								</Typography>
							</ListItem>
							<ListItem>
								<Typography fontSize={{ xs: 8, md: 14 }}>
									Be mindful of food allergies and dietary restrictions.
								</Typography>
							</ListItem>
							<ListItem>
								<Typography fontSize={{ xs: 8, md: 14 }}>
									Stay hydrated and wash fruits and vegetables before consuming.
								</Typography>
							</ListItem>
						</List>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default TravelTipsAndGuides;
