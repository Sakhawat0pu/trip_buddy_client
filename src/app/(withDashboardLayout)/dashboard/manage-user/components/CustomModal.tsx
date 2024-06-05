import TripBuddyModal from "@/components/Shared/TripBuddyModal/TripBuddyModal";
import { Box, Button, Stack, SxProps, Typography } from "@mui/material";
import { toast } from "sonner";

type TCustomModalProp = {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	title?: string;
	message: string;
	buttonLabel: string;
	buttonColor: string;
	data: { id: string; status?: string; role?: string };
	changeStatus: any;
	toastMessage: string;
	sx?: SxProps;
};

const CustomModal = ({
	open,
	setOpen,
	title,
	message,
	buttonLabel,
	buttonColor,
	data,
	changeStatus,
	toastMessage,
}: TCustomModalProp) => {
	const handleChange = async () => {
		try {
			const res = await changeStatus(data).unwrap();
			if (res.id) {
				setOpen(false);
				toast.success(toastMessage);
			}
		} catch (err: any) {
			toast.error(err.message);
		}
	};
	return (
		<TripBuddyModal open={open} setOpen={setOpen} title={title}>
			<Box>
				<Typography mb={5}>{message}</Typography>
				<Stack direction="row" justifyContent="center" gap={2}>
					<Button sx={{ bgcolor: buttonColor }} onClick={handleChange}>
						{buttonLabel}
					</Button>
					<Button sx={{ bgcolor: "blue" }} onClick={() => setOpen(false)}>
						Cancel
					</Button>
				</Stack>
			</Box>
		</TripBuddyModal>
	);
};

export default CustomModal;
