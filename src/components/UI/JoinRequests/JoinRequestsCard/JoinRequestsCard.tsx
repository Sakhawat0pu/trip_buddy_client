import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import Image from "next/image";
import Link from "next/link";
import { Box, Button } from "@mui/material";
import { statusColor } from "@/constants/status";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { useRespondToTravelReqMutation } from "@/redux/api/tripBuddyApi";
import { toast } from "sonner";

type TTripProps = {
	id: string;
	tripId: string;
	userId: string;
	name: string;
	imgUrl?: string;
	destination: string;
	startDate: string;
	endDate: string;
	status?: string;
	requesterName: string;
	requesterEmail: string;
	requesterContactNo: string;
	requesterAccomPreference?: string;
	message?: string;
};

export default function JoinRequestCard({
	id,
	tripId,
	userId,
	name,
	imgUrl,
	destination,
	startDate,
	endDate,
	requesterName,
	requesterEmail,
	requesterContactNo,
	requesterAccomPreference,
	message,

	status = "",
}: TTripProps) {
	const [respondToRequest] = useRespondToTravelReqMutation();
	const handleAccept = async () => {
		const data = {
			userId,
			body: {
				tripId,
				status: "APPROVED",
			},
		};
		try {
			const res = await respondToRequest(data).unwrap();
			if (res?.id) {
				toast.success("You successfully accepted the request!");
			}
		} catch (err: any) {
			toast.error(err?.message);
		}
	};
	const handleReject = async () => {
		const data = {
			userId,
			body: {
				tripId,
				status: "REJECTED",
			},
		};
		try {
			const res = await respondToRequest(data).unwrap();
			if (res?.id) {
				toast.success("You successfully rejected the request!");
			}
		} catch (err: any) {
			toast.error(err?.message);
		}
	};
	return (
		<Card sx={{ maxWidth: 480 }}>
			<CardHeader
				avatar={
					<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
						{name.substring(0, 1)}
					</Avatar>
				}
				title={`Posted By ${name}`}
			/>
			<Image
				src={imgUrl as string}
				width={480}
				height={300}
				alt={destination}
			/>
			<CardContent>
				<Typography
					variant="h5"
					// color="text.secondary"
					component="h5"
					fontWeight={600}
					mb={2}
				>
					{destination}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					<strong>Start Date: </strong> {startDate}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					<strong>End Date: </strong> {endDate}
				</Typography>
				{status && (
					<Typography variant="h6" color="text.secondary" fontSize={18} my={2}>
						<strong>Request Status:</strong>{" "}
						<span
							style={{
								color: statusColor[status as keyof typeof statusColor],
							}}
						>
							{status}
						</span>
					</Typography>
				)}
				<Typography variant="body2" color="text.secondary" fontSize={18} mb={1}>
					<strong>Requester Info : </strong>
				</Typography>
				<Typography variant="body2" color="text.secondary">
					<strong>Name: </strong> {requesterName}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					<strong>Email: </strong> {requesterEmail}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					<strong>Contact No: </strong> {requesterContactNo}
				</Typography>
				{requesterAccomPreference && (
					<Typography variant="body2" color="text.secondary">
						<strong>Accommodation Preference: </strong>
						{requesterAccomPreference.substring(0, 36)}...
					</Typography>
				)}
				{message && (
					<Typography variant="body2" color="text.secondary">
						<strong>Message: </strong> {message.substring(0, 50)}...
					</Typography>
				)}
			</CardContent>
			{status === "PENDING" ? (
				<CardActions sx={{ pb: 2, px: 2 }}>
					<Button size="small" endIcon={<DoneIcon />} onClick={handleAccept}>
						ACCEPT
					</Button>
					<Button
						size="small"
						sx={{ bgcolor: "red" }}
						endIcon={<CloseIcon />}
						onClick={handleReject}
					>
						REJECT
					</Button>
				</CardActions>
			) : (
				<Box py={{ md: 4.5 }}></Box>
			)}
		</Card>
	);
}
