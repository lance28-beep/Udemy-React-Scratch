import React from "react";

// two ways of creating HOC's

// const withClass = (props) => (
//     <div className = {props.classes}>
//         {props.children}
//     </div>
// )

// export default withClass;

const withClass = (WrappedComponent, className) => {
  return (props) => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  );
};
export default withClass;
