import Head from "next/head";
import { Image, Space } from "antd";
import Typography from "@namia/typography";
import { ElementWrapper } from "../../styles/styles";

const KickerColumn = (props) => {
  const {title, text} = props;
  return (
    <ElementWrapper>
      <Space size="middle" direction="vertical">
        <Image src="https://via.placeholder.com/1920x1080/eee?text=16:9" />
        <Typography elementType="h4" size="2" type="regular" weight="600">
          {title}
        </Typography>
      </Space>
      <Space size="small" direction="vertical">
        <Typography elementType="p" size="1" type="regular">
          {text}
        </Typography>
      </Space>
    </ElementWrapper>
  );
};

export default KickerColumn;
