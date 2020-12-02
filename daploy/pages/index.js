import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div>
			<p align="center">Level 2 awaits with a button you can display:</p>

			<div align="center" width="300px">
				<Button
					href="/level2"
					align="center"
					variant="contained"
					style={{ display: "none" }}
				>
					level 2
				</Button>
			</div>
		</div>
	);
}
