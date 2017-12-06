import React from 'react';
import PropTypes from 'prop-types';

const WithClass = (props) => {
  console.log(props);
  return (
    <div className={props.classes}>
      {props.children}
    </div>
  )
};

WithClass.defaultProps = {
  children: null
}

WithClass.propTypes = {
  classes: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
};

export default WithClass;
