import * as React from 'react';
import {Children} from 'react';

import {Wrapped} from '~/components/Basics/Wrapped';

import ISpacing from './data';

export const Spacing = ({children, space}: ISpacing) => {
  const childrens = Children.toArray(children);
  return (
    <>
      {childrens.map((child, index) => (
        <Wrapped
          key={index}
          {...(index === childrens.length - 1 ? {} : {mb: space})}
        >
          {child}
        </Wrapped>
      ))}
    </>
  );
};
