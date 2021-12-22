import * as React from 'react';
import { Platform } from 'react-native';
import { IPageLayout } from '../data';
import { Wrapped } from '../../Wrapped';
import * as C from './styles';

export const Page: React.FC<IPageLayout> = ({
  children,
  bg = 'white',
  ...props
}) => {
  return (
    <C.SafeAreaStyled bg={bg}>
      <C.KeyboardAvoidStyled
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Wrapped flex={1} bg={bg} {...props}>
          {children}
        </Wrapped>
      </C.KeyboardAvoidStyled>
    </C.SafeAreaStyled>
  );
};
