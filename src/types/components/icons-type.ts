import { THeroIcons } from "../custom/icon/hero-icons";
import { TSvgIcons } from "../custom/icon/svg-icons";

export type TIcons = string | TSvgIcons | THeroIcons;

export type TIconsSize =
  | null
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12"
  | "15"
  | "20";
