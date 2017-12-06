import React from 'react';
import PropTypes from 'prop-types';

import cssClasses from './Cockpit.css';
import Auxillary from '../../hoc/Auxillary';

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

  const btnClass = `${cssClasses.Button} ${
    props.showPersons ? cssClasses.Red : ''
  }`;

  return (
    <Auxillary>
      <h1>{props.title}</h1>
      <p className={classes.join(' ')}>This is really working!</p>
      <button
        className={cssClasses.Button}
        onClick={() => props.switchNameClick('Jarrod')}
      >
        Switch Name
      </button>
      <button className={btnClass} onClick={props.showPersonsClick}>
        {props.showPersons ? 'Hide Persons' : 'Show Persons'}
      </button>
    </Auxillary>
  );
};

Cockpit.propTypes = {
  title: PropTypes.string.isRequired,
  personsLength: PropTypes.number.isRequired,
  showPersons: PropTypes.bool.isRequired,
  switchNameClick: PropTypes.func.isRequired,
  showPersonsClick: PropTypes.func.isRequired
};

export default Cockpit;
