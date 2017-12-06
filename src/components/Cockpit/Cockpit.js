import React from 'react';
import PropTypes from 'prop-types';

import cssClasses from './Cockpit.css';

const Cockpit = props => {
  // const classes = ['red', 'bold'].join(' '); // 'red bold'
  const classes = [];
  if (props.personsLength <= 2) {
    // classes.push('red');
    classes.push(cssClasses.red);
  }
  if (props.personsLength <= 1) {
    // classes.push('bold');
    classes.push(cssClasses.bold);
  }

  const btnClass = props.showPersons ? cssClasses.Red : '';

  return (
    <div className={cssClasses.Cockpit}>
      <h1>Hi from React</h1>
      <p className={classes.join(' ')}>This is really working!</p>
      <button onClick={() => props.switchNameClick('Jarrod')}>
        Switch Name
      </button>
      <button className={btnClass} onClick={props.showPersonsClick}>
        {props.showPersons ? 'Hide Persons' : 'Show Persons'}
      </button>
    </div>
  );
};

Cockpit.propTypes = {
  personsLength: PropTypes.number.isRequired,
  showPersons: PropTypes.bool.isRequired,
  switchNameClick: PropTypes.func.isRequired,
  showPersonsClick: PropTypes.func.isRequired
};

export default Cockpit;
