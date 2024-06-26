import { Box, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import facebookIcon from "@/assets/facebook.png";
import instagramIcon from "@/assets/instagram.png";
import twitterIcon from "@/assets/twitter.png";
import linkedInIcon from "@/assets/linkedin.png";
import Image from "next/image";
import logo from "@/assets/logo.png";
//"rgb(17, 26, 34)"
const Footer = () => {
	return (
		<Box bgcolor="#092502" py={5} mt={5}>
			<Container>
				<Stack
					direction={{ xs: "column", md: "row" }}
					gap={{ xs: 2, md: 10 }}
					justifyContent="center"
					alignItems="center"
				>
					<Typography
						variant="h6"
						component={Link}
						href="/"
						color="white"
						sx={{
							textDecoration: "none",
							fontSize: { xs: 16, md: 20 },
						}}
					>
						Home
					</Typography>
					<Typography
						variant="h6"
						component={Link}
						href="/trips"
						color="white"
						sx={{
							textDecoration: "none",
							fontSize: { xs: 16, md: 20 },
						}}
					>
						Discover Upcoming trips
					</Typography>
					<Typography
						variant="h6"
						component={Link}
						href="/about"
						color="white"
						sx={{
							textDecoration: "none",
							fontSize: { xs: 16, md: 20 },
						}}
					>
						About us
					</Typography>
				</Stack>
				<Stack
					mt={7}
					direction="column"
					justifyContent="center"
					alignItems="center"
					gap={1}
				>
					<Typography color="white" fontSize={{ xs: 16, md: 20 }}>
						Contact Us
					</Typography>
					<Typography color="white" fontSize={{ xs: 14, md: 16 }}>
						123 Travel Buddy Lane, Adventure City, World
					</Typography>
					<Typography color="white" fontSize={{ xs: 14, md: 16 }}>
						Email: contact@travelbuddymatcher.com
					</Typography>
					<Typography color="white" fontSize={{ xs: 14, md: 16 }}>
						Telephone: +1 234 567 890
					</Typography>
				</Stack>
				<Stack py={4} direction="row" justifyContent="center" gap={3}>
					<Image
						src={facebookIcon}
						alt="facebook icon"
						width={40}
						height={40}
					></Image>
					<Image
						src={instagramIcon}
						alt="instagram icon"
						width={40}
						height={40}
					></Image>
					<Image
						src={twitterIcon}
						alt="twitter icon"
						width={40}
						height={40}
					></Image>
					<Image
						src={linkedInIcon}
						alt="linkedin icon"
						width={40}
						height={40}
					></Image>
				</Stack>
				{/* <div className="border-b-[1px] border-dashed"></div> */}
				<Box sx={{ border: "1px dashed lightgray" }}></Box>
				<Stack
					py={4}
					direction={{ xs: "column", md: "row" }}
					justifyContent="space-between"
					spacing={2}
					alignItems="center"
				>
					<Typography
						color="white"
						component="p"
						sx={{ fontSize: { xs: 14, md: 16 } }}
					>
						&copy; 2024 Travel Buddy. All rights reserved
					</Typography>
					<Link href="/">
						<Image src={logo} alt="logo" width={200} height={50} />
					</Link>
					<Typography
						color="white"
						component="p"
						sx={{ fontSize: { xs: 14, md: 16 } }}
					>
						Privacy Policy! Terms & Conditions
					</Typography>
				</Stack>
			</Container>
		</Box>
	);
};

export default Footer;
