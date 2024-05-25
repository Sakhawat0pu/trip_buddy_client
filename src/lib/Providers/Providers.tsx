"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../themes/theme";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

const Providers = ({ children }: { children: ReactNode }) => {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</Provider>
	);
};

export default Providers;
