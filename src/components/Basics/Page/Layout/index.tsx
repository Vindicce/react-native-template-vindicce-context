import * as React from 'react';
import {Platform, ScrollView} from 'react-native';
import {IPageLayout} from '../data';
import {Wrapped} from '../../Wrapped';
import * as C from './styles';

export const Page: React.FC<IPageLayout> = ({
  children,
  bg = 'white',
  ...props
}) => {
  return (
    <C.SafeAreaStyled bg={bg}>
      <C.KeyboardAvoidStyled
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          keyboardShouldPersistTaps={'handled'}
        >
          <Wrapped flexGrow={1} bg={bg} {...props}>
            {children}
          </Wrapped>
        </ScrollView>
      </C.KeyboardAvoidStyled>
    </C.SafeAreaStyled>
  );
};
