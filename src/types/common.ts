import { USER_ROLE, USER_STATUS } from "@/constants/role";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type TMeta = {
	page: number;
	limit: number;
	totalDocuments: number;
	totalPages: number;
};

export type TUserRole = keyof typeof USER_ROLE;

export type TUserStatus = keyof typeof USER_STATUS;

export type TDrawerItem = {
	title: string;
	path: string;
	parentPath?: string;
	icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
	child?: TDrawerItem[];
};

export type TSuccessResponse = {
	data: any;
	meta?: TMeta;
};

export type TErrorResponse = {
	statusCode: number;
	message: string;
	errorMessages: string;
};

export type TErrorMessage = {
	path: string | number;
	message: string;
};
