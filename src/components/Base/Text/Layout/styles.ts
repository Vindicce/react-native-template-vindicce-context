import styled, { css } from 'styled-components/native';
import { Text as TextBase } from 'react-native';
import { ITextLayout } from '../data';
import { color, space, border, typography } from 'styled-system';
import { fonts, fontSizes, colors } from '../../../../styles/theme';

export default {
  Text: styled(TextBase)<ITextLayout>`
    ${space};
    ${color};
    ${typography};
    ${border};

    ${({ textTransform }) =>
      textTransform &&
      css`
        text-transform: ${textTransform};
      `}

    ${({ textDecoration }) =>
      textDecoration &&
      css`
        text-decoration: ${textDecoration};
      `}

    font-size: ${({ size }) => fontSizes[size || 'xsmall']};
    font-family: ${({ font }) => fonts[font as string] || 'Avenir'};
    color: ${({ color }) => colors[color as string]};
  `,
};
