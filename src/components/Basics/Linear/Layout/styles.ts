import styled, { css } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

import { ILinearLayout } from "../data";

import {
  border,
  boxShadow,
  color,
  flexbox,
  space,
  typography,
  backgroundColor,
} from "styled-system";

export default {
  Wrapped: styled(LinearGradient)<ILinearLayout>`
    ${space};
    ${color};
    ${typography};
    ${border};
    ${flexbox};
    ${boxShadow};
    ${backgroundColor};

    ${({ boxShadow: shadow }) =>
      shadow &&
      css`
        elevation: 3;
      `}

    ${({ center }) =>
      center &&
      css`
        align-items: center;
        justify-content: center;
      `}
  `,
};
