import { FC } from "react";
import PropTypes from "prop-types";
import { IHeaderProps } from "../../interfaces/layout/header-interface";
import classNames from "classnames";
import { useMeasure } from "react-use";

const Header: FC<IHeaderProps> = ({ children, className = undefined }) => {
  const [refHeader, sizeHeader] = useMeasure<HTMLDivElement>();
  const root = document.documentElement;
  root.style.setProperty("--header-height", `${(sizeHeader.height)*2}px`);
  return (
    <header ref={refHeader} className={classNames(`w-full bg-gradient-to-tr from-primary to-transparent h-[var(${sizeHeader.height}px)]`, className)}>
      <div className="container-fluid">
        <div className="flex flex-row items-center justify-between">{children}</div>
      </div>
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Header;
