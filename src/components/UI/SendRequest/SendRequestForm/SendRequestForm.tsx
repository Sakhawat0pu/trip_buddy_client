"use client";
import TripBuddyForm from "@/components/Form/TripBuddyForm";
import TripBuddyInput from "@/components/Form/TripBuddyInput";
import { useSendRequestMutation } from "@/redux/api/tripBuddyApi";
import { useGetMeQuery } from "@/redux/api/userApi";
import {
	Box,
	Button,
	Checkbox,
	FormControlLabel,
	Grid,
	Typography,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const SendRequestForm = ({ tripId }: { tripId: string }) => {
	const [error, setError] = useState("");
	const [isReadTermAndCondition, setReadTermAndCondition] = useState(false);
	const { data: me, isLoading } = useGetMeQuery(undefined);

	const defaultValues = {
		requesterName: isLoading ? "" : me?.name,
		requesterContactNo: "",
		requesterEmail: isLoading ? "" : me?.email,
		requesterAccomPreference: "",
		message: "",
	};

	const [sendRequest] = useSendRequestMutation();

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setReadTermAndCondition(event.target.checked);
	};

	const handleSendRequest = async (data: FieldValues) => {
		setError("");

		const payload = {
			id: tripId,
			body: data,
		};

		try {
			const res = await sendRequest(payload).unwrap();

			if (res?.id) {
				toast.success("Request sent successfully.");
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
				my={{ xs: 7, md: 10 }}
			>
				Secure Your Spot on This Trip
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
				{!isLoading && (
					<TripBuddyForm
						onSubmit={handleSendRequest}
						defaultValues={defaultValues}
					>
						<Grid container spacing={{ xs: 2, md: 3 }}>
							<Grid item xs={12} md={6}>
								<TripBuddyInput
									name="requesterName"
									label="Name"
									placeholder="Enter your name"
									fullWidth={true}
									required={true}
								/>
							</Grid>
							<Grid item xs={12} md={6}>
								<TripBuddyInput
									name="requesterContactNo"
									label="Contact Number"
									placeholder="Enter your contact number"
									fullWidth={true}
									required={true}
								/>
							</Grid>
							<Grid item xs={12} md={6}>
								<TripBuddyInput
									name="requesterEmail"
									label="Email"
									type="email"
									placeholder="Enter your email address"
									fullWidth={true}
									required={true}
								/>
							</Grid>
							<Grid item xs={12} md={6}>
								<TripBuddyInput
									name="requesterAccomPreference"
									label="Accommodation Preference"
									placeholder="Please enter your accommodation preference, if any"
									fullWidth={true}
								/>
							</Grid>
							<Grid item xs={12}>
								<TripBuddyInput
									name="message"
									label="Message or Inquiry"
									placeholder="Please leave your message or any inquiries here"
									multiline={true}
									rows={3}
									size="medium"
									fullWidth={true}
								/>
							</Grid>
						</Grid>
						<FormControlLabel
							control={
								<Checkbox
									checked={isReadTermAndCondition}
									onChange={handleChange}
								/>
							}
							label={
								<span>
									I have agreed to the{" "}
									<Link href="/terms-and-condition" target="_blank">
										Terms and Conditions
									</Link>
								</span>
							}
							sx={{
								display: "flex",
								justifyContent: "flex-start",
								mt: 3,
							}}
						/>
						{error && (
							<Typography variant="h6" component="h6" color="red" mt={2}>
								{error}
							</Typography>
						)}
						<Button
							type="submit"
							disabled={!isReadTermAndCondition}
							sx={{
								mt: 4,
								bgcolor: "darkgreen",
							}}
							fullWidth
						>
							Send Request To Join
						</Button>
					</TripBuddyForm>
				)}
			</Box>
		</Box>
	);
};

export default SendRequestForm;
