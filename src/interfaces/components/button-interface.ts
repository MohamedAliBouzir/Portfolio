import {
  HTMLAttributeAnchorTarget,
  HTMLAttributes,
  ReactElement,
  ReactNode,
} from "react";
import { TColor } from "../../types/custom/color-type";

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
  isActive?: boolean;
  color?: TColor | undefined;
  isOutline?: boolean;
  isLight?: boolean;
  isLink?: boolean;
  className?: string;
  size?: "sm" | "lg" | null;
  isDisable?: boolean;
  shadow?: boolean;
  hoverShadow?: null | "none" | "sm" | "default" | "lg";
  target?: HTMLAttributeAnchorTarget;
  isVisuallyHidden?: boolean;
  rounded?: "default" | 0 | 1 | 2 | 3 | null;
  onClick?(...args: unknown[]): unknown;
}
