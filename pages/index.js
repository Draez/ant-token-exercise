import Head from "next/head";
import { Image, Divider, Grid, Row, Space, Col } from "antd";
import Typography from "@namia/typography";
import styles from "../styles/Home.module.css";
import { Container, ElementWrapper } from "../styles/styles";
import Kicker from "../components/Kicker";
import KickerRow from "../components/KickerRow";
import MainImage from "../components/MainImage";
import KickerColumn from "../components/KickerColumn";
import ListOne from "../components/ListOne";
import { ROW_GUTTER } from "../configs/constants";

export default function Home() {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const { md } = screens;
  return (
    <>
      <Head>
        <title>Namia + ant.design</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Row gutter={[ROW_GUTTER]} justify="center">
          <Col xs={24} md={6} order={md ? 0 : 1}>
            <Space size="large" direction="vertical">
              <KickerColumn title="Kicker column 01" text="Paragraph text" />
              <KickerColumn title="Kicker column 02" text="Paragraph text" />
            </Space>
            <Divider type="vertical" style={{ width: "100%" }} />
          </Col>
          <Col xs={24} md={10} order={0}>
            <Space size="large" direction="vertical">
              <Kicker title="Kicker 01" text="Paragraph text" />
            </Space>
            <Divider
              type="vertical"
              direction="vertical"
              style={{ width: "100%" }}
            />
          </Col>
          <Col xs={24} md={6} order={2}>
            <ListOne title="List01a" text="Paragraph text" />
            <ListOne title="List02a" text="Paragraph text" />
            <ListOne title="List03a" text="Paragraph text" />
            <ListOne title="List04a" text="Paragraph text" />
            <ListOne title="List05a" text="Paragraph text" />
          </Col>
          <Col xs={24} order={2}>
            <Divider />
          </Col>
          <Col xs={24} md={10} order={2}>
            <MainImage title="Paragraph text" />
          </Col>
          <Col xs={24} order={2}>
            <Divider />
            <Space size="large" direction="vertical">
              <Row gutter={[{ xs: 8, sm: 16, md: 32, lg: 48 }]}>
                <Col xs={12} md={6}>
                  <KickerColumn title="Kicker 02a" text="Paragraph text" />
                </Col>
                <Col xs={12} md={6}>
                  <KickerColumn title="Kicker 02b" text="Paragraph text" />
                </Col>
                <Col xs={12} md={6}>
                  <KickerColumn title="Kicker 02c" text="Paragraph text" />
                </Col>
                <Col xs={12} md={6}>
                  <KickerColumn title="Kicker 02d" text="Paragraph text" />
                </Col>
              </Row>

              <Row gutter={[{ xs: 8, sm: 16, md: 32, lg: 48 }]}>
                <Col xs={24} md={12}>
                  <KickerRow title="Kicker 03" text="Paragraph text" />
                </Col>
                <Col xs={24} md={6}>
                  <ListOne title="Kicker04a" text="Paragraph text" />
                  <ListOne title="Kicker04b" text="Paragraph text" />
                </Col>
                <Col xs={24} md={6}>
                  <ListOne title="Kicker04c" text="Paragraph text" />
                  <ListOne title="Kicker04d" text="Paragraph text" />
                </Col>
              </Row>
            </Space>
          </Col>
          <Col xs={24} order={2}>
            <Divider />
          </Col>
        </Row>
      </Container>
    </>
  );
}
