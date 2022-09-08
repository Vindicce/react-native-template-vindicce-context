import {
  BorderProps,
  BoxShadowProps,
  ColorProps,
  FlexboxProps,
  SpaceProps,
  TypographyProps,
  BackgroundColorProps,
  LayoutProps,
  BorderColorProps,
  FontSizeProps,
  FontFamilyProps,
  FontWeightProps,
  FontStyleProps,
} from 'styled-system';

export type withChildren<T = {}> = T & {children?: React.ReactNode};
export type StringToNumberMapcd = {[key: string]: number};
export type IModalType = {[key: string]: JSX.Element};
export type IInsets = {top: number; bottom: number};
export type IStringMap = {[key: string]: string};
export type StringToNumberMap = {[key: string]: number};

export type IFont = 'Regular' | 'Light' | 'Medium' | 'Bold' | 'Black';

export type IFontSize =
  | 'tiny'
  | 'xsmall'
  | 'small'
  | 'default'
  | 'big'
  | 'large'
  | 'xlarge';

export interface IWrappedSystem
  extends BorderProps,
    BoxShadowProps,
    ColorProps,
    FlexboxProps,
    SpaceProps,
    TypographyProps,
    BackgroundColorProps,
    BorderColorProps,
    LayoutProps,
    withChildren {
  testID?: string;
  center?: boolean;
  onPress?(): void;
  activeOpacity?: number;
}

export interface ITextSystem
  extends BorderProps,
    ColorProps,
    FontSizeProps,
    FontFamilyProps,
    FontWeightProps,
    FontStyleProps,
    SpaceProps,
    TypographyProps,
    withChildren {
  textTransform?: string;
  textDecoration?: string;
  font?: IFont;
  size?: IFontSize;
  testID?: string;
  numberOfLines?: number;
}
