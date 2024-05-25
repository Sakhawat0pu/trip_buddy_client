import { SxProps, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TTripBuddyInput = {
	name: string;
	label?: string;
	type?: string;
	size?: "small" | "medium";
	fullWidth?: boolean;
	sx?: SxProps;
	required?: boolean;
};

const TripBuddyInput = ({
	name,
	label,
	type = "text",
	size = "small",
	fullWidth = false,
	sx,
	required,
}: TTripBuddyInput) => {
	const { control } = useFormContext();
	return (
		<Controller
			control={control}
			name={name}
			render={({ field, fieldState: { error } }) => (
				<TextField
					{...field}
					sx={{ ...sx }}
					label={label}
					type={type}
					variant="outlined"
					size={size}
					fullWidth={fullWidth}
					required={required}
					placeholder={label}
					error={!!error?.message}
					helperText={error?.message}
				/>
			)}
		/>
	);
};

export default TripBuddyInput;
