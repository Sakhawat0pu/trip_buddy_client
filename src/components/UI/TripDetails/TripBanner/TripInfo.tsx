import { Box, Button, Stack, Typography } from "@mui/material";
import Link from "next/link";

const TripInfo = async ({
	tripDetails,
}: {
	tripDetails: Record<string, any>;
}) => {
	return (
		<Box>
			<Typography
				variant="h3"
				component="h3"
				fontSize={{ xs: 30, md: 50 }}
				textAlign="center"
				fontWeight={{ xs: 600 }}
				color="primary.main"
				letterSpacing={{ xs: 2, md: 4 }}
				mb={{ xs: 2, md: 4 }}
			>
				Trip Details
			</Typography>
			<Box mb={{ xs: 2, md: 4 }}>
				<Typography sx={{ fontSize: { xs: 14, md: 20 } }}>
					<strong>Trip Destination</strong>: {tripDetails.destination}
				</Typography>
				<Typography sx={{ fontSize: { xs: 14, md: 20 } }}>
					<strong>Trip Type</strong>: {tripDetails.tripType}
				</Typography>
				<Typography sx={{ fontSize: { xs: 14, md: 20 } }}>
					<strong>Trip Budget (est.)</strong>: ${tripDetails.budget}
				</Typography>
				<Typography sx={{ fontSize: { xs: 14, md: 20 } }}>
					<strong>Trip Start Date</strong>: {tripDetails.startDate}
				</Typography>
				<Typography sx={{ fontSize: { xs: 14, md: 20 } }}>
					<strong>Trip End Date</strong>: {tripDetails.endDate}
				</Typography>
			</Box>
			<Box
				mb={{ xs: 3, md: 5 }}
				sx={{
					"& div": {
						lineHeight: 2,
					},
					"& div p": {
						fontSize: { xs: 14, md: 20 },
					},
					"& div h2": {
						fontSize: { xs: 18, md: 24 },
					},
					"& div h3": {
						fontSize: { xs: 16, md: 22 },
					},
					"& li b": {
						fontSize: { xs: 14, md: 20 },
					},
					"& div li": {
						ml: 4,
					},
				}}
				style={{ color: "#3c405d" }}
				dangerouslySetInnerHTML={{
					__html: tripDetails.description,
				}}
			></Box>
			<Stack direction="row" justifyContent="center">
				<Button
					component={Link}
					href={`/trips/send-request?tripId=${tripDetails.id}`}
					sx={{
						fontSize: { xs: 10, md: 18 },
						px: { xs: 2, md: 3 },
						bgcolor: "darkgreen",
					}}
				>
					Book Trip Now
				</Button>
			</Stack>
		</Box>
	);
};

export default TripInfo;
