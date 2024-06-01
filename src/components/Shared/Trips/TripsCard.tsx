import * as React from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@mui/material";

type TTripProps = {
	id: string;
	name: string;
	imgUrl?: string;
	destination: string;
	activities: string[];
	startDate: string;
	endDate: string;
	budget: string;
};

export default function TripsCard({
	id,
	name,
	imgUrl,
	destination,
	activities,
	startDate,
	endDate,
	budget,
}: TTripProps) {
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
					<strong>Activities: </strong> {activities.join(", ")}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					<strong>Start Date: </strong> {startDate}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					<strong>End Date: </strong> {endDate}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					<strong>Budget (est.): </strong> ${budget}
				</Typography>
			</CardContent>
			<CardActions disableSpacing sx={{ pb: 2, px: 2 }}>
				<Link href={`/trips/${id}`}>
					<Button size="small">See Details</Button>
				</Link>
			</CardActions>
		</Card>
	);
}