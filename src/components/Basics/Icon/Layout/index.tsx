import * as React from 'react';
import * as ICON from '@expo/vector-icons';

import { Wrapped } from '../../Wrapped';

import { colors } from '../../../../styles/theme';
import { IIconLayout } from '../data';

const Main = ({ lib, ...props }: IIconLayout) => {
  // @ts-ignore
  const Icon = ICON[lib];
  return <Icon {...props} />;
};

export const Icon: React.FC<IIconLayout> = ({
  lib = 'AntDesign',
  size = 20,
  color = 'black',
  name = 'stepforward',
  ...props
}) => (
  <Wrapped {...props} testID={'Icon'}>
    <Main lib={lib} size={size} color={colors[color] || color} name={name} />
  </Wrapped>
);
