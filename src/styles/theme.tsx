import * as React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { metrics } from '../styles/metrics';
import { IStringMap, StringToNumberMap } from '../utils';

const { defaultSpace } = metrics;

export const space = [
  defaultSpace() / 2,
  defaultSpace(),
  defaultSpace(2),
  defaultSpace(3),
  defaultSpace(4),
  defaultSpace(5),
  defaultSpace(6),
  defaultSpace(7),
  defaultSpace(8),
  defaultSpace(9),
  defaultSpace(10),
  defaultSpace(11),
  defaultSpace(12),
];

export const fontSizes: IStringMap = {
  tiny: '12px',
  xsmall: '14px',
  small: '16px',
  default: '18px',
  big: '20px',
  large: '25px',
  xlarge: '34px',
};

export const colors: IStringMap = {
  WHITE: '#FFF',
  ORANGE: '#f37321',
  TEXT: '#171717',
  SUBLABEL: '#777777',
};

export const fonts: IStringMap = {};

export const radii: StringToNumberMap = {
  Light: defaultSpace() / 2,
  Medium: defaultSpace(),
  Circle: 100,
};

export const shadows: IStringMap = {
  cell: '0px 0px 8px rgba(0,0,0,0.12)',
};

export const theme = {
  space,
  fontSizes,
  colors,
  radii,
};

export const ThemeProvider: React.FC = ({ children }) => (
  <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
);
