import React, { useState } from "react";
import Image from "next/image";
import { Menu, Row, Tooltip, Col, Space } from "antd";
import { AppstoreOutlined, MenuOutlined } from "@ant-design/icons";
import { Button } from "../AntComponents";
import Login from "../Login";

const MenuComponent = () => {
  const [current, setCurrent] = useState({ current: "alueet" });
  const handleClick = e => {
    setCurrent({ current: e.key });
  };
  return (
    <Menu
      onClick={handleClick}
      // selectedKeys={[current]}
      style={{ padding: "10px" }}
      mode="horizontal"
      triggerSubMenuAction="click"
    >
      <Row align="middle" justify="center">
        <Col xs={2} lg={4}>
          <Row align="middle" justify="space-between">
            <Col md={24} lg={6}>
              <MenuOutlined />
            </Col>
            <Col xs={0} lg={18}>
              <Space>
                <Tooltip placement="bottom" title="Alueuutiset">
                  <Button type="ghost">Alueet</Button>
                </Tooltip>
                <Tooltip placement="bottom" title={"På Svenska"}>
                  <Button type="ghost">Arbetarbladet</Button>
                </Tooltip>
              </Space>
            </Col>
          </Row>
        </Col>
        <Col xs={22} lg={12}>
          <Row align="middle" justify="center">
            <Image width={200} height={28} src="/demokraatti.svg" />
          </Row>
        </Col>
        <Col xs={0} lg={4}>
          <Space>
            <Login />
            <Button type="primary">Tilaa lehti</Button>
          </Space>
        </Col>
      </Row>
    </Menu>
  );
};

export default MenuComponent;
