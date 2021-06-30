export interface IImageIcon {
  data?: any;
  lib?: string;
  size?: number;
  color?: string;
  name: string;
  onPress?(): void;
}

export interface IImageIconLayout extends IImageIcon {}

export interface IIconDefine {}
