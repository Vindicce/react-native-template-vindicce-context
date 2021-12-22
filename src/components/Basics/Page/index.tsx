import * as React from 'react';
import { IPage } from './data';
import { Page as Layout } from './Layout';

export const Page: React.FC<IPage> = props => <Layout {...props} />;
