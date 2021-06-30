import {
  BorderProps,
  ColorProps,
  FontSizeProps,
  FontFamilyProps,
  FontWeightProps,
  FontStyleProps,
  SpaceProps,
  TypographyProps,
} from "styled-system";

export type IFont = "Regular" | "Light" | "Medium" | "Bold" | "Black";

export type IFontSize =
  | "tiny"
  | "xsmall"
  | "small"
  | "default"
  | "big"
  | "large"
  | "xlarge";
export interface IText
  extends BorderProps,
    ColorProps,
    FontSizeProps,
    FontFamilyProps,
    FontWeightProps,
    FontStyleProps,
    SpaceProps,
    TypographyProps {
  textTransform?: string;
  textDecoration?: string;
  font?: IFont;
  size?: IFontSize;
  testID?: string;
  numberOfLines?: number;
}

export interface ITextLayout extends IText {}
