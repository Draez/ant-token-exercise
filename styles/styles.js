import { css, Global } from "@emotion/react";
import styled from "@emotion/styled";

export const globalStyles = (
  <Global
    styles={css`
      * {
        box-sizing: border-box;
      }
      html,
      body {
        padding: 0;
        margin: 0;
        background: white;
        min-height: 100%;
      }
      h1,h2,h3,h4,h5,h6,p{
        color: #595959;
      }
    `}
  />
);

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  padding: 32px 14px;
`;

export const ElementWrapper = styled.div``;
