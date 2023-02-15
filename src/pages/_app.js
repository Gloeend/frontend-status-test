import "@/styles/_reset.css";
import "@/styles/_globals.css";
import wrapper from "@/store/door-params";

export function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(App);
