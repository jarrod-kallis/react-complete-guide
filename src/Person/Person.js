import React from 'react';
import PropTypes from 'prop-types';

const Person = props => (
  <div>
    I am {props.name} and I am {props.age}!
    <p>{props.children}</p>
  </div>
);

Person.defaultProps = {
  children: ''
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  children: PropTypes.string
};

export default Person;
