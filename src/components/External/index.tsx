import React from 'react';
import data from './data';
import Layout from './Layout';

const External: React.FC = props => <Layout {...props} data={data} />;

export default External;
