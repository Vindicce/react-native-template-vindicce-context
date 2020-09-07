import React from 'react';
import data from './data';
import Layout from './Layout';

const Home: React.FC = props => {
  return <Layout {...props} data={data} />;
};

export default Home;
