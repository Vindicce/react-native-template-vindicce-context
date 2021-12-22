import * as React from 'react';

import { Wrapped, Page, Text } from '~/components';

import { IHomeLayout } from '../data';
import C from './styles';

export const Home: React.FC<IHomeLayout> = ({ data }) => (
  <Page bg="WHITE">
    <Wrapped flex={1} center>
      <C.Image />
      <Wrapped mt={4}>
        <Text textAlign="center" color="SUBLABEL" mb={4}>
          <Text>{data[0]}</Text>
          {data[1]}
        </Text>
        <Text color="SUBLABEL">{data[2]}</Text>
        <Text color="SUBLABEL">{data[3]}</Text>
        <Text color="SUBLABEL">{data[4]}</Text>
        <Text color="SUBLABEL">{data[5]}</Text>
        <Text color="SUBLABEL">{data[6]}</Text>
        <Text color="SUBLABEL">{data[7]}</Text>
      </Wrapped>
    </Wrapped>
  </Page>
);
