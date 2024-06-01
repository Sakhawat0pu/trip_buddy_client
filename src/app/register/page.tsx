"use client";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import logo from "@/assets/logo1.png";
import Link from "next/link";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerUser } from "@/services/actions/registerUser";
import { loginUser } from "@/services/actions/loginUser";
import { setAccessTokenToCookiesAndRedirect } from "@/services/actions/setAccessTokenToCookies";
import TripBuddyForm from "@/components/Form/TripBuddyForm";
import TripBuddyInput from "@/components/Form/TripBuddyInput";

const registrationValidationSchema = z.object({
	name: z.string().min(1, "Please enter your name!"),
	email: z.string().email("Please enter a valid email address!"),
	password: z.string().min(6, "Password must be at least 6 characters long!"),
	profile: z.object({
		bio: z.string().min(5, "Please enter a bio"),
		age: z.coerce.number().min(18, { message: "You must be at least 18." }),
	}),
});

const defaultValues = {
	name: "",
	email: "",
	password: "",
	profile: {
		bio: "",
		age: "",
	},
};

const RegisterPage = () => {
	const handleRegister = async (data: FieldValues) => {
		try {
			const res = await registerUser(data);

			if (res?.data?.id) {
				toast.success(res?.message);

				const loggedInInfo = await loginUser({
					email: data?.email,
					password: data?.password,
				});
				if (loggedInInfo?.data?.accessToken) {
					// toast.success(res?.message);
					setAccessTokenToCookiesAndRedirect(loggedInInfo.data.accessToken, {
						redirect: "/",
					});
				}
			}
		} catch (err: any) {
			toast.error(err.message);
		}
	};

	return (
		<Box
			sx={{
				bgcolor: "#d3d3d3",
			}}
		>
			<Stack
				sx={{
					justifyContent: "center",
					alignItems: "center",
					height: "100vh",
				}}
			>
				<Box
					sx={{
						maxWidth: 800,
						width: "100%",
					}}
				>
					<Stack sx={{ justifyContent: "center", alignItems: "center" }}>
						<Box
							mb={{ xs: 1, md: 3 }}
							width={{ xs: "200px", md: "400px" }}
							height={{ xs: "80px", md: "100px" }}
						>
							<Image src={logo} alt="logo" layout="responsive"></Image>
						</Box>
					</Stack>
					<Box
						sx={{
							borderRadius: "10px",
							boxShadow: 1,
							bgcolor: "white",
							p: { xs: 3, md: 4 },
							mx: { xs: 2, md: 3 },
							textAlign: "center",
						}}
					>
						<Box>
							<Typography
								variant="h6"
								component="h6"
								fontWeight={600}
								fontSize={30}
								color="darkgreen"
								py={{ xs: 1, md: 2 }}
							>
								Sign Up
							</Typography>
						</Box>
						<TripBuddyForm
							onSubmit={handleRegister}
							resolver={zodResolver(registrationValidationSchema)}
							defaultValues={defaultValues}
						>
							<Grid container spacing={2} my={1}>
								<Grid item xs={12} md={12}>
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
										name="profile.bio"
										label="Bio"
										type="text"
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
							</Grid>
							<Button
								type="submit"
								sx={{ my: "40px", fontWeight: 700, bgcolor: "darkgreen" }}
								fullWidth
							>
								Sing up
							</Button>
						</TripBuddyForm>
						<Typography component="p" fontWeight={300}>
							Already have an account?{" "}
							<Link href="/login">
								<Typography component="span" color="#0000EE">
									Login
								</Typography>
							</Link>
						</Typography>
					</Box>
				</Box>
			</Stack>
		</Box>
	);
};

export default RegisterPage;
