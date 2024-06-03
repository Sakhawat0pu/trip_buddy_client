"use client";
import TripBuddyForm from "@/components/Form/TripBuddyForm";
import TripBuddyInput from "@/components/Form/TripBuddyInput";
import { useGetMeQuery, useUpdateMeMutation } from "@/redux/api/userApi";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const setDefaultValues = (data: Record<string, any>, isLoading: boolean) => {
	return {
		name: isLoading ? "" : data?.name,
		email: isLoading ? "" : data?.email,
		profile: {
			age: isLoading ? "" : data?.userProfile?.age.toString(),
			bio: isLoading ? "" : data?.userProfile?.bio,
		},
	};
};

const UpdateProfile = () => {
	const [error, setError] = useState("");
	const [updateProfile] = useUpdateMeMutation();
	const { data: myself, isLoading } = useGetMeQuery(undefined);

	let defaultValues = setDefaultValues(myself, isLoading);

	const handleUpdateProfile = async (data: FieldValues) => {
		setError("");

		if (myself.email === data.email) {
			delete data.email;
		}
		data.profile.age = Number(data.profile.age);

		try {
			const res = await updateProfile(data).unwrap();
			if (res?.id) {
				toast.success("Your profile has been updated successfully!.");
			}
		} catch (err: any) {
			setError(err.message);
		}
	};
	return (
		<Box my={{ xs: 5, md: 8 }}>
			<Typography
				variant="h3"
				component="h3"
				color="primary.main"
				fontWeight={500}
				textAlign="center"
				fontSize={{ xs: 25, md: 40 }}
				mb={{ xs: 5, md: 7 }}
			>
				Update Profile Information
			</Typography>
			{!isLoading && (
				<TripBuddyForm
					onSubmit={handleUpdateProfile}
					defaultValues={defaultValues}
				>
					<Grid container spacing={{ xs: 2, md: 3 }}>
						<Grid item xs={12} md={6}>
							<TripBuddyInput name="name" label="Name" fullWidth={true} />
						</Grid>
						<Grid item xs={12} md={6}>
							<TripBuddyInput name="email" label="Email" fullWidth={true} />
						</Grid>
						<Grid item xs={12} md={6}>
							<TripBuddyInput
								name="profile.age"
								label="Age"
								type="number"
								fullWidth={true}
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<TripBuddyInput name="profile.bio" label="Bio" fullWidth={true} />
						</Grid>
					</Grid>
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
							Update
						</Button>
					</Stack>
				</TripBuddyForm>
			)}
		</Box>
	);
};

export default UpdateProfile;
