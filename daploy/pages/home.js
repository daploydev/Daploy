import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
	return (
		<div style={{ height: "99vh", width: "100vw" }}>
			<Link href="/home" as="/home">
				<a>
					<motion.img
						whileHover={{
							scale: [1, 1.4, 1.2],
							rotate: [0, 10, -10, 0],
							filter: [
								"hue-rotate(0) contrast(100%",
								"hue-rotate(360deg) contrast(200%)",
								"hue-rotate(45deg) contrast(300%)",
								"hue-rotate(0) contrast(100%)",
							],
							transition: { duration: 0.2 },
						}}
						src="/images/daploy-logo.png"
						width="20%"
					/>
				</a>
			</Link>
		</div>
	);
}
