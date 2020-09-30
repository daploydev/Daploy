import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

const Layout = (pageProps) => {
	return (
		<div>
			<Head>
				<title>daploy.dev</title>
			</Head>
			<Header></Header>
			<Header></Header>
			<Header></Header>
			<Header></Header>
			<Header></Header>
			<Header></Header>
			<Header></Header>
			<Header></Header>
			<Link href="/login">
				<a>
					<Header />
				</a>
			</Link>
			<Header></Header>
			<Header></Header>
			<Header></Header>
			<Header></Header>
			<Header></Header>
			<Header></Header>
			<Header></Header>
			<Header></Header>
			<div className="container">{pageProps.children}</div>
		</div>
	);
};

export default Layout;
