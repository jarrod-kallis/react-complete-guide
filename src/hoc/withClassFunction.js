import React from 'react';

const withClass = (WrappedComponent, className) => (props) => (
  <div className={className}>
    <WrappedComponent {...props} />
  </div>
)

// const withClass = (WrappedComponent, className) => (
//   class extends React.Component {
//     render() {
//       return (
//         <div className={className}>
//           <WrappedComponent {...this.props} />
//         </div>
//       );
//     }
//   }
// )

export default withClass;
