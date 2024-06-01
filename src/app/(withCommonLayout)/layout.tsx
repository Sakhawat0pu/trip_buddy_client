import Footer from "@/components/Shared/Footer/Footer";
import NavBar from "@/components/Shared/NavBar/NavBar";
import { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div>
			<NavBar />
			<div>{children}</div>
			<Footer />
		</div>
	);
};

export default CommonLayout;
