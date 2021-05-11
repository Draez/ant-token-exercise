import React from "react";
import StyledButton from "./styles";

const Button = props => {
  const { children, ...buttonProps } = props;
  return <StyledButton {...buttonProps}>{children}</StyledButton>;
};

Button.defaultProps = {
  block: false,
  children: null,
  danger: false,
  disabled: false,
  loading: false,
  shape: "",
  type: "default"
};

export default Button;
