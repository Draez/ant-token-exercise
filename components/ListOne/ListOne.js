import React, { useEffect, useState } from "react";
import { Col, Divider, Row, Space, List } from "antd";
import Typography from "@namia/typography";
import Image from "../Image";
import { ElementWrapper } from "../../styles/styles";

const ListOne = props => {
  const { hash, imageId, data } = props;
  const [loading, toggleLoading] = useState(false);
  const [loaded, toggleLoaded] = useState(false);
  useEffect(() => {
    if (!loading && !loaded) {
      toggleLoading(true);
      toggleLoaded(true);
      setTimeout(function() {
        toggleLoading(false);
      }, 3500);
    }
  });
  return (
    <List
      itemLayout="horizontal"
      loading={loading}
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <Image
                size="thumb"
                crop={"rect=200,200,1800,1800"}
                height={62}
                width={62}
                id={item.imageId || imageId}
                loadingBlurHash={item.hash || hash}
              />
            }
            title={
              <Typography elementType="h5" size="2" type="regular" weight="600">
                {item.title}
              </Typography>
            }
            description={
              <Space>
                <Typography
                  elementType="p"
                  size="1"
                  type="roboto"
                  uppercase
                  weight="600"
                >
                  {item.category}
                </Typography>
                <Typography elementType="p" size="1" type="roboto" uppercase>
                  {item.date}
                </Typography>
              </Space>
            }
          />
        </List.Item>
      )}
    />
  );
  // return (
  //   <>
  //     <Row gutter={[{ xs: 8, sm: 16, md: 32, lg: 48 }]}>
  //       <Col xs={8}>
  //         <Row align="end" gutter={[{ xs: 8, sm: 8, md: 14 }]}>
  //           <Image src="https://via.placeholder.com/74x74/eee?text=1:1" />
  //         </Row>
  //       </Col>
  //       <Col xs={16}>
  //         <Space size="small" direction="vertical">
  //           <Typography elementType="h5" size="2" type="regular" weight="600">
  //             {title}
  //           </Typography>
  //           <Space>
  //             <Typography
  //               elementType="p"
  //               size="1"
  //               type="roboto"
  //               uppercase
  //               weight="600"
  //             >
  //               {category}
  //             </Typography>
  //             <Typography elementType="p" size="1" type="roboto" uppercase>
  //               {date}
  //             </Typography>
  //           </Space>
  //         </Space>
  //       </Col>
  //       <Divider />
  //     </Row>
  //   </>
  // );
};

ListOne.defaultProps = {
  hash: "LWDwUC+FJ.I?hLRPOZSiBrN{-9%1",
  imageId: 7
};
export default ListOne;
