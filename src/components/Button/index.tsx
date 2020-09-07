import React from 'react';
import data from './data';
import Layout from './Layout';
import DefaultModal from '../DefaultModal';

const Button: React.FC = props => (
  <DefaultModal duration={400}>
    <Layout {...props} data={data} />
  </DefaultModal>
);

export default Button;
