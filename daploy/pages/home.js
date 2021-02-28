import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
	return (
		<div style={{ height: "100vh", width: "100vw" }}>
			<Link href="/home" as="/home">
				<a>
					<motion.img
						animate={{
							scale: [0, 1.2, 1],
							transition: { duration: 0.2 },
						}}
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
						whileTap={{
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
						width="300px"
					/>
				</a>
			</Link>
			<motion.div animate={{ opacity: [0, 1] }}>
				<div
					style={{
						width: "100vw",
						backgroundColor: "#efefef",
						height: "0.1rem",
					}}
				></div>
			</motion.div>
			<motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 1 }}>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						color: "#666",
					}}
				>
					<motion.div
						style={{ padding: "1rem" }}
						whileHover={{
							scale: [1, 1.2],
							color: "red",
							transition: { duration: 0.1 },
						}}
					>
						<p>Home</p>
					</motion.div>
					<motion.div
						style={{ padding: "1rem" }}
						whileHover={{
							scale: [1, 1.4],
							color: "red",
							transition: { duration: 0.1 },
						}}
					>
						<p>link2</p>
					</motion.div>
					<motion.div
						style={{ padding: "1rem" }}
						whileHover={{
							scale: [1, 1.4],
							color: "red",
							transition: { duration: 0.1 },
						}}
					>
						<p>link3</p>
					</motion.div>
				</div>
			</motion.div>
			<motion.div animate={{ y: 20 }} transition={{ delay: 1 }}>
				<div
					style={{
						width: "100vw",
						backgroundColor: "#efefef",
					}}
				></div>
			</motion.div>
		</div>
	);
}
