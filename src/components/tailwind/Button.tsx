import { forwardRef } from "react";
import { IButtonProps } from "../../interfaces/components/button-interface";
import classNames from "classnames";
import TagWrapper from "../TagWrapper";
import PropTypes from "prop-types";
import {
  btn,
  focusDesign,
  hoverDesign,
  hovershadowDesign,
  shadowDesign,
} from "../../styles/custom/_button";
import { Link } from "react-router-dom";
import Icon from "../icon/Icon";

const Button = forwardRef<HTMLAnchorElement, IButtonProps>(
  (
    {
      children = null,
      tag = "button",
      type = "button",
      to = undefined,
      href = undefined,
      color = undefined,
      isLight = false,
      isLink = false,
      isActive = false,
      className = undefined,
      icon = undefined,
      size = null,
      isDisable = false,
      shadow = undefined,
      hoverShadow = null,
      target = undefined,
      rounded = null,
      isVisuallyHidden = false,
      ...props
    },
    ref
  ) => {
    const BTN_CLASS = classNames(
      btn,
      className,
      typeof color === "string" &&
        (isLink
          ? `text-${color} hover:text-${color}-600 active:text-${color}-700`
          : `${hoverDesign(color, isLight, isActive)} ${focusDesign(color)}`),
      shadow &&
        typeof color === "string" &&
        !isLink &&
        `${shadowDesign(color)}`,
      typeof rounded !== "string" ? "rounded" : `rounded-${rounded}`,
      hoverShadow && typeof color === "string" && hovershadowDesign(color),
      isDisable && "cursor-not-allowed"
    );

    const disableProps = isDisable && {
      tabIndex: -1,
      "aria-disabled": true,
      disabled: true,
    };
    const INNER = (
      <>
        {icon && (
          <Icon
            icon={icon}
            className="w-[calc(var(--btn-font-size)*1px)] 
                       h-[calc(var(--btn-font-size)*1px)] 
                       mt-[-2px] 
                       mr-2 
                       sm:w-[calc(var(--btn-font-size-sm)*1px)] 
                       sm:h-[calc(var(--btn-font-size-sm)*1px)] 
                       lg:w-[calc(var(--btn-font-size-lg)*1px)] 
                       lg:h-[calc(var(--btn-font-size-lg)*1px)]"
          />
        )}
        {isVisuallyHidden ? (
          <span className="visually-hidden">Toggle Dropdown</span>
        ) : (
          children
        )}
      </>
    );
    if (tag === "a") {
      if (to) {
        return (
          <Link
            className={BTN_CLASS}
            to={to}
            target={target}
            rel="noopener"
            ref={ref}
            {...props}
            {...disableProps}
          >
            {INNER}
          </Link>
        );
      }
      return (
        <a
          ref={ref}
          className={BTN_CLASS}
          href={href}
          role="button"
          rel="noopener"
          target={target}
          {...props}
        >
          {INNER}
        </a>
      );
    }
    return (
      <TagWrapper
        ref={ref}
        tag={tag}
        type={type}
        className={BTN_CLASS}
        {...disableProps}
        {...props}
      >
        {INNER}
      </TagWrapper>
    );
  }
);

Button.displayName = "Button";
Button.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.oneOf(["button", "a", "input", "link"]),
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  to: PropTypes.string,
  href: PropTypes.string,
  color: PropTypes.oneOf([
    null,
    "primary",
    "secondary",
    "success",
    "info",
    "warning",
    "danger",
  ]),
  isLight: PropTypes.bool,
  isLink: PropTypes.bool,
  isActive: PropTypes.bool,
  className: PropTypes.string,
  icon: PropTypes.string,
  size: PropTypes.oneOf(["sm", "lg", null]),
  isDisable: PropTypes.bool,
  shadow: PropTypes.bool,
  hoverShadow: PropTypes.bool,
  target: PropTypes.oneOfType([
    PropTypes.oneOf(["_blank", "_self", "_parent", "_top"]),
    PropTypes.string,
  ]),
  isVisuallyHidden: PropTypes.bool,
  rounded: PropTypes.oneOf(["default", "sm", "lg", "full"]),
};

export default Button;
