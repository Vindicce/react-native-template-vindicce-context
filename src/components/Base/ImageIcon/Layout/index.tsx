import * as React from 'react';
import * as ICON from '@expo/vector-icons';

import { Wrapped } from '../../Wrapped';

import { colors } from '../../../../styles/theme';
import { IImageIconLayout } from '../data';

const Main = ({ lib, ...props }: IImageIconLayout) => {
  // @ts-ignore
  const Icon = ICON[lib];
  return <Icon {...props} />;
};

export const ImageIcon: React.FC<IImageIconLayout> = ({
  lib = 'AntDesign',
  size = 20,
  color = 'black',
  name = 'stepforward',
  ...props
}) => (
  <Wrapped {...props} testID={'Icon'}>
    <Main lib={lib} size={size} color={colors[color]} name={name} />
  </Wrapped>
);
