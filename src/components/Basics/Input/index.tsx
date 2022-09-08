import * as React from 'react';
import {useRef} from 'react';
import {TextInput} from 'react-native';
import {mask as masker, unMask} from 'remask';

import {Input as Layout} from './Layout';

export const Input = (props: any) => {
  const textInputRef = useRef<TextInput>();

  var ref = {};

  if (props.label) {
    ref = {
      [`${props.label}`]: textInputRef,
    };
  }

  const {mask, value, onChange} = props;

  const handleValue = mask ? masker(value || '', mask) : value;

  const handleChange = (value: string) =>
    onChange && onChange(mask ? unMask(masker(value, mask), mask) : value);

  const layoutProps = {
    ...props,
    //@ts-ignore
    forwardRef: ref[props.label],
    handleValue,
    handleChange,
  };

  return <Layout {...layoutProps} />;
};
