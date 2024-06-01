import { getUserInfo } from "@/services/auth.services";
import { Button, Typography } from "@mui/material";
import Link from "next/link";
import Box from "@mui/material/Box";

import UserMenu from "@/components/Shared/NavBar/UserMenu";

type TAuthButtonProps = {
	handleOpenUserMenu: (e: React.MouseEvent<HTMLElement>) => void;
	anchorElUser: any;
	handleCloseUserMenu: () => void;
};

const AuthButton = () => {
	const userInfo = getUserInfo();

	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
			}}
			gap={1}
		>
			{userInfo?.email ? (
				<Typography
					color="darkgreen"
					sx={{ display: { xs: "none", md: "block" } }}
				>
					{userInfo.email}
				</Typography>
			) : (
				""
			)}
			{userInfo?.email ? (
				<UserMenu />
			) : (
				<Button component={Link} href="/login" sx={{ bgcolor: "darkgreen" }}>
					Login
				</Button>
			)}
		</Box>
	);
};

export default AuthButton;
