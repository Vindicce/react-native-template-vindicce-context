import React from 'react';
import { IHomeLayout } from '../data';
import { External } from '../../../components';
import C from './styles';

export const Home: React.FC<IHomeLayout> = ({ data }) => (
  <External>
    <C.Container>
      <C.Logo>
        <C.Image />
      </C.Logo>
      <C.Informations>
        <C.InfoTitle>
          <C.InfoTitleBold>{data.TEXT1}</C.InfoTitleBold>
          {data.TEXT2}
        </C.InfoTitle>
        <C.Info>{data.TEXT3}</C.Info>
        <C.Info>{data.TEXT4}</C.Info>
        <C.Info>{data.TEXT5}</C.Info>
        <C.Info>{data.TEXT6}</C.Info>
        <C.Info>{data.TEXT7}</C.Info>
        <C.Info>{data.TEXT8}</C.Info>
      </C.Informations>
    </C.Container>
  </External>
)
