import Head from "next/head";
import Image from "next/image";
import { Col, Row, Space } from "antd";
import Typography from "@namia/typography";
import { ROW_GUTTER } from "../../configs/constants";

const Ad = () => {
  return (
    <Row gutter={[ROW_GUTTER]} justify="center">
      <Col>
        <Space direction="vertical">
          <Typography
            elementType="p"
            size="1"
            type="roboto"
            padding="20px 0 0"
            uppercase
          >
            Mainos
          </Typography>
          <Image src="/mainos.png" width="980" height="400" />
        </Space>
      </Col>
    </Row>
  );
};

export default Ad;
