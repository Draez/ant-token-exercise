import styled from "@emotion/styled";
import { Input } from "antd";
import variables, { gray } from "../../../assets/design-tokens.json";

export const StyledInput = styled(Input)`
  border: none;
  border-bottom: 1px solid ${gray["gray-6"].value};
  font-family: Roboto, sans-serif;
  &:active,
  &:focus,
  &:hover {
    border: none;
    border-bottom: 1px solid ${variables["daybreak blue"]["blue-10"].value};
    box-shadow: none;
  }
`;

export const StyledPasswordInput = styled(Input.Password)`
  border: none;
  border-bottom: 1px solid ${gray["gray-6"].value};
  font-family: Roboto, sans-serif;
  &:active,
  &:focus,
  &:hover {
    border: none;
    border-bottom: 1px solid ${variables["daybreak blue"]["blue-10"].value};
    box-shadow: none;
  }
`;

export default StyledInput;
