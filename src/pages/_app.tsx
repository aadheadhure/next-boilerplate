import { AppProps } from "next/app";
import "~/styles/tailwind.css";
import "../styles/index.css";
import "~/styles/tailwind-utils.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
