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
				<div className="m-auto">
					<Link href="/home" as="/home">
						<Image
							className="p-5 hover:scale-105"
							src="/images/daploy-logo.png"
							width={251}
							height={70}
						></Image>
					</Link>
				</div>
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
				<div className="section-one" style={{ padding: "10px", paddingBottom: "300px" }}>
					<h1 className="text-3xl p-5">My Skills</h1>
					<div style={{ maxWidth: "800px", margin: "auto" }}>
						<div
							id="container"
							style={{
								display: "Grid",
								gridTemplateColumns: "2FR 2FR 2FR",
								gridGap: "10px",
							}}
						>
							<div className="box">
								<Image src="/svg/css3.svg" width={48} height={48} alt="CSS3 Logo" className="m-auto" />
								<br />
								CSS
							</div>
							<div className="box">
								<Image
									src="/svg/html-5.svg"
									width={48}
									height={48}
									alt="HTML 5 Logo"
									className="m-auto"
								/>
								<br />
								HTML
							</div>
							<div className="box">
								<Image
									src="/svg/javascript.svg"
									width={48}
									height={48}
									alt="Javascript Logo"
									className="m-auto"
								/>
								<br />
								Javascript
							</div>
							<div className="box">
								<Image
									src="/svg/typescript.svg"
									width={48}
									height={48}
									alt="Typescript Logo"
									className="m-auto"
								/>
								<br />
								Typescript
							</div>
							<div className="box">
								<Image
									src="/svg/react.svg"
									width={48}
									height={48}
									alt="React Logo"
									className="m-auto"
								/>
								<br />
								React
							</div>
							<div className="box">
								<Image
									src="/svg/node-js.svg"
									width={48}
									height={48}
									alt="NodeJS Logo"
									className="m-auto"
								/>
								<br />
								NodeJS
							</div>
							<div className="box">
								<Image
									src="/svg/mongodb.svg"
									width={48}
									height={48}
									alt="Mongodb Logo"
									className="m-auto"
								/>
								<br />
								MongoDB
							</div>
							<div className="box">
								<Image
									src="/svg/next-js.svg"
									width={48}
									height={48}
									alt="NextJS Logo"
									className="m-auto"
								/>
								<br />
								NextJS
							</div>
							<div className="box">
								<Image src="/svg/git.svg" width={48} height={48} alt="Git Logo" className="m-auto" />
								<br />
								Git
							</div>
							<div className="box">
								<Image src="/svg/npm.svg" width={48} height={48} alt="NPM Logo" className="m-auto" />
								<br />
								NPM
							</div>
							<div className="box">
								<Image
									src="/svg/graphql.svg"
									width={48}
									height={48}
									alt="Graphql Logo"
									className="m-auto"
								/>
								<br />
								Graphql
							</div>
							<div className="box">
								<Image
									src="/svg/tailwind-css.svg"
									width={48}
									height={48}
									alt="Tailwind CSS Logo"
									className="m-auto"
								/>
								<br />
								Tailwind CSS
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
							<path d="M 30 73 L 100 18 V 10 Z" fill="#666" strokeWidth="0" />
						</svg>
					</div>
				</div>
				<div className="section-two" style={{ width: "100%" }}>
					<div className="m-auto">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="#fff"
							viewBox="0 0 24 24"
							alt="Github Logo"
							style={{ display: "initial" }}
						>
							<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
						</svg>
						<a
							style={{ color: "#FFF", padding: "5px", fontSize: "24px" }}
							href="https://github.com/daploydev"
						>
							github/daploydev
						</a>
					</div>
					<p style={{ padding: "50px", color: "#fff" }}>
						&copy;{new Date().getFullYear()}, made with ♥ by Daploy.dev for a better web.{" "}
					</p>
				</div>
			</div>
		</>
	);
}
