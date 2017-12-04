import React from 'react';
import PropTypes from 'prop-types';

import './Person.css';

const Person = props => (
  <div className="Person">
    <p>
      I am {props.name} and I am {props.age}!
    </p>
    <input onChange={props.change} value={props.name} />
    <p>{props.children}</p>
    <button onClick={props.deleteClick}>Delete Person</button>
  </div>
);

Person.defaultProps = {
  children: ''
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  children: PropTypes.string,
  deleteClick: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired
};

export default Person;
