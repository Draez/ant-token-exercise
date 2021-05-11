import React, { useState } from "react";
import { Space } from "antd";
import { Button } from "../AntComponents";

const data = [
  {
    key: "kaikki",
    title: "Kaikki"
  },
  {
    key: "kulttuuri",
    title: "Kulttuuri"
  },
  {
    key: "d-analyysi",
    title: "D-analyysi"
  },
  {
    key: "extrat",
    title: "Extrat"
  }
];

const ButtonSelector = props => {
  const { buttonData = data } = props;
  const [current, setCurrent] = useState(buttonData[0].key);
  const handleClick = key => {
    setCurrent(key);
  };
  return (
    <Space>
      {buttonData.map(item => {
        const { key, title } = item;
        const type = key === current ? "primary" : "text";
        return (
          <Button
            size="small"
            shape="round"
            key={key}
            type={type}
            onClick={() => handleClick(key)}
          >
            {title}
          </Button>
        );
      })}
    </Space>
  );
};

export default ButtonSelector;
