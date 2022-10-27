import "fontsource-roboto";
import "../public/css/main.scss";
import "../styles/global.css";
import { motion, AnimatePresence } from "framer-motion";

const App = ({ Component, pageProps, router }) => {
	return (
		<AnimatePresence>
			<motion.div
				key={router.route}
				initial="pageInitial"
				animate="pageAnimate"
				exit="pageExit"
				variants={{
					pageInitial: { opacity: 0 },
					pageAnimate: { opacity: 1 },
					pageExit: {
						backgroundColor: "white",
						filter: "invert()",
						opacity: 0,
					},
				}}
			>
				<Component {...pageProps} />
				<style jsx global>{`
					body {
						margin: 0px;
						padding: 0px;
						color: #333;
						font-family: "Roboto";
						background-color: #fff;
					}
				`}</style>
			</motion.div>
		</AnimatePresence>
	);
};

export default App;
