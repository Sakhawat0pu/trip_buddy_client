"use client";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import logo from "@/assets/logo1.png";
import Image from "next/image";
import TripBuddyForm from "@/components/Form/TripBuddyForm";
import { z } from "zod";
import { FieldValues } from "react-hook-form";
import { loginUser } from "@/services/actions/loginUser";
import { useState } from "react";
import { toast } from "sonner";
import { jwtDecode } from "jwt-decode";
import { USER_ROLE } from "@/constants/role";
import { setAccessTokenToCookiesAndRedirect } from "@/services/actions/setAccessTokenToCookies";
import { zodResolver } from "@hookform/resolvers/zod";
import TripBuddyInput from "@/components/Form/TripBuddyInput";
import Link from "next/link";

const loginValidationSchema = z.object({
	email: z.string().email("Please enter a valid email address!"),
	password: z.string().min(6, "Password must be at least 6 characters long!"),
});

const LoginPage = ({ searchParams }: { searchParams: any }) => {
	const [error, setError] = useState("");

	const handleLogin = async (data: FieldValues) => {
		try {
			const res = await loginUser(data);
			if (res?.data?.accessToken) {
				toast.success(res?.message, { duration: 3000 });

				const userInfo: any = jwtDecode(res?.data?.accessToken);

				const userRole = userInfo.role.toLowerCase();

				let redirectPath = `/`;
				if (searchParams.pathname) {
					redirectPath = searchParams.pathname;
				} else if (
					userRole === USER_ROLE.SUPER_ADMIN ||
					userRole === USER_ROLE.ADMIN
				) {
					redirectPath = "/dashboard";
				}
				setAccessTokenToCookiesAndRedirect(res.data.accessToken, {
					redirect: redirectPath,
				});
			} else {
				setError(res.message);
			}
		} catch (err: any) {
			toast.error(err.message);
		}
	};
	return (
		<Box
			sx={{
				bgcolor: "#d3d3d3",
				height: "100vh",
				margin: 0,
			}}
		>
			<Stack
				justifyContent="center"
				alignItems="center"
				sx={{ height: "100vh" }}
			>
				<Box maxWidth="1200px" width="100%" py={10}>
					<Stack
						justifyContent="center"
						alignItems="center"
						mt={{ xs: "24px", md: "0px" }}
					>
						<Box
							width={{ xs: "200px", md: "400px" }}
							height={{ xs: "60px", md: "100px" }}
							my="auto"
							position="relative"
						>
							{logo && (
								<Image
									src={logo}
									alt="company logo"
									fill
									sizes="small"
									priority
								/>
							)}
						</Box>
					</Stack>
					<Stack
						direction={{ xs: "column", md: "row" }}
						justifyContent="center"
						alignItems="center"
						gap={{ xs: "8px", md: "16px" }}
						mt={{ xs: "12px", md: "24px" }}
						mx={{ xs: "10px", md: "0px" }}
					>
						<Box
							sx={{
								maxWidth: { xs: "400px", md: "500px" },
								width: "100%",
								bgcolor: "#d1c0c0",
								height: { xs: "280px", md: "400px" },
								mt: { xs: 1, md: 4 },
								boxShadow: 1,
								borderRadius: 2,
								textAlign: "center",
								pt: { xs: 5, md: 15 },
							}}
						>
							<Typography
								color="darkgreen"
								variant="h5"
								component="h5"
								fontSize={30}
								fontWeight={600}
							>
								Welcome Back!
								<br /> We're thrilled to see you again.
							</Typography>
							<Typography pt={3} fontSize={20} fontWeight={500} color="gray">
								Log in to access your personalized travel recommendations and
								connections.
							</Typography>
						</Box>
						<Box
							sx={{
								maxWidth: { xs: "400px", md: "500px" },
								width: "100%",
								boxShadow: 1,
								borderRadius: 2,
								bgcolor: "white",
								py: 5,
								px: 4,
								mt: { xs: 2, md: 4 },
							}}
						>
							<Typography variant="h4" component="h4">
								Please Log in
							</Typography>
							<TripBuddyForm
								onSubmit={handleLogin}
								resolver={zodResolver(loginValidationSchema)}
								defaultValues={{
									email: "",
									password: "",
								}}
							>
								<Grid container spacing={2} my={1}>
									<Grid item xs={12}>
										<TripBuddyInput
											name="email"
											label="Email"
											type="email"
											fullWidth={true}
										/>
									</Grid>
									<Grid item xs={12}>
										<TripBuddyInput
											name="password"
											label="Password"
											type="password"
											fullWidth={true}
										/>
									</Grid>
								</Grid>
								<Typography
									component="p"
									fontWeight={300}
									mb={1}
									textAlign="end"
								>
									<Link
										href="/forgot-password"
										style={{ textDecoration: "none" }}
									>
										Forgot Password?
									</Link>
								</Typography>
								<Button
									type="submit"
									sx={{ my: "10px", fontWeight: 700, bgcolor: "darkgreen" }}
									fullWidth
								>
									Login
								</Button>
								{error && (
									<Box>
										<Typography
											sx={{
												bgcolor: "red",
												color: "white",
												mt: "5px",
												fontSize: "18px",
												borderRadius: "10px",
												px: "5px",
												textAlign: "center",
											}}
										>
											{error}
										</Typography>
									</Box>
								)}
							</TripBuddyForm>
							<Typography component="p" fontWeight={300} mt={3}>
								Don't have an account?{" "}
								<Link href="/register">
									<Typography component="span" color="#0000EE">
										Create an account
									</Typography>
								</Link>
							</Typography>
						</Box>
					</Stack>
				</Box>
			</Stack>
		</Box>
	);
};

export default LoginPage;
