import React from 'react';
import { External } from '../../../components';
import C from './styles';

interface IHome {
  data: any;
}

const Home: React.FC<IHome> = ({ data }) => (
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
      </C.Informations>
    </C.Container>
  </External>
);

export default Home;
