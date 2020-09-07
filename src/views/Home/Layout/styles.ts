import styled from 'styled-components/native';
import LOGO from '../../../../assets/logoOrange.png';

export default {
  Container: styled.View`
    flex: 1;
    background: #fff;
  `,
  Logo: styled.View`
    margin-top: 100px;
    align-content: center;
  `,
  Image: styled.Image.attrs({
    resizeMode: 'contain',
    source: LOGO,
  })`
    width: 100%;
    height: 60px;
  `,
  Informations: styled.View`
    flex: 1;
    margin-top: 100px;
    padding: 20px;
  `,
  InfoTitle: styled.Text`
    font-family: Avenir;
    font-size: 18px;
    text-align: center;
    margin-bottom: 20px;
    color: #777;
  `,
  InfoTitleBold: styled.Text`
    font-family: Avenir;
    font-size: 18px;
    text-align: center;
    margin-bottom: 20px;
    color: #000;
  `,
  Info: styled.Text`
    font-family: Avenir;
    text-align: left;
    margin-bottom: 8px;
    color: #777;
  `,
};
