"use client";
import {
	useGetAllUsersQuery,
	useUpdateUserRoleMutation,
	useUpdateUserStatusMutation,
} from "@/redux/api/userApi";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import CustomModal from "./components/CustomModal";
import BlockIcon from "@mui/icons-material/Block";

const ManageUserPage = () => {
	const { data, isLoading } = useGetAllUsersQuery({});
	const [openForBlock, setOpenForBlock] = useState(false);
	const [openForUnblock, setOpenForUnblock] = useState(false);
	const [userId, setUserId] = useState("");
	const [changeStatus] = useUpdateUserStatusMutation();
	const [changeRole] = useUpdateUserRoleMutation();
	const users = data?.filter(
		(user: Record<string, any>) => user.role !== "SUPER_ADMIN"
	);

	// console.log(users);

	const columns: GridColDef[] = [
		{ field: "name", headerName: "Name", flex: 1 },
		{ field: "email", headerName: "Email", flex: 1 },
		{ field: "role", headerName: "Role", flex: 1 },
		{ field: "status", headerName: "Status", flex: 1 },
		{
			field: "Change Status",
			headerName: "Change Status",
			flex: 1,
			headerAlign: "center",
			align: "center",
			renderCell: ({ row }) => {
				return (
					<Box>
						{row.status === "ACTIVE" ? (
							<Box>
								<Button
									sx={{
										fontSize: 12,
										px: 2,
										py: "5px",
										bgcolor: "red",
										fontWeight: 600,
									}}
									onClick={() => {
										setUserId(row.id);
										setOpenForBlock(true);
									}}
								>
									Block
								</Button>
								<CustomModal
									open={openForBlock}
									setOpen={setOpenForBlock}
									title="Block User"
									message="Are you sure you want to block this user?"
									buttonLabel="Block"
									buttonColor="red"
									data={{ id: userId, status: "BLOCKED" }}
									changeStatus={changeStatus}
									toastMessage="User has been blocked successfully"
								/>
							</Box>
						) : row.status === "BLOCKED" ? (
							<Box>
								<Button
									sx={{
										fontSize: 12,
										px: 1,
										py: "5px",
										bgcolor: "green",
										fontWeight: 600,
									}}
									onClick={() => {
										setUserId(row.id);
										setOpenForUnblock(true);
									}}
								>
									Unblock
								</Button>
								<CustomModal
									open={openForUnblock}
									setOpen={setOpenForUnblock}
									title="Unblock User"
									message="Are you sure you want to unblock this user?"
									buttonLabel="Unblock"
									buttonColor="green"
									data={{ id: userId, status: "ACTIVE" }}
									changeStatus={changeStatus}
									toastMessage="User has been unblocked successfully"
								/>
							</Box>
						) : (
							<Box>
								<Button
									sx={{
										fontSize: 12,
										px: 3.5,
										py: "5px",
										bgcolor: "green",
										fontWeight: 600,
									}}
									disabled
								>
									<BlockIcon />
								</Button>
							</Box>
						)}
					</Box>
				);
			},
		},
		{
			field: "Change Role",
			headerName: "Change Role",
			flex: 1,
			headerAlign: "center",
			align: "center",
			renderCell: ({ row }) => {
				return (
					<Box>
						{row.role === "TRAVELER" ? (
							<Box>
								<Button
									sx={{
										fontSize: 12,
										px: 2,
										py: "5px",
										bgcolor: "green",
										fontWeight: 600,
									}}
									onClick={() => {
										setUserId(row.id);
										setOpenForBlock(true);
									}}
								>
									Promote To Admin
								</Button>
								<CustomModal
									open={openForBlock}
									setOpen={setOpenForBlock}
									title="Change User Role"
									message="Are you sure you want to promote the user to an Admin?"
									buttonLabel="Promote"
									buttonColor="green"
									data={{ id: userId, role: "ADMIN" }}
									changeStatus={changeRole}
									toastMessage="User has been promoted to an admin successfully!"
								/>
							</Box>
						) : (
							<Box>
								<Button
									sx={{
										fontSize: 12,
										px: 1,
										py: "5px",
										bgcolor: "red",
										fontWeight: 600,
									}}
									onClick={() => {
										setUserId(row.id);
										setOpenForUnblock(true);
									}}
								>
									Demote to Reg. user
								</Button>
								<CustomModal
									open={openForUnblock}
									setOpen={setOpenForUnblock}
									title="Change User Role"
									message="Are you sure you want to demote the user from Admin to regular user?"
									buttonLabel="Demote"
									buttonColor="red"
									data={{ id: userId, role: "TRAVELER" }}
									changeStatus={changeRole}
									toastMessage="User has been demoted to a regular user successfully!"
								/>
							</Box>
						)}
					</Box>
				);
			},
		},
	];

	return (
		<Box>
			<Typography
				sx={{
					textAlign: "center",
					mt: { xs: 1, md: 3 },
					fontWeight: { xs: 500, md: 600 },
				}}
				component="h4"
				variant="h4"
			>
				Manage Users
			</Typography>
			{!isLoading ? (
				<Box my={3}>
					<DataGrid rows={users} columns={columns} hideFooter={true} />
				</Box>
			) : (
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						mt: { xs: 2, md: 5 },
					}}
				>
					<CircularProgress />
				</Box>
			)}
		</Box>
	);
};

export default ManageUserPage;
