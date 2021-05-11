import Head from "next/head";
import { Divider, Grid, Row, Space, Col, Tabs } from "antd";
import Typography from "@namia/typography";
import styles from "../styles/Home.module.css";
import { Alert } from "../components/AntComponents";
import Kicker from "../components/Kicker";
import KickerRow from "../components/KickerRow";
import MainImage from "../components/MainImage";
import KickerColumn from "../components/KickerColumn";
import ListOne from "../components/ListOne";
import Menu from "../components/Menu";
import Ad from "../components/Ad";
import ButtonSelector from "../components/ButtonSelector";
import { ROW_GUTTER } from "../configs/constants";
import { Container, ElementWrapper, MarginWrapper } from "../styles/styles";

const { TabPane } = Tabs;

export default function Home() {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
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
      <Menu />
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
            <Tabs
              defaultActiveKey="1"
              onChange={key => {
                console.log("key: ", key);
              }}
            >
              <TabPane
                tab={
                  <Typography elementType="p" size="1" type="roboto">
                    Uusimmat
                  </Typography>
                }
                key="1"
              >
                <MarginWrapper>
                  <ButtonSelector />
                </MarginWrapper>
                <ListOne
                  title="Uusimmat 01a otsikko"
                  category="Urheilu"
                  date="10.5.2021"
                />
                <ListOne
                  title="Uusimmat 02a otsikko pitkä sellainen, jossa paljon kirjaimia"
                  category="Urheilu"
                  date="10.5.2021"
                />
                <ListOne
                  title="Uusimmat 03a otsikko"
                  category="Urheilu"
                  date="10.5.2021"
                />
                <ListOne
                  title="Uusimmat 04a otsikko vähän tekstiä lisää"
                  category="Urheilu"
                  date="10.5.2021"
                />
                <ListOne
                  title="Uusimmat 05a otsikko"
                  category="Urheilu"
                  date="10.5.2021"
                />
              </TabPane>
              <TabPane
                tab={
                  <Typography elementType="p" size="1" type="roboto">
                    Luetuimmat
                  </Typography>
                }
                key="2"
              >
                <MarginWrapper>
                  <ButtonSelector
                    buttonData={[
                      {
                        key: "1-hour",
                        title: "1h"
                      },
                      {
                        key: "24-hours",
                        title: "24h"
                      },
                      {
                        key: "7-days",
                        title: "7 päivää"
                      }
                    ]}
                  />
                </MarginWrapper>
                <ListOne
                  title="Luetuimmat 01a"
                  category="Urheilu"
                  date="10.5.2021"
                />
                <ListOne
                  title="Luetuimmat 02a"
                  category="Urheilu"
                  date="10.5.2021"
                />
                <ListOne
                  title="Luetuimmat 03a"
                  category="Urheilu"
                  date="10.5.2021"
                />
                <ListOne
                  title="Luetuimmat 04a"
                  category="Urheilu"
                  date="10.5.2021"
                />
                <ListOne
                  title="Luetuimmat 05a"
                  category="Urheilu"
                  date="10.5.2021"
                />
              </TabPane>
            </Tabs>
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
