import React from "react";
import { Result as AntResult } from "antd";
import Typography from "@namia/typography";
import { ChildColorWrapper } from "../../styles/styles";

const Result = props => {
  const { children, subTitle, title, status, extra } = props;
  return (
    <AntResult
      subTitle={
        <ChildColorWrapper color="#868E96">
          <Typography elementType="p" size="1" type="roboto">
            {subTitle}
          </Typography>
        </ChildColorWrapper>
      }
      status={status}
      title={
        <Typography elementType="h2" size="4" type="roboto">
          {title}
        </Typography>
      }
      extra={extra}
    >
      {!!children && children}
    </AntResult>
  );
};

export default Result;
