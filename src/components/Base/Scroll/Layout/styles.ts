import styled from 'styled-components/native';
import { IScrollLayout } from '../data';

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
  Scroll: styled.ScrollView<IScrollLayout>`
    ${space};
    ${color};
    ${typography};
    ${border};
    ${flexbox};
    ${boxShadow};
    ${backgroundColor};
  `,
};
