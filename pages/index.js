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
import { InfoCircleFilled } from "@ant-design/icons";
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
import Result from "../components/Result";
import { ROW_GUTTER } from "../configs/constants";
import {
  Container,
  ElementWrapper,
  MarginWrapper,
  ChildColorWrapper
} from "../styles/styles";

const { TabPane } = Tabs;
const { Paragraph } = AntTypography;

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
      <Menu />
      <Container>
        <Row gutter={[ROW_GUTTER]} justify="center">
          <Col xs={24} md={6} order={md ? 0 : 1}>
            <Space size="large" direction="vertical" style={{ width: "100%" }}>
              <KickerColumn title="Kicker column 01" text="Paragraph text" />
              <KickerColumn title="Kicker column 02" text="Paragraph text" />
            </Space>
            <Divider type="vertical" style={{ width: "100%" }} />
          </Col>
          <Col xs={24} md={10} order={0}>
            <Kicker missingArticle title="Kicker 01" text="Paragraph text" />
            <Divider />
            <KickerColumn
              title="Kelan korvaamien sairauspoissaolojen määrä kääntyi laskuun"
              text="12.12.2020"
              horizontal
              imageId={6}
            />
            <Divider />
            <KickerColumn
              title="Suomen Pankki huolissaan kotitalouksien velkaantumisesta – vaatii velkakattoa ja asuntolainojen pituusrajoitusta"
              text="16.04.2021"
              imageId={5}
              horizontal
            />
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
                  data={[
                    {
                      title: "Uusimmat 01a otsikko",
                      category: "Urheilu",
                      date: "10.5.2021"
                    },
                    {
                      title:
                        "Uusimmat 02a otsikko pitkä sellainen, jossa paljon kirjaimia",
                      category: "Urheilu",
                      date: "10.5.2021"
                    },
                    {
                      title: "Uusimmat 03a otsikko",
                      category: "Urheilu",
                      date: "10.5.2021"
                    },
                    {
                      title: "Uusimmat 04a otsikko vähän tekstiä lisää",
                      category: "Urheilu",
                      date: "10.5.2021"
                    },
                    {
                      title: "Uusimmat 05a otsikko",
                      category: "Urheilu",
                      date: "10.5.2021"
                    }
                  ]}
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
                  data={[
                    {
                      title: "Luetuimmat 01a otsikko",
                      category: "Urheilu",
                      date: "10.5.2021",
                      hash: "L19@P200IT-;01?b~qM|019Fs+9F",
                      imageId: 8
                    },
                    {
                      title:
                        "Luetuimmat 02a otsikko pitkä sellainen, jossa paljon kirjaimia",
                      category: "Urheilu",
                      date: "10.5.2021",
                      hash: "L19@P200IT-;01?b~qM|019Fs+9F",
                      imageId: 8
                    },
                    {
                      title: "Luetuimmat 03a otsikko",
                      category: "Urheilu",
                      date: "10.5.2021",
                      hash: "L19@P200IT-;01?b~qM|019Fs+9F",
                      imageId: 8
                    },
                    {
                      title: "Luetuimmat 04a otsikko vähän tekstiä lisää",
                      category: "Urheilu",
                      date: "10.5.2021",
                      hash: "L19@P200IT-;01?b~qM|019Fs+9F",
                      imageId: 8
                    },
                    {
                      title: "Luetuimmat 05a otsikko",
                      category: "Urheilu",
                      date: "10.5.2021",
                      hash: "L19@P200IT-;01?b~qM|019Fs+9F",
                      imageId: 8
                    }
                  ]}
                />
              </TabPane>
            </Tabs>
          </Col>
          <Col xs={24} order={2}>
            <Divider />
          </Col>
          <Col xs={24} order={2}>
            {/* <MainImage title="Paragraph text" /> */}
            <Ad />
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
                  <ListOne
                    data={[
                      {
                        title: "Kicker04a",
                        text: "Paragraph text",
                        category: "Kulttuuri",
                        date: "13.5.2021",
                        imageId: 4
                      },
                      {
                        title: "Kicker04a two",
                        text: "Paragraph text 2",
                        category: "Kulttuuri",
                        date: "13.5.2021",
                        imageId: 3,
                        hash: "LyEf~JjY4TWB%LozM{WBWXaes:of"
                      }
                    ]}
                  />
                </Col>
                <Col xs={24} md={6}>
                  <ListOne
                    data={[
                      {
                        title: "Kicker04c",
                        category: "Politiikka",
                        date: "13.6.2021",
                        imageId: 2,
                        hash: "LB8Ggrys0:NMBZW;,+s,9IaextbH"
                      },
                      {
                        title: "Kicker04d",
                        category: "Kotimaa",
                        date: "13.5.2021",
                        imageId: 6,
                        hash: "LFDSO8~WRjadEN-pxZjYRkIps:xZ"
                      }
                    ]}
                  />
                </Col>
              </Row>
            </Space>
          </Col>
          <Col xs={24} md={12} order={2}>
            <Divider />
            <Result
              status="error"
              title="Error"
              subTitle="Objectively scale orthogonal collaboration and idea-sharing after enterprise-wide manufactured products. Compellingly strategize high-quality niche markets through sustainable."
              extra={[
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
              ]}
            >
              <Paragraph>
                <Typography
                  elementType="h4"
                  size="2"
                  type="regular"
                  weight="900"
                >
                  This may be due to your outdated browser
                </Typography>
              </Paragraph>
              <Paragraph>
                <Typography elementType="p" size="2" type="roboto">
                  <InfoCircleFilled style={{ color: "#55A0FC" }} /> You can
                  update your browser here <a>Update Google Chrome &gt;</a>
                </Typography>
              </Paragraph>
            </Result>
          </Col>
        </Row>
      </Container>
    </>
  );
}
