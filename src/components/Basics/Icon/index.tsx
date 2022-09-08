import * as React from 'react';
import {IIcon} from './data';
import {Icon as Layout} from './Layout';

export const Icon: React.FC<IIcon> = props => <Layout {...props} />;
