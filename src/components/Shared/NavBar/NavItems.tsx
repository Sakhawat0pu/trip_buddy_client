"use client";

import Link from "next/link";
import * as React from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

const pages = [
	{ name: "Home", path: "" },
	{ name: "Discover upcoming trips", path: "trips" },
	{ name: "About us", path: "about" },
	// { name: "Contact us", path: "contact" },
];

const NavItems = () => {
	return (
		<Box
			sx={{
				flexGrow: 1,
				display: { xs: "none", md: "flex" },
				justifyContent: { md: "center" },
				"& a:hover": {
					boxShadow: "0 0 0 5px darkgray",
					bgcolor: "darkgray",
					borderRadius: "1px",
				},
			}}
		>
			{pages.map((page) => (
				<Typography
					key={page.name}
					component={Link}
					href={`/${page.path}`}
					sx={{
						my: 2,
						mx: 4,
						color: "darkgreen",
						fontWeight: 500,
						display: "block",
						textDecoration: "none",
					}}
				>
					{page.name}
				</Typography>
			))}
		</Box>
	);
};

export default NavItems;
