import * as React from 'react';
import { IHomeLayout } from '../data';
import C from './styles';

export const Home: React.FC<IHomeLayout> = ({ data }) => (
  <C.Container>
    <C.Logo>
      <C.Image />
    </C.Logo>
    <C.Informations>
      <C.InfoTitle>
        <C.InfoTitleBold>{data[0]}</C.InfoTitleBold>
        {data[1]}
      </C.InfoTitle>
      <C.Info>{data[2]}</C.Info>
      <C.Info>{data[3]}</C.Info>
      <C.Info>{data[4]}</C.Info>
      <C.Info>{data[5]}</C.Info>
      <C.Info>{data[6]}</C.Info>
      <C.Info>{data[7]}</C.Info>
    </C.Informations>
  </C.Container>
);
