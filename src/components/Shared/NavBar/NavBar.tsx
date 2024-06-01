import Link from "next/link";
import logo from "@/assets/logo1.png";
import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import dynamic from "next/dynamic";
import NavMenu from "./NavMenu";
import NavItems from "./NavItems";

async function NavBar() {
	const AuthButton = dynamic(
		() => import("@/components/UI/AuthButton/AuthButton"),
		{
			ssr: false,
		}
	);

	return (
		<AppBar
			position="static"
			sx={{ bgcolor: "#d3d3d3", py: 2, height: { xs: "250px", md: "350px" } }}
		>
			<Container>
				<Toolbar disableGutters>
					<Typography
						variant="h6"
						noWrap
						component={Link}
						href="/"
						sx={{
							mr: 2,
							display: { xs: "none", md: "flex" },
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							textDecoration: "none",
						}}
					>
						<Image src={logo} alt="logo" width={200} height={50} />
					</Typography>
					<NavMenu />
					<Typography
						variant="h5"
						noWrap
						component={Link}
						href="/"
						sx={{
							mr: 2,
							display: { xs: "flex", md: "none" },
							flexGrow: 1,
						}}
					>
						<Image src={logo} alt="logo" width={200} height={50} />
					</Typography>
					<NavItems />
					<AuthButton></AuthButton>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default NavBar;
