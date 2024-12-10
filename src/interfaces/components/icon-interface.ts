import { HTMLAttributes, ReactNode } from "react";
import { TIcons, TIconsSize } from "../../types/components/icons-type";
import { TColor } from "../../types/custom/color-type";

export interface IRefWrapperProps extends Record<string, any> {
  children: ReactNode;
}

export interface IIconProps extends HTMLAttributes<HTMLSpanElement> {
  icon?: TIcons;
  className?: string;
  color?: TColor;
  size?: TIconsSize;
  forceFamily?: null | 'custom' | 'hero';
}
