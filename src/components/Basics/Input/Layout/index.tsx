//@ts-nocheck
import * as React from 'react';

import {IInputLayout} from '~/components/Basics/Input/data';

import S from './styles';

export const Input = ({
  type,
  disabled,
  onChange,
  autoFocus,
  forwardRef,
  handleValue,
  handleChange,
  color = 'black',
  font = 'regular',
  size = 'h3',
  editable = true,
  ...props
}: IInputLayout) => {
  return (
    <S.Input
      {...props}
      ref={forwardRef}
      placeholderTextColor="#585858"
      font={font}
      autoFocus={autoFocus}
      color={'#141313'}
      size={size}
      value={handleValue}
      editable={!disabled}
      onChangeText={handleChange}
      returnKeyType={'next'}
      autoCapitalize="none"
      autoCompleteType="off"
      autoCorrect={false}
      editable={editable}
      keyboardType={type === 'number' ? 'numeric' : undefined}
      secureTextEntry={type === 'password'}
      opacity={disabled ? 0.5 : 1}
    />
  );
};
