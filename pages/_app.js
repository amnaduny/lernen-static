// pages/_app.js
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />;
      <CTA />
      <Footer />
    </>
  );
}
