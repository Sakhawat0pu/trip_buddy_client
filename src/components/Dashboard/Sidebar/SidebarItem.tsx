import Link from "next/link";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { TDrawerItem } from "@/types";
import { usePathname } from "next/navigation";
import { styled } from "@mui/material";

const CustomLink = styled(Link)(({ theme }) => ({
	textDecoration: "none",
}));
const SidebarItem = ({ item }: { item: TDrawerItem }) => {
	const pathname = usePathname(); // return the path from the url
	let linkPath = "/dashboard";
	if (item.path) {
		linkPath = `/dashboard/${item.path}`;
	}

	return (
		<CustomLink href={linkPath}>
			<ListItem
				disablePadding
				sx={{
					...(pathname === linkPath
						? {
								borderRight: "3px solid #1586FD",
								"& svg": {
									color: "#1586FD",
								},
							}
						: {}),
					mb: 1,
				}}
			>
				<ListItemButton>
					<ListItemIcon>{item.icon && <item.icon />}</ListItemIcon>
					<ListItemText primary={item.title} />
				</ListItemButton>
			</ListItem>
		</CustomLink>
	);
};

export default SidebarItem;
