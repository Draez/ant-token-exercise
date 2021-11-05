import Head from "next/head";
import React, { useState } from "react";
import {
  Button,
  Divider,
  Grid,
  Typography as AntTypography,
  Row,
  Space,
  Col,
  Tabs
} from "antd";
import Typography from "@namia/typography";
import { Alert } from "../components/AntComponents";
import Ad from "../components/Ad";
import { ROW_GUTTER } from "../configs/constants";
import {
  Container,
} from "../styles/styles";

export default function Home() {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const [reloadLoading, toggleReloadLoading] = useState(false);
  const { md } = screens;
  return (
    <>
      <Head>
        <title>Namia + ant.design</title>
        <link rel="icon" href="/favicon.ico" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;900&display=swap');
          @import
          url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
        </style>
      </Head>
      <Alert
        closable
        message={
          <Typography elementType="h2" size="3" type="regular" weight={"900"}>
            Kestotilaukset nyt -20%
          </Typography>
        }
        type="info"
        description={
          <Typography elementType="p" size="2" type="roboto">
            Interactively monetize corporate alignments and fully tested niche
            markets.
          </Typography>
        }
      />
      <Ad />
      <Container>
        <Row gutter={[ROW_GUTTER]} justify="center">
         <Button type="primary">Test</Button>
        </Row>
      </Container>
    </>
  );
}
