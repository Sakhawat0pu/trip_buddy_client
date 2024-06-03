import MyPostDetails from "@/components/UI/MyPosts/MyPostDetails/MyPostDetails";
import MyPostsBanner from "@/components/UI/MyPosts/MyPostsBanner/MyPostsBanner";
import { Container } from "@mui/material";

const MyPostsPage = () => {
	return (
		<Container
			sx={{
				transform: { xs: "translateY(-160px)", md: "translateY(-240px)" },
				marginBottom: { xs: "-160px", md: "-200px" },
			}}
		>
			<MyPostsBanner />
			<MyPostDetails />
		</Container>
	);
};

export default MyPostsPage;
