"use client";

import { useGetMeQuery } from "@/redux/api/userApi";
import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledBox = styled(Box)(({ theme }) => ({
	background: "#f4f7fe",
	borderRadius: theme.spacing(1),
	padding: "8px 16px",
	width: "100%",
	"& p": {
		fontWeight: 600,
	},
}));

const ProfileDetails = () => {
	const { data: myself, isLoading } = useGetMeQuery(undefined);

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
				Personal Information
			</Typography>
			{!isLoading && (
				<Grid container spacing={{ xs: 2, md: 3 }}>
					<Grid item xs={12} md={4}>
						<StyledBox>
							<Typography variant="caption" color="secondary">
								Name
							</Typography>
							<Typography>{myself?.name}</Typography>
						</StyledBox>
					</Grid>
					<Grid item xs={12} md={4}>
						<StyledBox>
							<Typography variant="caption" color="secondary">
								Email
							</Typography>
							<Typography>{myself?.email}</Typography>
						</StyledBox>
					</Grid>
					<Grid item xs={12} md={4}>
						<StyledBox>
							<Typography variant="caption" color="secondary">
								Age
							</Typography>
							<Typography>{myself?.userProfile?.age}</Typography>
						</StyledBox>
					</Grid>
					<Grid item xs={12} md={12}>
						<StyledBox>
							<Typography variant="caption" color="secondary">
								Bio
							</Typography>
							<Typography>{myself?.userProfile?.bio}</Typography>
						</StyledBox>
					</Grid>
					<Grid item xs={12} md={4}>
						<StyledBox>
							<Typography variant="caption" color="secondary">
								Role
							</Typography>
							<Typography>{myself?.role}</Typography>
						</StyledBox>
					</Grid>
					<Grid item xs={12} md={4}>
						<StyledBox>
							<Typography variant="caption" color="secondary">
								Status
							</Typography>
							<Typography>{myself?.status}</Typography>
						</StyledBox>
					</Grid>
					<Grid item xs={12} md={4}>
						<StyledBox>
							<Typography variant="caption" color="secondary">
								Joined On
							</Typography>
							<Typography>{myself?.createdAt.split("T")[0]}</Typography>
						</StyledBox>
					</Grid>
				</Grid>
			)}
		</Box>
	);
};

export default ProfileDetails;
