import * as React from 'react';
import {TouchableOpacity} from 'react-native';

import {defineLinearColors} from '../../../../styles';

import {ILinearLayout} from '../data';
import C from './styles';

export const Linear: React.FC<ILinearLayout> = ({
  children,
  coin = 'BTC',
  ...props
}) => {
  const {color_1, color_2} = defineLinearColors(coin);

  const as = props.onPress && TouchableOpacity;

  return (
    // @ts-ignore
    <C.Wrapped
      {...{as}}
      {...props}
      colors={[color_1, color_2]}
      start={{x: 1, y: 0}}
      end={{x: 0, y: 1}}
    >
      {children}
    </C.Wrapped>
  );
};
