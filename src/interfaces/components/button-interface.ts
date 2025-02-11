import {
  HTMLAttributeAnchorTarget,
  HTMLAttributes,
  ReactElement,
  ReactNode,
} from "react";
import { TColor } from "../../types/custom/color-type";
import { TIcons, TIconsSize } from "../../types/components/icons-type";

export interface IButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement<IButtonProps>[] | JSX.Element | JSX.Element[];
  className?: string;
  size?: "sm" | "lg" | null;
  ariaLabel?: string;
}

export interface IButtonProps
  extends HTMLAttributes<
    HTMLButtonElement | HTMLAnchorElement | HTMLInputElement | HTMLLinkElement
  > {
  children?: ReactNode;
  tag?: "button" | "a" | "input" | "link";
  type?: "button" | "submit" | "reset";
  to?: string | undefined;
  href?: string | undefined;
  color?: TColor | undefined;
  isLight?: boolean;
  isLink?: boolean;
  isActive?: boolean;
  className?: string;
  icon?: TIcons;
  iconSize?: TIconsSize;
  size?: "sm" | "lg" | null;
  isDisable?: boolean;
  shadow?: boolean;
  hoverShadow?: boolean;
  target?: HTMLAttributeAnchorTarget;
  isVisuallyHidden?: boolean;
  rounded?: "default" | "lg" | "2xl" | "full";
  onClick?(...args: unknown[]): unknown;
}
