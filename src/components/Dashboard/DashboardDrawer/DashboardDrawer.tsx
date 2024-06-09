"use client";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import CustomAppBar from "../AppBar/AppBar";
import SideBar from "../Sidebar/Sidebar";
import { useState } from "react";

const drawerWidth = 240;

export default function DashboardDrawer({
	children,
}: {
	children: React.ReactNode;
}) {
	const [mobileOpen, setMobileOpen] = useState(false);
	const [isClosing, setIsClosing] = useState(false);

	const handleDrawerClose = () => {
		setIsClosing(true);
		setMobileOpen(false);
	};

	const handleDrawerTransitionEnd = () => {
		setIsClosing(false);
	};

	const handleDrawerToggle = () => {
		if (!isClosing) {
			setMobileOpen(!mobileOpen);
		}
	};

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<CustomAppBar handleDrawerToggle={handleDrawerToggle} />
			<Box
				component="nav"
				sx={{
					width: { xs: 0, md: drawerWidth },
					flexShrink: { xs: 0 },
				}}
				aria-label="mailbox folders"
			>
				<Drawer
					variant="temporary"
					open={mobileOpen}
					onTransitionEnd={handleDrawerTransitionEnd}
					onClose={handleDrawerClose}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: "block", md: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: { xs: drawerWidth, md: 0 },
						},
					}}
				>
					<SideBar />
				</Drawer>
				<Drawer
					variant="permanent"
					sx={{
						display: { xs: "none", md: "block" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: { xs: 0, md: drawerWidth },
						},
					}}
					open
				>
					<SideBar />
				</Drawer>
			</Box>
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					p: 3,
					width: { md: `calc(100% - ${drawerWidth}px)` },
				}}
			>
				<Toolbar />
				<Box>{children}</Box>
			</Box>
		</Box>
	);
}
