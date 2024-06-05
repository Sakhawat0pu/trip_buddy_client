"use client";
import TripBuddyForm from "@/components/Form/TripBuddyForm";
import TripBuddyInput from "@/components/Form/TripBuddyInput";
import {
	useCreateAdminMutation,
	useGetMeQuery,
	useUpdateMeMutation,
} from "@/redux/api/userApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const defaultValues = {
	name: "",
	email: "",
	password: "",
	profile: {
		age: "",
		bio: "",
	},
};

const createAdminValidationSchema = z.object({
	name: z.string().min(1, "Please provide the name of the admin"),
	email: z.string().min(1, "Please provide a valid email."),
	password: z.string().min(6, "Password must be at least 6 character long."),
	profile: z.object({
		age: z.coerce.number().min(1, "Please provide the age of the admin."),
		bio: z.string().optional(),
	}),
});

const CreateAdminPage = () => {
	const [error, setError] = useState("");
	const [createAdmin] = useCreateAdminMutation();

	const handleUpdateProfile = async (data: FieldValues) => {
		setError("");
		data.role = "ADMIN";

		try {
			const res = await createAdmin(data).unwrap();
			console.log(res);
			if (res?.id) {
				toast.success("Admin has been created successfully!");
			}
		} catch (err: any) {
			setError(err.message);
		}
	};
	return (
		<Box my={2}>
			<Typography
				variant="h3"
				component="h3"
				fontWeight={600}
				textAlign="center"
				fontSize={{ xs: 25, md: 40 }}
				mb={5}
			>
				Create An Admin
			</Typography>
			<TripBuddyForm
				onSubmit={handleUpdateProfile}
				defaultValues={defaultValues}
				resolver={zodResolver(createAdminValidationSchema)}
			>
				<Grid container spacing={{ xs: 2, md: 3 }}>
					<Grid item xs={12} md={6}>
						<TripBuddyInput name="name" label="Name" fullWidth={true} />
					</Grid>
					<Grid item xs={12} md={6}>
						<TripBuddyInput
							name="email"
							label="Email"
							type="email"
							fullWidth={true}
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<TripBuddyInput
							name="password"
							label="Password"
							type="password"
							fullWidth={true}
						/>
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
							mt: 6,
							px: 5,
							bgcolor: "primary.main",
							fontWeight: 600,
						}}
					>
						Create
					</Button>
				</Stack>
			</TripBuddyForm>
		</Box>
	);
};

export default CreateAdminPage;
