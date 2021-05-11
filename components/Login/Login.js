import React, { useState } from "react";
import { Input as AntInput, Modal, Tooltip } from "antd";
import Typography from "@namia/typography";
import { Button, Input, PasswordInput } from "../AntComponents";

const Login = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Tooltip placement="bottom" title="Tilaajat">
        <Button type="ghost" onClick={showModal}>
          Kirjaudu
        </Button>
      </Tooltip>
      <Modal
        title="Kirjaudu"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            Ok
          </Button>
        ]}
      >
        <AntInput.Group>
          <Typography elementType="p" size="1" type="roboto" padding="0 0 8px">
            Sähköpostiosoitteesi
          </Typography>
          <Input size="large" placeholder="name@domain.com" />
          <Typography elementType="p" size="1" type="roboto" padding="10px 0">
            Rekisteröitymisen yhteydessä ilmoittamasi sähköposti
          </Typography>
        </AntInput.Group>
        <AntInput.Group>
          <Typography elementType="p" size="1" type="roboto" padding="0 0 8px">
            Sähköpostiosoitteesi
          </Typography>
          <PasswordInput size="large" placeholder="password" />
        </AntInput.Group>
      </Modal>
    </>
  );
};

export default Login;
