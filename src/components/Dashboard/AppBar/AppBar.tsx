"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { removeUser } from "@/services/auth.services";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useGetMeQuery } from "@/redux/api/userApi";
import Link from "next/link";
import { styled } from "@mui/material";

const CustomLink = styled(Link)(({ theme }) => ({
	textDecoration: "none",
}));

const drawerWidth = 240;

const CustomAppBar = ({ handleDrawerToggle }: { handleDrawerToggle: any }) => {
	const { data, isLoading } = useGetMeQuery({});
	const router = useRouter();

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
		React.useState<null | HTMLElement>(null);

	const isMenuOpen = Boolean(anchorEl);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};

	const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	const handleLogout = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
		removeUser("/");
		router.refresh();
		toast.success("Successfully logged out.");
	};

	const menuId = "primary-search-account-menu";
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			id={menuId}
			keepMounted
			transformOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			<CustomLink href="/">
				<MenuItem onClick={handleMenuClose}>Home</MenuItem>
			</CustomLink>
			<CustomLink href="/profile">
				<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
			</CustomLink>
			<CustomLink href="/profile/change-password">
				<MenuItem onClick={handleMenuClose}>Change Password</MenuItem>
			</CustomLink>
			<CustomLink href="/share-trip">
				<MenuItem onClick={handleMenuClose}>Share Trip Plan</MenuItem>
			</CustomLink>
			<CustomLink href="/my-posts">
				<MenuItem onClick={handleMenuClose}>My Trip Posts</MenuItem>
			</CustomLink>
			<CustomLink href="/join-requests">
				<MenuItem onClick={handleMenuClose}>Join Requests</MenuItem>
			</CustomLink>

			<MenuItem onClick={handleLogout}>Logout</MenuItem>
		</Menu>
	);

	const mobileMenuId = "primary-search-account-menu-mobile";

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				position="fixed"
				sx={{
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					ml: { sm: `${drawerWidth}px` },
					background: "#F4F7FE",
					boxShadow: 0,
					border: "1px solid lightgray",
				}}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: "none" }, color: "primary.main" }}
					>
						<MenuIcon />
					</IconButton>
					<Box>
						<Typography variant="body2" noWrap component="div" color="gray">
							Hi, {isLoading ? "Loading..." : data?.name}
						</Typography>
						<Typography
							variant="body2"
							noWrap
							component="div"
							color="primary.main"
						>
							Welcome to Travel Buddy
						</Typography>
					</Box>
					<Box sx={{ flexGrow: 1 }} />
					<Box sx={{ display: { xs: "none", md: "flex" } }}>
						<IconButton
							size="large"
							edge="end"
							aria-label="account of current user"
							aria-controls={menuId}
							aria-haspopup="true"
							onClick={handleProfileMenuOpen}
							color="info"
						>
							<AccountCircle />
						</IconButton>
					</Box>
					<Box sx={{ display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="show more"
							aria-controls={mobileMenuId}
							aria-haspopup="true"
							onClick={handleProfileMenuOpen}
							color="info"
						>
							<AccountCircle />
							{/* <MoreIcon /> */}
						</IconButton>
					</Box>
				</Toolbar>
			</AppBar>
			{renderMenu}
		</Box>
	);
};

export default CustomAppBar;
