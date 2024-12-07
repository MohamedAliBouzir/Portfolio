import { forwardRef } from "react";
import { IButtonProps } from "../../interfaces/components/button-interface";
import classNames from "classnames";
import TagWrapper from "../TagWrapper";
import PropTypes from "prop-types";
import { btn, focusDesign, hoverDesign, hovershadowDesign, shadowDesign } from "../../styles/custom/_button";

const Button = forwardRef<HTMLAnchorElement, IButtonProps>(
  (
    {
      children = null,//done
      tag = "button",//done
      type = "button",//done
      to = undefined,
      href = undefined,//done
      color = undefined, //done
      isLight = false,
      isLink = false,
      className = undefined, //done
      size = null, //done
      isDisable = false, //done
      shadow = undefined, //done
      hoverShadow = null, //done
      target = undefined, //done
      rounded = null,//done
      isVisuallyHidden = false,//done
      ...props//done
    },
    ref
  ) => {
    const BTN_CLASS = classNames(
      btn,
      className,
      typeof color === "string" &&
        `bg-${color} ${hoverDesign(color)} ${focusDesign(color)} ${color === "secondary" ? "text-black" : "text-white"}`,
      shadow && typeof color === "string" && `${shadowDesign(color)}`,
      typeof rounded === 'string' ? "rounded" : `rounded-${rounded}`,
      hoverShadow && typeof color === "string" && hovershadowDesign(color),
      isDisable && "cursor-not-allowed",
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
  className: PropTypes.string,
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
