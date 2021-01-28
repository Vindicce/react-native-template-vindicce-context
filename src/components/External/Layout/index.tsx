import React from 'react';
import C from './styles';

export const External: React.FC = ({ children }) => (
  <C.KeyboardAvoidingView>
    <C.Container>{children}</C.Container>
  </C.KeyboardAvoidingView>
);
