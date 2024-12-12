import { forwardRef, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { containerFluid, pageWrapperLayout } from "../../../styles/components/layout/_pageWrapper";
import { IPageWrapperProps } from "../../../interfaces/layout/pageWrapper-interface";

const PageWrapper = forwardRef<HTMLDivElement, IPageWrapperProps>(
  (
    {
      title = undefined,
      description = undefined,
      className = undefined,
      children,
    },
    ref
  ) => {
    useLayoutEffect(() => {
      // @ts-ignore
      document.getElementsByTagName("TITLE")[0].text =
        `${title ? `${title} | ` : ""}${import.meta.env.VITE_APP_SITE_NAME}`;
      // @ts-ignore
      document
        ?.querySelector('meta[name="description"]')
        .setAttribute(
          "content",
          description || import.meta.env.VITE_APP_META_DESC || ""
        );
    });

    return (
      <div
        ref={ref}
        className={classNames(pageWrapperLayout, containerFluid, className)}
      >
        {children}
      </div>
    );
  }
);
PageWrapper.displayName = "PageWrapper";
PageWrapper.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  // @ts-ignore
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default PageWrapper;
