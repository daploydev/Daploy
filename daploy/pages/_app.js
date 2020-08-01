import Layout from "../components/Layout";
import "fontsource-roboto";

function MyApp({ Component, pageProps }) {
  return (
    <Layout {...pageProps}>
      <Component {...pageProps} />
      <style jsx global>{`
        body {
          margin: 0px;
          padding: 0px;
          color: #333;
          font-family: "Roboto";
          background-color: #08AEEA;
          background-image: linear-gradient(217deg, #08AEEA 0%, #2AF598 100%);
      `}</style>
    </Layout>
  );
}

export default MyApp;
