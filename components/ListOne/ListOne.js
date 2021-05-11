import Head from "next/head";
import { Col, Divider, Image, Row, Space } from "antd";
import Typography from "@namia/typography";
import { ElementWrapper } from "../../styles/styles";

const ListOne = props => {
  const { title, category, date } = props;
  return (
    <>
      <Row gutter={[{ xs: 8, sm: 16, md: 32, lg: 48 }]}>
        <Col xs={8}>
          <Row align="end" gutter={[{ xs: 8, sm: 8, md: 14 }]}>
            <Image src="https://via.placeholder.com/74x74/eee?text=1:1" />
          </Row>
        </Col>
        <Col xs={16}>
          <Space size="small" direction="vertical">
            <Typography elementType="h5" size="2" type="regular" weight="600">
              {title}
            </Typography>
            <Space>
              <Typography
                elementType="p"
                size="1"
                type="roboto"
                uppercase
                weight="600"
              >
                {category}
              </Typography>
              <Typography elementType="p" size="1" type="roboto" uppercase>
                {date}
              </Typography>
            </Space>
          </Space>
        </Col>
        <Divider />
      </Row>
    </>
  );
};

export default ListOne;
