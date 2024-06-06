import {
	Box,
	Card,
	CardContent,
	CardHeader,
	Grid,
	Typography,
} from "@mui/material";
import Image from "next/image";
import dubai1 from "@/assets/dubai1.jpg";
import dubai2 from "@/assets/dubai2.jpg";
import dubai3 from "@/assets/dubai3.jpg";
import dubai4 from "@/assets/dubai4.jpg";
import barcelona1 from "@/assets/barcelona1.jpg";
import barcelona2 from "@/assets/barcelona2.jpg";
import barcelona3 from "@/assets/barcelona3.jpg";
import barcelona4 from "@/assets/barcelona4.jpg";
import paris1 from "@/assets/paris1.jpg";
import paris2 from "@/assets/paris2.jpg";
import paris3 from "@/assets/paris3.jpg";
import paris4 from "@/assets/paris4.jpg";

const FeaturedDestination = () => {
	return (
		<Box sx={{ mt: { xs: 5, md: 5 }, mb: { xs: 5, md: 5 } }}>
			<Typography
				variant="h3"
				component="h3"
				color="primary.main"
				fontWeight={600}
				textAlign="center"
				fontSize={{ xs: 24, md: 40 }}
				mb={{ xs: 5, md: 7 }}
				lineHeight={1.5}
			>
				Discover Our Most Popular Destinations
			</Typography>
			<Grid container spacing={4}>
				<Grid item xs={12} md={12}>
					<Card sx={{ maxWidth: "100%", p: 2 }}>
						<Grid container spacing={1}>
							<Grid item xs={6} md={6}>
								<Box
									width="100%"
									height={{ xs: 150, md: 400 }}
									position="relative"
								>
									<Image src={dubai1} alt="dubai1" fill sizes="small" />
								</Box>
							</Grid>
							<Grid item xs={6} md={6}>
								<Box
									width="100%"
									height={{ xs: 150, md: 400 }}
									position="relative"
								>
									<Image src={dubai2} alt="dubai2" fill sizes="small" />
								</Box>
							</Grid>
							<Grid item xs={6} md={6}>
								<Box
									width="100%"
									height={{ xs: 150, md: 400 }}
									position="relative"
								>
									<Image src={dubai3} alt="dubai3" fill sizes="small" />
								</Box>
							</Grid>
							<Grid item xs={6} md={6}>
								<Box
									width="100%"
									height={{ xs: 150, md: 400 }}
									position="relative"
								>
									<Image src={dubai4} alt="dubai4" fill sizes="small" />
								</Box>
							</Grid>
						</Grid>

						<CardContent>
							<Typography
								variant="h4"
								component="h4"
								fontSize={{ xs: 25, md: 40 }}
								fontWeight={600}
								my={3}
							>
								Dubai, UAE
							</Typography>
							<Typography fontWeight={600} fontSize={{ xs: 18, md: 22 }} mb={2}>
								Experience the Extravagance of the Middle East
							</Typography>
							<Typography mb={2}>
								<strong>Burj Khalifa</strong>: Marvel at the world&apos;s
								tallest building and enjoy breathtaking views from the
								observation deck.
							</Typography>
							<Typography mb={2}>
								<strong>Desert Safari</strong>: Embark on an adventure through
								the dunes with camel rides and sand-boarding.
							</Typography>
							<Typography mb={2}>
								<strong>Luxury Shopping</strong>: Explore the lavish malls and
								traditional souks for a unique shopping experience.
							</Typography>
							<Typography mb={2}>
								<strong>Cultural Heritage</strong>: Visit the Dubai Museum and
								the historic Al Fahidi neighborhood to learn about the rich
								Emirati culture.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} md={12}>
					<Card sx={{ maxWidth: "100%", p: 2 }}>
						<Grid container spacing={1}>
							<Grid item xs={6} md={6}>
								<Box
									width="100%"
									height={{ xs: 150, md: 400 }}
									position="relative"
								>
									<Image src={barcelona1} alt="barcelona1" fill sizes="small" />
								</Box>
							</Grid>
							<Grid item xs={6} md={6}>
								<Box
									width="100%"
									height={{ xs: 150, md: 400 }}
									position="relative"
								>
									<Image src={barcelona2} alt="barcelona2" fill sizes="small" />
								</Box>
							</Grid>
							<Grid item xs={6} md={6}>
								<Box
									width="100%"
									height={{ xs: 150, md: 400 }}
									position="relative"
								>
									<Image src={barcelona3} alt="barcelona3" fill sizes="small" />
								</Box>
							</Grid>
							<Grid item xs={6} md={6}>
								<Box
									width="100%"
									height={{ xs: 150, md: 400 }}
									position="relative"
								>
									<Image src={barcelona4} alt="barcelona4" fill sizes="small" />
								</Box>
							</Grid>
						</Grid>

						<CardContent>
							<Typography
								variant="h4"
								component="h4"
								fontSize={{ xs: 25, md: 40 }}
								fontWeight={600}
								my={3}
							>
								Barcelona, Spain
							</Typography>
							<Typography fontWeight={600} fontSize={{ xs: 18, md: 22 }} mb={2}>
								Unveil the Charm of Catalonia
							</Typography>
							<Typography mb={2}>
								<strong>Sagrada Familia</strong>: Admire Gaudí&apos;s
								masterpiece and the intricate architectural details of this
								iconic basilica.
							</Typography>
							<Typography mb={2}>
								<strong>Gothic Quarter</strong>: Wander through narrow medieval
								streets filled with history and charm.
							</Typography>
							<Typography mb={2}>
								<strong>Beaches and Nightlife:</strong>: Relax on the beautiful
								beaches and enjoy vibrant nightlife in La Barceloneta.
							</Typography>
							<Typography mb={2}>
								<strong>Local Cuisine</strong>: Savor delicious tapas and
								traditional Catalan dishes in cozy local restaurants. Emirati
								culture.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} md={12}>
					<Card sx={{ maxWidth: "100%", p: 2 }}>
						<Grid container spacing={1}>
							<Grid item xs={6} md={6}>
								<Box
									width="100%"
									height={{ xs: 150, md: 400 }}
									position="relative"
								>
									<Image src={paris1} alt="paris1" fill sizes="small" />
								</Box>
							</Grid>
							<Grid item xs={6} md={6}>
								<Box
									width="100%"
									height={{ xs: 150, md: 400 }}
									position="relative"
								>
									<Image src={paris2} alt="paris2" fill sizes="small" />
								</Box>
							</Grid>
							<Grid item xs={6} md={6}>
								<Box
									width="100%"
									height={{ xs: 150, md: 400 }}
									position="relative"
								>
									<Image src={paris3} alt="paris3" fill sizes="small" />
								</Box>
							</Grid>
							<Grid item xs={6} md={6}>
								<Box
									width="100%"
									height={{ xs: 150, md: 400 }}
									position="relative"
								>
									<Image src={paris4} alt="paris4" fill sizes="small" />
								</Box>
							</Grid>
						</Grid>

						<CardContent>
							<Typography
								variant="h4"
								component="h4"
								fontSize={{ xs: 25, md: 40 }}
								fontWeight={600}
								my={3}
							>
								Paris, France
							</Typography>
							<Typography fontWeight={600} fontSize={{ xs: 18, md: 22 }} mb={2}>
								Fall in Love with the City of Light
							</Typography>
							<Typography mb={2}>
								<strong> Eiffel Tower</strong>: Ascend the iconic landmark for
								stunning panoramic views of Paris
							</Typography>
							<Typography mb={2}>
								<strong>Louvre Museum</strong>: Explore the world&apos;s largest
								art museum and its vast collection, including the Mona Lisa.
							</Typography>
							<Typography mb={2}>
								<strong>Champs-Élysées:</strong>: Stroll along this famous
								avenue, lined with shops, cafes, and theaters.
							</Typography>
							<Typography mb={2}>
								<strong>Romantic Atmosphere</strong>: Enjoy a Seine River
								cruise, visit charming neighborhoods like Montmartre, and dine
								at elegant Parisian cafes. culture.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Box>
	);
};

export default FeaturedDestination;
