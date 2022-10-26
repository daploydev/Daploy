import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>Daploy a Web Dev for your Next Project</title>
				<meta name="description" content="Daploy a Web Dev for your Next Project" />
			</Head>
			<div style={{ height: "100vh", width: "100" }}>
				<Link href="/home" as="/home">
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
						alt="Daploy Logo"
					/>
				</Link>
				<motion.div animate={{ opacity: [0, 1] }}>
					<div
						style={{
							width: "100%",
							backgroundColor: "#efefef",
							height: "0.1rem",
						}}
					></div>
				</motion.div>

				<motion.div animate={{ y: 20 }} transition={{ delay: 1 }}>
					<div
						style={{
							width: "100vw",
							backgroundColor: "#efefef",
						}}
					></div>
				</motion.div>
				<div>
					<br />
				</div>
				<div className="section-one" style={{ padding: "10px", paddingBottom: "200px" }}>
					<h1>My Skills</h1>
					<div style={{ maxWidth: "800px", margin: "auto" }}>
						<div
							id="container"
							style={{
								display: "Grid",
								gridTemplateColumns: "2FR 2FR 2FR",
								gridGap: "5px",
							}}
						>
							<div className="box">
								<Image src="/svg/css3.svg" width={48} height={48} alt="CSS3 Logo" />
								<br />
								CSS
							</div>
							<div className="box">
								<Image src="/svg/html-5.svg" width={48} height={48} alt="HTML 5 Logo" />
								<br />
								HTML
							</div>
							<div className="box">
								<Image src="/svg/javascript.svg" width={48} height={48} alt="Javascript Logo" />
								<br />
								Javascript
							</div>
							<div className="box">
								<Image src="/svg/typescript.svg" width={48} height={48} alt="Typescript Logo" />
								<br />
								Typescript
							</div>
							<div className="box">
								<Image src="/svg/react.svg" width={48} height={48} alt="React Logo" />
								<br />
								React
							</div>
							<div className="box">
								<Image src="/svg/node-js.svg" width={48} height={48} alt="NodeJS Logo" />
								<br />
								NodeJS
							</div>
							<div className="box">
								<Image src="/svg/mongodb.svg" width={48} height={48} alt="Mongodb Logo" />
								<br />
								MongoDB
							</div>
							<div className="box">
								<Image src="/svg/next-js.svg" width={48} height={48} alt="NextJS Logo" />
								<br />
								NextJS
							</div>
							<div className="box">
								<Image src="/svg/git.svg" width={48} height={48} alt="Git Logo" />
								<br />
								Git
							</div>
							<div className="box">
								<Image src="/svg/npm.svg" width={48} height={48} alt="NPM Logo" />
								<br />
								NPM
							</div>
							<div className="box">
								<Image src="/svg/graphql.svg" width={48} height={48} alt="Graphql Logo" />
								<br />
								Graphql
							</div>
						</div>
					</div>
					<div></div>
					<div className="separator">
						<svg
							className="separator__svg"
							width="100%"
							height="100px"
							viewBox="0 0 100 100"
							preserveAspectRatio="none"
							fill="#000"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							alt="seperator"
						>
							<path d="M 100 100 V 10 L 0 100" />
							<path d="M 30 73 L 100 18 V 10 Z" fill="#333" strokeWidth="0" />
						</svg>
					</div>
				</div>
				<div className="section-two" style={{ width: "100%" }}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						fill="#fff"
						viewBox="0 0 24 24"
						alt="Github Logo"
					>
						<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
					</svg>
					<a style={{ color: "#FFF", padding: "5px", fontSize: "24px" }} href="https://github.com/daploydev">
						github/daploydev
					</a>
					<p style={{ padding: "50px", color: "#fff" }}>
						&copy;{new Date().getFullYear()}, made with ♥ by Daploy.dev for a better web.{" "}
					</p>
				</div>
			</div>
		</>
	);
}
