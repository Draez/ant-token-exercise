import "antd/dist/antd.css";
import { setConfig } from "@namia/typography";
import { globalStyles } from "../styles/styles";
import typographyConfig from "../configs/typography.json";

setConfig(typographyConfig);

function MyApp({ Component, pageProps }) {
  return (
    <>
      {globalStyles}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
