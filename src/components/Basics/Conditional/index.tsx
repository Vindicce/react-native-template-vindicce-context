import * as React from 'react';
import {Children} from 'react';

import {IConditional} from './data';

export const Conditional = ({children, render}: IConditional) => {
  const [first, second] = Children.toArray(children);
  return <>{render ? first : second ? second : <></>}</>;
};
