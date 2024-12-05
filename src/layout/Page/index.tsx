import { forwardRef } from "react";
import PropTypes from "prop-types";
import { IPageProps } from "../../interfaces/layout/page-interface";
import classNames from "classnames";
import { pageLayout } from "../../styles/Page/_page";

const Page = forwardRef<HTMLDivElement, IPageProps>(
  ({ children, className = undefined, container="2xl", ...props }, ref) => {
    return (
      <div ref={ref} className={classNames(pageLayout, className, container === "fluid" ? "w-full" : `container-${container} mx-auto px-12`)} {...props}>
        {children}
      </div>
    );
  }
);

Page.displayName = "Page";
Page.propTypes = {
  children: PropTypes.node.isRequired,
  // @ts-ignore
  container: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf([null, "sm", "md", "lg", "xl", "2xl", "fluid"]),
  ]),
  className: PropTypes.string,
};

export default Page;

// import { forwardRef } from "react";
// import PropTypes from "prop-types";
// import { IPageProps } from "../../interfaces/layout/page-interface";

// const Page = forwardRef<HTMLDivElement, IPageProps>(
//   ({ children, className = "", container = "2xl", ...props }, ref) => {
//     const containerClass = container === "fluid" ? "w-full" : `container-${container}`;

//     return (
//       <div
//         ref={ref}
//         className={`${className} ${containerClass} mx-auto`}
//         {...props}
//       >
//         {children}
//       </div>
//     );
//   }
// );

// Page.displayName = "Page";
// Page.propTypes = {
//   children: PropTypes.node.isRequired,
//   // @ts-ignore
//   container: PropTypes.oneOfType([
//     PropTypes.bool,
//     PropTypes.oneOf([null, "sm", "md", "lg", "xl", "2xl", "fluid"]),
//   ]),
//   className: PropTypes.string,
// };

// export default Page;
