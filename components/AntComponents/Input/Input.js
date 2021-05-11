import React from "react";
import StyledInput, { StyledPasswordInput } from "./styles";

const InputComponent = props => <StyledInput {...props} />;

InputComponent.defaultProps = {
  addonAfter: null,
  addonBefore: null,
  allowClear: false,
  defaultValue: "",
  disabled: false,
  onPressEnter: () => {},
  prefix: null,
  size: "middle",
  suffix: null,
  type: "text"
};

export { StyledPasswordInput };

export default InputComponent;
