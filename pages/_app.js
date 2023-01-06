import CardTestimoni from "../components/card-testimoni";
import Footer from "../components/footer";
import FormRegister from "../components/form-register";
import Header from "../components/header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />;
      <Footer />
    </div>
  );
}

export default MyApp;
