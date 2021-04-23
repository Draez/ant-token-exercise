import Head from "next/head";
import { Image, Grid, Row, Space } from "antd";
import Typography from "@namia/typography";
import { ElementWrapper } from "../../styles/styles";

const Kicker = props => {
  const { title, text } = props;
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const { md } = screens;
  const padding = md ? "0 0 0 24px" : "0 0 0 14px";
  return (
    <ElementWrapper>
      <Space size="middle" direction="vertical">
        <Image src="https://via.placeholder.com/1920x1080/eee?text=16:9" />
          <Typography elementType="h2" size="5" type="regular" weight="600" padding={padding}>
            {title}
          </Typography>
      </Space>
      <Space size="small" direction="vertical">
        <Typography elementType="p" size="1" type="regular" padding={padding}>
          {text}
        </Typography>
      </Space>
    </ElementWrapper>
  );
};

export default Kicker;
