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
import { toast } from "sonner";

const userSettings = [
	{ name: "Profile", path: "profile" },
	{ name: "Change Password", path: "profile/change-password" },
	{ name: "Share Trip Plan", path: "share-trip" },
	{ name: "My Trip Posts", path: "my-posts" },
	{ name: "My Trip Request History", path: "my-requested-trips" },
	{ name: "Join Requests", path: "join-requests" },
];

const adminSettings = [
	{ name: "Profile", path: "profile" },
	{ name: "Dashboard", path: "dashboard" },
	{ name: "Change Password", path: "profile/change-password" },
	{ name: "Share Trip Plan", path: "share-trip" },
	{ name: "My Trip Posts", path: "my-posts" },
	{ name: "Join Requests", path: "join-requests" },
];

const UserMenuItems = ({ userRole }: { userRole?: string }) => {
	let menu: Record<string, any>[] = [];

	if (userRole === "admin" || userRole === "super_admin") {
		menu = adminSettings;
	}

	if (userRole === "traveler") {
		menu = userSettings;
	}

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
		toast.success("Successfully logged out.");
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
					{menu.map((setting) => (
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

export default UserMenuItems;
