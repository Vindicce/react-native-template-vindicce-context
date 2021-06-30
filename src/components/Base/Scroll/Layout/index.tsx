import * as React from 'react';
import { IScrollLayout } from '../data';
import C from './styles';

export const Scroll: React.FC<IScrollLayout> = ({
  children,
  bg = 'white',
  ...props
}) => {
  return (
    <C.Scroll {...props} bg={bg} showsVerticalScrollIndicator={false}>
      {children}
    </C.Scroll>
  );
};
