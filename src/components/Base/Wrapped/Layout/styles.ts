import styled, { css } from 'styled-components/native';
import { IWrappedLayout } from '../data';
import { theme } from '../../../../styles/theme';

import {
  border,
  boxShadow,
  color,
  flexbox,
  space,
  typography,
  backgroundColor,
} from 'styled-system';

export default {
  Wrapped: styled.View<IWrappedLayout>`
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
        elevation: 5;
      `}

    ${({ borderRadius }) =>
      borderRadius &&
      css`
        border-radius: ${theme.radii[borderRadius as string] || 'Light'}px;
      `}

    ${({ center }) =>
      center &&
      css`
        align-items: center;
        justify-content: center;
      `}
  `,
};
