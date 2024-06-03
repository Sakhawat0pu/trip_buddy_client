import ProfileBanner from "@/components/UI/Profile/ProfileBanner/ProfileBanner";
import ProfileDetails from "@/components/UI/Profile/ProfileDetails/ProfileDetails";
import UpdateProfile from "@/components/UI/Profile/UpdateProfile/UpdateProfile";
import { Container } from "@mui/material";

const ProfilePage = () => {
	return (
		<Container
			sx={{
				transform: { xs: "translateY(-160px)", md: "translateY(-240px)" },
				marginBottom: { xs: "-160px", md: "-200px" },
			}}
		>
			<ProfileBanner />
			<ProfileDetails />
			<UpdateProfile />
		</Container>
	);
};

export default ProfilePage;
