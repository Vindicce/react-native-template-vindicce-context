import React from 'react';
import C from './styles';

interface IButton {
  data: any;
}

const Button: React.FC<IButton> = ({ data }) => (
  <C.Container>
    <C.Text>{data.TEXT1}</C.Text>
  </C.Container>
);

export default Button;