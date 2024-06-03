import { Box, List, ListItem, Typography } from "@mui/material";

const TermsAndConditionPage = () => {
	return (
		<Box m={5}>
			<Typography
				variant="h3"
				component="h3"
				textAlign="center"
				sx={{ fontSize: { xs: 30, md: 45 } }}
			>
				Terms and Conditions
			</Typography>
			<Box my={5}>
				<Typography
					variant="h5"
					component="h5"
					color="black"
					sx={{ fontSize: { xs: 20, md: 25 } }}
				>
					1. General Terms
				</Typography>
				<Typography lineHeight={{ xs: 1.5, md: 2 }}>
					Welcome to our website. By using our services, you agree to comply
					with and be bound by the following terms and conditions. Please read
					these carefully before using our website.
				</Typography>

				<Typography
					variant="h5"
					component="h5"
					color="black"
					mt={2}
					sx={{ fontSize: { xs: 20, md: 25 } }}
				>
					2. Trip Requests
				</Typography>
				<Typography lineHeight={{ xs: 1.5, md: 2 }}>
					When sending a request to join a trip posted by another user, you
					agree to the following:
				</Typography>
				<List>
					<ListItem>
						A. You are responsible for providing accurate information in your
						request.
					</ListItem>
					<ListItem>
						B. The trip host has the right to accept or reject your request at
						their discretion.
					</ListItem>
					<ListItem>
						C. If your request is accepted, you agree to abide by the trip
						itinerary and any rules set by the host.
					</ListItem>
					<ListItem>
						D. The host is not responsible for any loss or damage to your
						personal belongings during the trip.
					</ListItem>
				</List>
				<Typography
					variant="h5"
					component="h5"
					color="black"
					mt={2}
					sx={{ fontSize: { xs: 20, md: 25 } }}
				>
					3. Code of Conduct
				</Typography>
				<Typography lineHeight={{ xs: 1.5, md: 2 }}>
					During the trip, you agree to:
				</Typography>
				<List>
					<ListItem>
						A. Respect the local laws and customs of the destination.
					</ListItem>
					<ListItem>
						B. Behave responsibly and considerately towards other trip
						participants.
					</ListItem>
					<ListItem>
						C. Avoid any illegal activities, including but not limited to drug
						use and theft.
					</ListItem>
					<ListItem>
						D. Follow safety guidelines provided by the trip host.
					</ListItem>
				</List>

				<Typography
					variant="h5"
					component="h5"
					color="black"
					mt={2}
					sx={{ fontSize: { xs: 20, md: 25 } }}
				>
					4. Liability
				</Typography>
				<Typography lineHeight={{ xs: 1.5, md: 2 }}>
					We do not assume any responsibility or liability for the actions,
					products, services, or content of any third parties related to the
					trip. You participate in the trip at your own risk.
				</Typography>

				<Typography
					variant="h5"
					component="h5"
					color="black"
					mt={2}
					sx={{ fontSize: { xs: 20, md: 25 } }}
				>
					5. Dispute Resolution
				</Typography>
				<Typography lineHeight={{ xs: 1.5, md: 2 }}>
					In case of any disputes arising from the trip, we encourage users to
					resolve them amicably. If a resolution cannot be reached, legal action
					may be pursued in accordance with applicable laws.
				</Typography>

				<Typography
					variant="h5"
					component="h5"
					color="black"
					mt={2}
					sx={{ fontSize: { xs: 20, md: 25 } }}
				>
					6. Changes to Terms
				</Typography>
				<Typography lineHeight={{ xs: 1.5, md: 2 }}>
					We reserve the right to modify these terms and conditions at any time
					without prior notice. Continued use of our services after any such
					changes constitutes your acceptance of the new terms.
				</Typography>

				<Typography lineHeight={{ xs: 1.5, md: 2 }}>
					By using our website and services, you acknowledge that you have read,
					understood, and agree to be bound by these terms and conditions.
				</Typography>
			</Box>
		</Box>
	);
};

export default TermsAndConditionPage;
