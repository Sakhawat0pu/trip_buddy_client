import SendRequestBanner from "@/components/UI/SendRequest/SendRequestBanner/SendRequestBanner";
import SendRequestForm from "@/components/UI/SendRequest/SendRequestForm/SendRequestForm";
import { Container } from "@mui/material";

const SendRequestPage = ({
	searchParams,
}: {
	searchParams: Record<string, any>;
}) => {
	const tripId = searchParams?.tripId;

	return (
		<Container
			sx={{
				transform: { xs: "translateY(-160px)", md: "translateY(-240px)" },
				marginBottom: { xs: "-160px", md: "-200px" },
			}}
		>
			<SendRequestBanner />
			<SendRequestForm tripId={tripId} />
		</Container>
	);
};

export default SendRequestPage;
