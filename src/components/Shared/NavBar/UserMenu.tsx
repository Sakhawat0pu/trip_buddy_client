"use client";

import Link from "next/link";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";

import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { removeUser } from "@/services/auth.services";
import { useRouter } from "next/navigation";

const settings = [
	{ name: "Profile", path: "profile" },
	{ name: "Share Trip Plan", path: "share-trip" },
	{ name: "My Trip Posts", path: "my-posts" },
	{ name: "My Requested Trips", path: "my-requested-trips" },
];
const UserMenu = () => {
	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const router = useRouter();

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const handleLogout = () => {
		handleCloseUserMenu();
		removeUser("/");
		router.refresh();
	};

	return (
		<Box sx={{ flexGrow: 0 }}>
			<Tooltip title="Open settings">
				<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
					<Avatar alt="profile-photo" src="" />
				</IconButton>
			</Tooltip>
			{anchorElUser && (
				<Menu
					sx={{ mt: "45px" }}
					id="menu-appbar"
					anchorEl={anchorElUser}
					anchorOrigin={{
						vertical: "top",
						horizontal: "right",
					}}
					keepMounted
					transformOrigin={{
						vertical: "top",
						horizontal: "right",
					}}
					open={Boolean(anchorElUser)}
					onClose={handleCloseUserMenu}
				>
					{settings.map((setting) => (
						<MenuItem key={setting.name} onClick={handleCloseUserMenu}>
							<Typography
								component={Link}
								href={`/${setting.path}`}
								textAlign="center"
								sx={{
									textDecoration: "none",
								}}
							>
								{setting.name}
							</Typography>
						</MenuItem>
					))}
					<MenuItem key="logout" onClick={handleLogout}>
						<Typography
							component={Link}
							href="/"
							textAlign="center"
							sx={{
								textDecoration: "none",
							}}
						>
							Logout
						</Typography>
					</MenuItem>
				</Menu>
			)}
		</Box>
	);
};

export default UserMenu;
