import type { AppProps } from "next/app";
import StyleProvider from "../styles";
import { RecoilRoot } from "recoil";
import Header from "../components/header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyleProvider>
      <RecoilRoot>
        <Header />
        <Component {...pageProps} />
        <ToastContainer />
      </RecoilRoot>
    </StyleProvider>
  );
}

export default MyApp;
