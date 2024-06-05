"use client";
import TripBuddyForm from "@/components/Form/TripBuddyForm";
import TripBuddyInput from "@/components/Form/TripBuddyInput";
import { useChangePasswordMutation } from "@/redux/api/authApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const changePasswordValidationSchema = z.object({
	oldPassword: z
		.string()
		.min(6, "Your Old Password must be at least 6 characters long!"),
	newPassword: z
		.string()
		.min(6, "New Password must be at least 6 characters long!"),
	verifyNewPassword: z
		.string()
		.min(6, "Please confirm your new password here!"),
});

const ChangePasswordForm = () => {
	const [error, setError] = useState("");
	const [changePassword] = useChangePasswordMutation();

	let defaultValues = {
		oldPassword: "",
		newPassword: "",
		verifyNewPassword: "",
	};

	const handleUpdateProfile = async (data: FieldValues) => {
		setError("");
		if (data.newPassword !== data.verifyNewPassword) {
			setError(
				"New password and confirmation password do not match!!! Please try again."
			);
		}

		delete data.verifyNewPassword;

		try {
			const res = await changePassword(data).unwrap();
			if (res?.id) {
				toast.success("Your password has been successfully changed!");
			}
		} catch (err: any) {
			setError(err.message);
		}
	};
	return (
		<Box
			my={{ xs: 5, md: 8 }}
			width="100%"
			sx={{
				display: "flex",
				// flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Box
				width={{ xs: "100%", md: "40%" }}
				boxShadow={1}
				sx={{ py: { xs: 5, md: 10 }, px: { xs: 3, md: 5 }, borderRadius: 2 }}
			>
				<Typography
					variant="h3"
					component="h3"
					color="primary.main"
					fontWeight={500}
					textAlign="center"
					fontSize={{ xs: 25, md: 40 }}
					mb={{ xs: 5, md: 7 }}
				>
					Change Password
				</Typography>
				<TripBuddyForm
					onSubmit={handleUpdateProfile}
					defaultValues={defaultValues}
					resolver={zodResolver(changePasswordValidationSchema)}
				>
					<TripBuddyInput
						name="oldPassword"
						label="Old Password"
						type="password"
						fullWidth={true}
						sx={{ mb: 2 }}
					/>
					<TripBuddyInput
						name="newPassword"
						label="New Password"
						type="password"
						fullWidth={true}
						sx={{ mb: 2 }}
					/>
					<TripBuddyInput
						name="verifyNewPassword"
						label="Confirm New Password"
						type="password"
						fullWidth={true}
						sx={{ mb: 2 }}
					/>
					{error && (
						<Typography variant="h6" component="h6" color="red" mt={2}>
							{error}
						</Typography>
					)}
					<Stack direction="row" justifyContent="center" alignItems="center">
						<Button
							type="submit"
							sx={{
								mt: 4,
								px: 5,
								bgcolor: "darkgreen",
							}}
						>
							Change Password
						</Button>
					</Stack>
				</TripBuddyForm>
			</Box>
		</Box>
	);
};

export default ChangePasswordForm;
