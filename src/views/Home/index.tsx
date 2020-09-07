import React from 'react';
import data from './data';
import Layout from './Layout';

const Home: React.FC = props => {
  return <Layout {...props} data={data} open={open} />;
};

export default Home;
