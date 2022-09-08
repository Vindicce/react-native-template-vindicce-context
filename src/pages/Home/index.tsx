import * as React from 'react';
import {IHome, texts} from './data';
import {Home as Layout} from './Layout';

export const Home = (props: IHome) => {
  return <Layout {...props} data={texts} />;
};
