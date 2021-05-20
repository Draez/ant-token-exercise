import React from "react";
import { Col, Row, Space } from "antd";
import Typography from "@namia/typography";
import useImage from "../../hooks/useImage";
import { ElementWrapper } from "../../styles/styles";
import Image from "../Image";

const KickerColumn = props => {
  const { horizontal, title, text, imageId } = props;
  if (horizontal) {
    return (
      <Row gutter={16}>
        <Col xs={24} md={24} xl={12}>
          <Image width={"100%"} height={148} id={imageId} />
        </Col>
        <Col xs={24} md={24} xl={12}>
          <Space size="small" direction="vertical">
            <Typography elementType="h4" size="2" type="regular" weight="600">
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
                Urheilu
              </Typography>
              <Typography elementType="p" size="1" type="roboto" uppercase>
                {text}
              </Typography>
            </Space>
          </Space>
        </Col>
      </Row>
    );
  }
  return (
    <ElementWrapper>
      <Space size="middle" direction="vertical" style={{ width: "100%" }}>
        <Image
          width={"100%"}
          height={168}
          loadingBlurHash="LE94sH2B$6FGjuWosVJkE{sVwyWo"
        />
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

KickerColumn.defaultProps = {
  imageId: 1,
  horizontal: false
};

export default KickerColumn;
