import Head from "next/head";
import { Space } from "antd";
import Typography from "@namia/typography";
import Image from "../Image";
import { ElementWrapper } from "../../styles/styles";

const MainImage = props => {
  const { title } = props;
  return (
    <Space size="small" direction="vertical" style={{ width: "100%" }}>
      <Typography elementType="p" size="1" type="regular">
        {title}
      </Typography>
      <Image id={3} height={375} width="100%" />
    </Space>
  );
};

export default MainImage;
