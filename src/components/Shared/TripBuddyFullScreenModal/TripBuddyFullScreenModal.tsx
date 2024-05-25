import * as React from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { DialogContent, SxProps } from "@mui/material";

type TFullScreenModalProp = {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	title?: string;
	children: React.ReactNode;
	sx?: SxProps;
};

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement;
	},
	ref: React.Ref<unknown>
) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export default function TripBuddyFullScreenModal({
	open,
	setOpen,
	title = "",
	children,
	sx,
}: TFullScreenModalProp) {
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<React.Fragment>
			<Dialog
				fullScreen
				open={open}
				onClose={handleClose}
				TransitionComponent={Transition}
			>
				<AppBar sx={{ position: "relative" }}>
					<Toolbar>
						<Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
							{title}
						</Typography>
						<IconButton
							edge="start"
							color="inherit"
							onClick={handleClose}
							aria-label="close"
						>
							<CloseIcon />
						</IconButton>
					</Toolbar>
				</AppBar>
				<DialogContent dividers>{children}</DialogContent>
			</Dialog>
		</React.Fragment>
	);
}
