import React from "react";
import StyledAlert from "./styles";

const Alert = props => <StyledAlert {...props} />;

Alert.defaultProps = {
  closable: false,
  description: "",
  showIcon: false,
  type: "info"
};
export default Alert;
