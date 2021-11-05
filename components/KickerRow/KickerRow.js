import Head from "next/head";
import { Col, Grid, Image, Row, Space } from "antd";
import Typography from "@namia/typography";
// import { ElementWrapper } from "../../styles/styles";

const KickerRow = props => {
  const { title, text } = props;
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const { md } = screens;
  return (
    <Row gutter={[{ xs: 8, sm: 16, md: 32, lg: 48 }]}>
      <Col xs={24} md={12} order={md ? 1 : 2}>
        <Space size="small" direction="vertical">
          <Typography elementType="h4" size="4" type="regular" weight="600">
            {title} demo
          </Typography>
          <Typography elementType="p" size="1" type="regular">
            {text}
          </Typography>
        </Space>
      </Col>
      <Col xs={24} md={12} order={md ? 2 : 1}>
        <Space size="small" direction="horizontal">
          <Image src="https://via.placeholder.com/1920x1080/eee?text=16:9" />
        </Space>
      </Col>
    </Row>
  );
};

export default KickerRow;
