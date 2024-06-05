import ChangePasswordBanner from "@/components/UI/ChangePassword/ChangePasswordBanner/ChangePasswordBanner";
import ChangePasswordForm from "@/components/UI/ChangePassword/ChangePasswordForm/ChangePasswordForm";
import { Container } from "@mui/material";

const page = () => {
	return (
		<Container
			sx={{
				transform: { xs: "translateY(-160px)", md: "translateY(-240px)" },
				marginBottom: { xs: "-160px", md: "-200px" },
			}}
		>
			<ChangePasswordBanner />
			<ChangePasswordForm />
		</Container>
	);
};

export default page;
