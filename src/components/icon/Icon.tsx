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
      "inline-block",
      `w-${size}`,
      `h-${size}`,
      `${icon === "Moon" && "text-moon"}`,
      `${icon === "Sun" && `text-sun`}`,
      className
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
    "primal",
    "secondary",
    "success",
    "info",
    "warning",
    "danger",
  ]),
  size: PropTypes.oneOf([
    null,
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "15",
    "20",
  ]),
  forceFamily: PropTypes.oneOf([null, "custom", "hero"]),
};

Icon.displayName = "Icon";

export default memo(Icon);
