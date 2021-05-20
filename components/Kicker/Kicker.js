import React, { useCallback, useEffect, useState } from "react";
import Head from "next/head";
import { Blurhash } from "react-blurhash";
import { Button, Col, Grid, Row, Skeleton, Space } from "antd";
import Typography from "@namia/typography";
import Result from "../Result";
import Image from "../Image";
import { ChildColorWrapper, ElementWrapper } from "../../styles/styles";

const Kicker = props => {
  const { title, text, missingArticle } = props;
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const [reloadLoading, toggleReloadLoading] = useState(false);
  if (missingArticle) {
    return (
      <Result
        status="warning"
        title="Missing article"
        subTitle="Something went wrong and we couldn't fetch the article"
        extra={
          <Button
            type="primary"
            loading={reloadLoading}
            onClick={() => {
              toggleReloadLoading(true);
              setTimeout(function() {
                toggleReloadLoading(false);
              }, 2000);
            }}
          >
            <ChildColorWrapper color="#fff">
              <Typography elementType="p" size="1" type="roboto">
                {!reloadLoading && "Try to reload"}
              </Typography>
            </ChildColorWrapper>
          </Button>
        }
      />
    );
  }
  const { md } = screens;
  const padding = md ? "0 0 0 24px" : "0 0 0 14px";
  return (
    <ElementWrapper>
      <Space size="middle" direction="vertical" style={{ width: "100%" }}>
        <Image id={3} showSkeleton height={375} width="100%" />
        <Typography
          elementType="h2"
          size="5"
          type="regular"
          weight="600"
          padding={padding}
        >
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
