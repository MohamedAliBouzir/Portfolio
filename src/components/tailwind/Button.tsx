import { forwardRef } from "react";
import { IButtonProps } from "../../interfaces/components/button-interface";
import classNames from "classnames";
import TagWrapper from "../TagWrapper";
import PropTypes, { string } from "prop-types";
import { btn } from "../../styles/custom/_button";

const Button = forwardRef<HTMLAnchorElement, IButtonProps>(
  (
    {
      children = null,
      tag = "button",
      type = "button",
      to = undefined,
      href = undefined,
      isActive = false,
      color = undefined,
      isOutline = false,
      isLight = false,
      isLink = false,
      className = undefined,
      size = null,
      isDisable = false,
      shadow = null,
      hoverShadow = null,
      target = undefined,
      isVisuallyHidden = false,
      ...props
    },
    ref
  ) => {
    const BTN_CLASS = classNames(
      btn,
      className,
      typeof color === "string" && `bg-${color} text-white`
    );
    const ANCHOR_LINK_PATTERN = /^#/i;
    const disableProps = isDisable && {
      tabIndex: -1,
      "aria-disabled": true,
      disabled: true,
    };
    const INNER = (
      <>
        {isVisuallyHidden ? (
          <span className="visually-hidden">Toggle Dropdown</span>
        ) : (
          children
        )}
      </>
    );
    if (tag === "a") {
      if (typeof to === "string" && ANCHOR_LINK_PATTERN.test(to)) {
        return <div>{INNER}</div>;
      }
      if (to) {
        return <div>{INNER}</div>;
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
  isActive: PropTypes.bool,
  color: PropTypes.oneOf([
    null,
    "primary",
    "secondary",
    "success",
    "info",
    "warning",
    "danger",
  ]),
  isOutline: PropTypes.bool,
  isLight: PropTypes.bool,
  isLink: PropTypes.bool,
  className: PropTypes.string,
  size: PropTypes.oneOf(["sm", "lg", null]),
  isDisable: PropTypes.bool,
  shadow: PropTypes.oneOf([null, "none", "sm", "default", "lg"]),
  hoverShadow: PropTypes.oneOf([null, "none", "sm", "default", "lg"]),
  target: PropTypes.oneOfType([
    PropTypes.oneOf(["_blank", "_self", "_parent", "_top"]),
    PropTypes.string,
  ]),
  isVisuallyHidden: PropTypes.bool,
};

export default Button;
