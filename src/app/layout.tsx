import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import "./globals.css";
import Providers from "@/lib/Providers/Providers";
import { Toaster } from "sonner";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Travel Buddy",
	description: "A travel companion matcher org",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Providers>
			<html lang="en">
				<body style={{ margin: 0 }}>
					<AppRouterCacheProvider>
						<>
							<Toaster richColors position="top-center" />
							{children}
						</>
					</AppRouterCacheProvider>
				</body>
			</html>
		</Providers>
	);
}
