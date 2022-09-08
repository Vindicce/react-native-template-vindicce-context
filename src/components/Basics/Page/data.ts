import {IWrappedSystem} from '~/utils';

export interface IPage extends Omit<IWrappedSystem, 'onPress'> {}
export interface IPageLayout extends IPage {}
