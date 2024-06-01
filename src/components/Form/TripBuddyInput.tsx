import { SxProps, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TTripBuddyInput = {
	name: string;
	label?: string;
	type?: string;
	placeholder?: string;
	size?: "small" | "medium";
	fullWidth?: boolean;
	multiline?: boolean;
	rows?: number;
	sx?: SxProps;
	required?: boolean;
};

const TripBuddyInput = ({
	name,
	label,
	placeholder,
	type = "text",
	size = "small",
	fullWidth = false,
	multiline = false,
	rows,
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
					placeholder={placeholder || label}
					error={!!error?.message}
					helperText={error?.message}
					multiline={multiline}
					rows={rows}
				/>
			)}
		/>
	);
};

export default TripBuddyInput;
