import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import Image from "next/image";
import Link from "next/link";

export default function Level2() {
	return (
		<div>
			<h1 align="center">404 Could this page not be found?</h1>

			<Button
				href="/level2"
				align="center"
				variant="contained"
				style={{ display: "none" }}
			>
				level 2
			</Button>
		</div>
	);
}
