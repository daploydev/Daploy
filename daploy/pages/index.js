import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
	return (
		<div>
			<div class="container">
				<div class="blobs">
					<div class="liquid"></div>
					<div class="blob"></div>
					<div class="blob"></div>
					<div class="blob"></div>
					<div class="blob"></div>
					<div class="blob"></div>
					<div class="blob"></div>
					<div class="blob"></div>
					<div class="blob"></div>
					<div class="blob"></div>
					<div class="blob"></div>
					<div class="blob"></div>
					<div class="blob"></div>
				</div>
				<Link href="/home" as="/home">
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
						width="50%"
						className="text"
						alt="Daploy Logo"
					/>
				</Link>
				<svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="0">
					<defs>
						<filter id="goog">
							<feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
							<feColorMatrix
								in="blur"
								mode="matrix"
								values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
								result="goo"
							/>
							<feBlend in="SourceGraphic" in2="goo" />
						</filter>
						<filter id="goo">
							<feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
							<feColorMatrix
								in="blur"
								mode="matrix"
								values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
								result="goo"
							/>
							<feBlend in="SourceGraphic" in2="goo" />
						</filter>
					</defs>
				</svg>
			</div>
		</div>
	);
}
