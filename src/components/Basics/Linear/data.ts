import {
  BorderProps,
  BoxShadowProps,
  ColorProps,
  FlexboxProps,
  SpaceProps,
  TypographyProps,
  BackgroundColorProps,
  LayoutProps,
} from 'styled-system';

export interface ILinear
  extends BorderProps,
    BoxShadowProps,
    ColorProps,
    FlexboxProps,
    SpaceProps,
    TypographyProps,
    BackgroundColorProps,
    LayoutProps {
  testID?: string;
  center?: boolean;
  coin: string;
  onPress?(): void;
}

export interface ILinearLayout extends ILinear {}
