import {
  BorderProps,
  BoxShadowProps,
  ColorProps,
  FlexboxProps,
  SpaceProps,
  TypographyProps,
  BackgroundColorProps,
  LayoutProps,
} from "styled-system";

export interface IModal
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
  hasBackdrop?: boolean;
  hasClosableButton?: boolean;
  avoidKeyboard?: boolean;
  type?: string;
}

export interface IModalLayout extends IModal {
  coin: string;
  closeModal(): void;
}
