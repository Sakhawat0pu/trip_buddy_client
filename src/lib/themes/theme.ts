import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
	palette: {
		primary: {
			main: "#3E8E38",
		},
		secondary: {
			main: "#666F73",
		},
	},
	components: {
		MuiButton: {
			defaultProps: {
				variant: "contained",
			},
			styleOverrides: {
				root: {
					padding: "12px 28px",
				},
			},
		},
		MuiLink: {
			defaultProps: {
				underline: "none",
			},
		},
		MuiContainer: {
			defaultProps: {
				maxWidth: "xl",
			},
		},
	},
	typography: {
		body1: {
			color: "#0B1134CC",
		},
	},
});

theme.shadows[1] = "0px 5px 22px lightgray";
