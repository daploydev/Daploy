import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

const Layout = (pageProps) => {
  return (
    <div>
      <Head>
        <title>daploy.dev</title>
      </Head>
      <Link href="/">
        <a>
          <Header />
        </a>
      </Link>
      <div className="container">{pageProps.children}</div>
    </div>
  );
};

export default Layout;
