import { THeroIcons } from "../custom/icon/hero-icons";
import { TSvgIcons } from "../custom/icon/svg-icons";

export type TIcons = string | TSvgIcons | THeroIcons;

export type TIconsSize =
  | null
  | "sm"
  | "md"
  | "lg"
  | "2x"
  | "3x"
  | "4x"
  | "5x"
  | "6x"
  | "7x"
  | "8x"
  | "9x"
  | "10x";
