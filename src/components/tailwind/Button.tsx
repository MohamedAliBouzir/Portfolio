import { forwardRef } from "react";
import { IButtonProps } from "../../interfaces/components/button-interface";
import classNames from "classnames";
import TagWrapper from "../TagWrapper";
import PropTypes from "prop-types";
import {
  btn,
  btnColorDesign,
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
      color = "primal",
      isLight = false,
      isLink = false,
      isActive = false,
      className = undefined,
      icon = undefined,
      size = null,
      iconSize = "5",
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
      !isLink && `${btnColorDesign(color, isLight, isActive)}`,
      !isLink && shadow && `${shadowDesign(color)}`,
      !isLink && hoverShadow && `${hovershadowDesign(color)}`,
      typeof rounded === "string" && `rounded-${rounded}`,
      isDisable && "cursor-not-allowed"
    );

    const disableProps = isDisable && {
      tabIndex: -1,
      "aria-disabled": true,
      disabled: true,
    };
    const INNER = (
      <>
        {icon && <Icon icon={icon} size={iconSize} />}
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
    "primal",
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
  iconSize: PropTypes.oneOf([
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
  isDisable: PropTypes.bool,
  shadow: PropTypes.bool,
  hoverShadow: PropTypes.bool,
  target: PropTypes.oneOfType([
    PropTypes.oneOf(["_blank", "_self", "_parent", "_top"]),
    PropTypes.string,
  ]),
  isVisuallyHidden: PropTypes.bool,
  rounded: PropTypes.oneOf(["default", "lg", "2xl", "full"]),
};

export default Button;
