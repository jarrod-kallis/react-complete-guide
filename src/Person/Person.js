import React from 'react';
import PropTypes from 'prop-types';
// import Radium from 'radium';

import cssClasses from './Person.css';

if (Math.random() > 0.99999999) {
  throw new Error('Something went wrong!');
}

const Person = props => (
  // const style = {
  //   '@media (min-width: 500px)': {
  //     width: '350px'
  //   }
  // };

  // <div className="Person" style={style}>
  // <div className="Person">
  <div className={cssClasses.Person}>
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

// export default Radium(Person);
export default Person;
