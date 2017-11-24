import React from 'react';
import PropTypes from 'prop-types';

import './Person.css';

const Person = props => (
  <div className="Person">
    <p>I am {props.name} and I am {props.age}!</p>
    <p>{props.children}</p>
    <input type="text"
      onChange={(event) => props.changed(event, props.id)}
      value={props.name} />
  </div>
);

Person.defaultProps = {
  children: ''
};

Person.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  children: PropTypes.string,
  changed: PropTypes.func.isRequired
};

export default Person;
