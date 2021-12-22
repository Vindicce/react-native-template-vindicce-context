import styled from 'styled-components/native';
import LOGO from '../../../../assets/logoOrange.png';

export default {
  Image: styled.Image.attrs({
    resizeMode: 'contain',
    source: LOGO,
  })`
    width: 100%;
    height: 60px;
  `,
};
