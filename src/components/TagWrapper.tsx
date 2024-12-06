import { forwardRef } from "react";
import { ITagWrapper } from "../interfaces/components/tagWrapper-interface";
import PropTypes from "prop-types";

const TagWrapper = forwardRef<
  HTMLDivElement | HTMLAnchorElement | HTMLFormElement,
  ITagWrapper
>(({ tag: Tag = 'div', children, ...props }, ref) => {
  return (
    <Tag ref={ref} {...props}>
      {children}
    </Tag>
  );
});

TagWrapper.displayName = "TagWrapper";
TagWrapper.propTypes = {
  tag: PropTypes.string,
  children: PropTypes.node.isRequired,
};


export default TagWrapper;