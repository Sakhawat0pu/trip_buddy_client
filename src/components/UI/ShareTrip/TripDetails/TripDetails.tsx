"use client";
import TripBuddyDatePicker from "@/components/Form/TripBuddyDatePicker";
import TripBuddyFileUploader from "@/components/Form/TripBuddyFileUploader";
import TripBuddyForm from "@/components/Form/TripBuddyForm";
import TripBuddyInput from "@/components/Form/TripBuddyInput";
import { useCreateATripMutation } from "@/redux/api/tripsApi";
import { convertToFormData } from "@/utils/convertToFormData";
import { dateFormatter } from "@/utils/dateFormatter";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Grid, Typography } from "@mui/material";
import dayjs from "dayjs";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const defaultValues = {
	destination: "",
	tripType: "",
	startDate: dayjs(new Date().toISOString()),
	endDate: dayjs(new Date().toISOString()),
	activities: "",
	budget: "",
	description: "",
	files: "",
};

const TripDetails = () => {
	const [error, setError] = useState("");
	const [createATrip] = useCreateATripMutation();

	const handlePlanSubmit = async (data: FieldValues) => {
		setError("");
		data.startDate = dateFormatter(new Date(data.startDate));
		data.endDate = dateFormatter(new Date(data.endDate));
		data.activities = data.activities.split(", ");
		data.budget = Number(data.budget);
		const formData = convertToFormData(data);

		try {
			if (new Date(data.startDate) > new Date(data.endDate)) {
				throw new Error(
					"The end date must be the same or a later date than the start date"
				);
			}
			const res = await createATrip(formData).unwrap();
			console.log(res);
			if (res?.id) {
				toast.success(
					"Congratulations! Your trip plan is now live for others to see."
				);
			}
		} catch (err: any) {
			setError(err.message);
		}
	};
	return (
		<Box my={{ xs: 3, md: 6 }} textAlign="center">
			<Typography
				variant="h4"
				component="h4"
				fontWeight={600}
				color="darkseagreen"
				mb={5}
			>
				Ready, Set, Plan!
			</Typography>
			<Box
				sx={{
					boxShadow: 1,
					borderRadius: 2,
					py: 5,
					px: 4,
				}}
			>
				<Typography mb={3} variant="h6" component="h6" fontWeight={600}>
					Tell Us About Your Next Trip
				</Typography>
				<TripBuddyForm
					onSubmit={handlePlanSubmit}
					defaultValues={defaultValues}
				>
					<Grid container spacing={{ xs: 2, md: 3 }}>
						<Grid item xs={12} md={6}>
							<TripBuddyInput
								name="destination"
								label="Destination"
								fullWidth={true}
								required={true}
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<TripBuddyInput
								name="tripType"
								label="Trip Type"
								fullWidth={true}
								required={true}
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<TripBuddyDatePicker
								name="startDate"
								label="Start Date"
								fullWidth={true}
								// required={true}
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<TripBuddyDatePicker
								name="endDate"
								label="End Date"
								fullWidth={true}
								// required={true}
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<TripBuddyInput
								name="activities"
								label="Activities"
								placeholder="List your activities separated by comma"
								fullWidth={true}
								required={true}
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<TripBuddyInput
								name="budget"
								label="Budget"
								type="number"
								placeholder="Estimated budget for the trip"
								fullWidth={true}
								required={true}
							/>
						</Grid>
						<Grid item xs={12}>
							<TripBuddyInput
								name="description"
								label="Itinerary and Details"
								placeholder="Itinerary and Details (If possible, write it in html format inside a div tag)"
								multiline={true}
								rows={4}
								size="medium"
								fullWidth={true}
								required={true}
							/>
						</Grid>
					</Grid>
					<TripBuddyFileUploader
						name="files"
						label="Attach Images"
						sx={{ bgcolor: "darkgreen", mt: 4 }}
					/>
					{error && (
						<Typography variant="h6" component="h6" color="red" mt={2}>
							{error}
						</Typography>
					)}
					<Button
						type="submit"
						sx={{
							mt: 4,
							bgcolor: "darkgreen",
						}}
						fullWidth
					>
						Share your plan
					</Button>
				</TripBuddyForm>
			</Box>
		</Box>
	);
};

export default TripDetails;
