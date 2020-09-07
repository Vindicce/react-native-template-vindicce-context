import React from 'react';
import C from './styles';

interface ExternalProps {
  children?: React.ReactNode;
  data: any;
}

const External: React.FC<ExternalProps> = ({ children }) => (
  <C.KeyboardAvoidingView>
    <C.Container>{children}</C.Container>
  </C.KeyboardAvoidingView>
);

export default External;
