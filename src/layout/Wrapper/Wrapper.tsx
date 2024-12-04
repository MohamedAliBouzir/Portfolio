import { FC } from "react";
import { IWrapperContainerProps } from "./../../interfaces/layout/wrapper-interface";
import classNames from "classnames";
import PropTypes from "prop-types";
import { wrapper } from "./../../styles/components/layout/_wrapper";
import Content from "./../Content/Content";

export const WrapperContainer: FC<IWrapperContainerProps> = ({
  children,
  className = undefined,
  ...props
}) => {
  return (
    <div className={classNames(wrapper, className)} {...props}>
      {children}
    </div>
  );
};

WrapperContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

const Wrapper = () => {
  return (
    <>
      <WrapperContainer>
        <Content />
      </WrapperContainer>
    </>
  );
};

export default Wrapper;