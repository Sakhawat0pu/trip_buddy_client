"use client";

import {
	useDeleteATripMutation,
	useGetAllTripsQuery,
} from "@/redux/api/tripsApi";
import {
	Box,
	CircularProgress,
	Divider,
	IconButton,
	Pagination,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import { DataGrid, GridColDef, GridDeleteIcon } from "@mui/x-data-grid";
import { useState } from "react";
import ManageTripModal from "./components/ManageTripModal";
import { useDebounced } from "@/redux/hook";

const ManageTrips = () => {
	const [open, setOpen] = useState(false);
	const [tripId, setTripId] = useState("");
	const [page, setPage] = useState(1);
	const query: Record<string, any> = {};
	const [searchTerm, setSearchTerm] = useState<string>("");
	const debouncedValue = useDebounced({ searchTerm, delay: 600 });
	if (debouncedValue) {
		query["searchTerm"] = searchTerm;
	}

	const { data, isLoading } = useGetAllTripsQuery({
		...query,
		page,
		sortBy: "createdAt",
		sortOrder: "desc",
		limit: 5,
	});
	const [deleteTrip] = useDeleteATripMutation();

	const trips = data?.data;
	const meta = data?.meta;

	const handlePageChange = (
		event: React.ChangeEvent<unknown>,
		value: number
	) => {
		setPage(value);
	};

	const columns: GridColDef[] = [
		{ field: "destination", headerName: "Destination", flex: 1 },
		{ field: "tripType", headerName: "Trip Type", flex: 1 },
		{ field: "startDate", headerName: "Start Date", flex: 1 },
		{ field: "budget", headerName: "Budget(USD)", flex: 1 },
		{
			field: "name",
			headerName: "Host",
			flex: 1,
			valueGetter: (value, row) => row.user.name,
		},
		{
			field: "email",
			headerName: "Host Email",
			flex: 1,
			valueGetter: (value, row) => row.user.email,
		},
		{
			field: "Action",
			headerName: "Action",
			flex: 1,
			headerAlign: "center",
			align: "center",
			renderCell: ({ row }) => {
				return (
					<Box>
						<IconButton
							aria-label="delete"
							onClick={() => {
								setTripId(row.id);
								setOpen(true);
							}}
						>
							<GridDeleteIcon sx={{ color: "red" }} />
						</IconButton>
						<ManageTripModal
							open={open}
							setOpen={setOpen}
							title="Delete Trip"
							message="Are you sure you want to delete the trip?"
							buttonLabel="Delete"
							buttonColor="red"
							id={tripId}
							deleteTrip={deleteTrip}
							toastMessage="Trip has been deleted successfully!"
						/>
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
					my: { xs: 1, md: 3 },
					fontWeight: { xs: 500, md: 600 },
				}}
				component="h4"
				variant="h4"
			>
				Manage Trips
			</Typography>
			<TextField
				size="small"
				sx={{ width: "350px" }}
				label="Search a trip"
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
			{!isLoading ? (
				<Box my={3}>
					<DataGrid
						rows={trips}
						columns={columns}
						hideFooterPagination
						slots={{
							footer: () => (
								<Box>
									<Divider />
									<Stack
										direction="row"
										justifyContent="center"
										alignItems="center"
										my={1.5}
									>
										<Pagination
											count={meta?.totalPages}
											page={page}
											onChange={handlePageChange}
											color="primary"
										/>
									</Stack>
								</Box>
							),
						}}
					/>
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

export default ManageTrips;
