import { Box, Stack, Typography } from "@mui/material";
import List from "@mui/material/List";
import Image from "next/image";
import logo from "@/assets/logo1.png";
import Link from "next/link";
import SidebarItem from "./SidebarItem";
import GroupIcon from "@mui/icons-material/Group";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import DashboardIcon from "@mui/icons-material/Dashboard";

const sideBarItems = [
	{
		title: "Dashboard",
		path: "",
		icon: DashboardIcon,
	},
	{
		title: "Manage Users",
		path: "manage-user",
		icon: GroupIcon,
	},
	{
		title: "Manage trips",
		path: `manage-trips`,
		icon: FlightTakeoffIcon,
	},
	{
		title: "Create Admin",
		path: `create-admin`,
		icon: AdminPanelSettingsIcon,
	},
];
const SideBar = () => {
	return (
		<Box>
			<Box
				sx={{
					py: 1,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					bgcolor: "#d3d3d3",
				}}
				component={Link}
				href="/"
			>
				<Image src={logo} alt="logo" width={200} height={50} />
			</Box>
			<List>
				{sideBarItems.map((item, index) => (
					<SidebarItem key={index} item={item} />
				))}
			</List>
		</Box>
	);
};

export default SideBar;
