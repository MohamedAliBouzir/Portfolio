import { forwardRef, memo } from "react";
import {
  IIconProps,
  IRefWrapperProps,
} from "../../interfaces/components/icon-interface";
import pascalcase from "pascalcase";
import * as SvgIcon from "./svg-icons";
import * as Hero from "./hero-icons";
import classNames from "classnames";
import PropTypes from "prop-types";

const SvgIcons: Record<string, React.FC<any>> = SvgIcon;
const HeroIcons: Record<string, React.FC<any>> = Hero;

const RefWrapper = forwardRef<HTMLSpanElement, IRefWrapperProps>(
  ({ children }, ref) => {
    if (ref) {
      return (
        <span ref={ref} data-only-ref="true">
          {children}
        </span>
      );
    }
    return children;
  }
);

RefWrapper.displayName = "RefWrapper";

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
    const IconName = pascalcase(icon);
    const SvgIconWrapper = SvgIcons[IconName];
    const HeroWrapper = HeroIcons[IconName];

    // Construct Tailwind-based classNames
    const iconClassName = classNames(
      "inline-block", // Ensure the icon is inline (important for spacing in text)
      {
        [`text-${color}`]: color, // Dynamic text color based on 'color' prop
        [`w-${size}`]: size, // Dynamic width based on 'size' prop
        [`h-${size}`]: size, // Dynamic height based on 'size' prop
      },
      className // Append any additional className from props
    );

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
            data-name={`hero--${icon}`}
            className={classNames("svg-icon--hero", iconClassName)}
            {...props}
          />
        </RefWrapper>
      );
    }

    return null;
  }
);

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

Icon.displayName = "Icon";

export default memo(Icon);
