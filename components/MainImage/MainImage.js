import Head from "next/head";
import { Image, Space } from "antd";
import Typography from "@namia/typography";
import { ElementWrapper } from "../../styles/styles";

const MainImage = (props) => {
  const {title} = props;
  return (
      <Space size="small" direction="vertical">
        <Typography
          elementType="p"
          size="1"
          type="regular"
        >
          {title}
        </Typography>
        <Image src="https://via.placeholder.com/1920x1080/eee?text=16:9" />
      </Space>
  );
};

export default MainImage;
