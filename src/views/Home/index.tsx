import * as React from 'react';
import { IHome, texts } from './data';
import { Home as Layout } from './Layout';

export const Home: React.FC<IHome> = props => {
  return <Layout {...props} data={texts} />;
};
