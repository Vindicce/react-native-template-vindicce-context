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

export interface ICard
  extends BorderProps,
    BoxShadowProps,
    ColorProps,
    FlexboxProps,
    SpaceProps,
    TypographyProps,
    BackgroundColorProps,
    LayoutProps {
  center?: boolean;
  onPress?(): void;
}

export interface ICardLayout extends ICard {}
