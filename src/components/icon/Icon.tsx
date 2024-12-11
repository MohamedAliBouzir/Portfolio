import { forwardRef, memo } from "react";
import * as SvgIcon from "./svg-icons";
import * as Hero from "./hero-icons";
import classNames from "classnames";
import PropTypes from "prop-types";
import pascalcase from "pascalcase";
import {
  IIconProps,
  IRefWrapperProps,
} from "../../interfaces/components/icon-interface";

const SvgIcons: Record<string, React.FC<any>> = SvgIcon;
const HeroIcons: Record<string, React.FC<any>> = Hero;

const RefWrapper = forwardRef<HTMLSpanElement, IRefWrapperProps>(
  ({ children }, ref) => {
    return ref ? (
      <span ref={ref} data-only-ref="true">
        {children}
      </span>
    ) : (
      children
    );
  }
);

const Icon = forwardRef<HTMLSpanElement, IIconProps>(
  (
    {
      icon,
      className = undefined,
      color = undefined,
      size = null,
      forceFamily = null,
      ...props
    },
    ref
  ) => {
    const IconName = pascalcase(icon); // Converts the icon name to PascalCase
    console.log("Looking for icon:", IconName); // Log the name we are looking for

    const SvgIconWrapper = SvgIcons[IconName];
    const HeroWrapper = HeroIcons[IconName];

    const iconClassName = classNames(
      "inline-block",
      `w-${size ? size : 6}`,
      `h-${size ? size : 6}`,
      `text-white`,
      className
    );

    if (!SvgIconWrapper && !HeroWrapper) {
      console.warn(`Icon "${IconName}" not found!`); // Log if the icon is not found
    }

    const isForceCustom = forceFamily === "custom";
    const isForceHero = forceFamily === "hero";

    if (
      isForceCustom ||
      (!isForceHero && typeof SvgIconWrapper === "function")
    ) {
      return (
        <RefWrapper ref={ref}>
          <SvgIconWrapper
            data-name={`SvgIcon--${IconName}`}
            className={classNames("svg-icon--custom", iconClassName)}
            {...props}
          />
        </RefWrapper>
      );
    }

    if (isForceHero || (!isForceCustom && typeof HeroWrapper === "function")) {
      return (
        <RefWrapper ref={ref}>
          <HeroWrapper
            data-name={`hero--${IconName}`}
            className={classNames("svg-icon--hero", iconClassName)}
            {...props}
          />
        </RefWrapper>
      );
    }

    return null;
  }
);

Icon.displayName = "Icon";
Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    null,
    "primary",
    "secondary",
    "success",
    "info",
    "warning",
    "danger",
  ]),
  size: PropTypes.oneOf([
    null,
    "sm",
    "md",
    "lg",
    "2x",
    "3x",
    "4x",
    "5x",
    "6x",
    "7x",
    "8x",
    "9x",
    "10x",
  ]),
  forceFamily: PropTypes.oneOf([null, "custom", "hero"]),
};

export default memo(Icon);
