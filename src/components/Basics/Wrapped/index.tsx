import * as React from 'react';
import { IWrapped } from './data';
import { Wrapped as Layout } from './Layout';

export const Wrapped: React.FC<IWrapped> = props => <Layout {...props} />;
