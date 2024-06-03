import JoinRequestsBanner from "@/components/UI/JoinRequests/JoinRequestsBanner/JoinRequestsBanner";
import JoinRequestsList from "@/components/UI/JoinRequests/JoinRequestsList/JoinRequestsList";
import { Container } from "@mui/material";

const JoinRequestPage = () => {
	return (
		<Container
			sx={{
				transform: { xs: "translateY(-160px)", md: "translateY(-240px)" },
				marginBottom: { xs: "-160px", md: "-200px" },
			}}
		>
			<JoinRequestsBanner />
			<JoinRequestsList />
		</Container>
	);
};

export default JoinRequestPage;
