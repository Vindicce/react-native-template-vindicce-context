export interface IIcon {
  data?: any;
  lib?: string;
  size?: number;
  color?: string;
  name: string;
  onPress?(): void;
}

export interface IIconLayout extends IIcon {}

export interface IIconDefine {}
