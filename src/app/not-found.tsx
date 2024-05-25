import { Box, Stack, Typography } from "@mui/material";

const NotFound = () => {
	return (
		<Box>
			<Stack
				direction="row"
				justifyContent="center"
				alignItems="center"
				sx={{ height: "100vh" }}
			>
				<Typography variant="h3" component="h3" color="red">
					404!!! Page Not Found
				</Typography>
			</Stack>
		</Box>
	);
};

export default NotFound;
