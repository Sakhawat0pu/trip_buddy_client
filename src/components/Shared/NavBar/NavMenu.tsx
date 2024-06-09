"use client";

import Link from "next/link";
import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";

import MenuItem from "@mui/material/MenuItem";

const pages = [
	{ name: "Home", path: "" },
	{ name: "Discover upcoming trips", path: "trips" },
	{ name: "About us", path: "about" },
	// { name: "Contact us", path: "contact" },
];

const NavMenu = () => {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
		null
	);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
			<IconButton
				size="large"
				aria-label="account of current user"
				aria-controls="menu-appbar"
				aria-haspopup="true"
				onClick={handleOpenNavMenu}
				color="inherit"
			>
				<MenuIcon />
			</IconButton>
			<Menu
				id="menu-appbar"
				anchorEl={anchorElNav}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "left",
				}}
				keepMounted
				transformOrigin={{
					vertical: "top",
					horizontal: "left",
				}}
				open={Boolean(anchorElNav)}
				onClose={handleCloseNavMenu}
				sx={{
					display: { xs: "block", md: "none" },
				}}
			>
				{pages.map((page) => (
					<MenuItem key={page.name} onClick={handleCloseNavMenu}>
						<Typography
							component={Link}
							href={`/${page.path}`}
							textAlign="center"
							sx={{
								textDecoration: "none",
							}}
						>
							{page.name}
						</Typography>
					</MenuItem>
				))}
			</Menu>
		</Box>
	);
};

export default NavMenu;
