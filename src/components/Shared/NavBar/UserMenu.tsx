import { getUserInfo } from "@/services/auth.services";
import UserMenuItems from "./UserMenuItems";

const UserMenu = () => {
	const role = getUserInfo().role;
	return <UserMenuItems userRole={role} />;
};

export default UserMenu;
