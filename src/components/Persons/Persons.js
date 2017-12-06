import React from 'react';
import PropTypes from 'prop-types';

import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Person from './Person/Person';

const Persons = props =>
  props.persons.map((person, index) => (
    <ErrorBoundary key={person.id}>
      <Person
        name={person.name}
        age={person.age}
        deleteClick={() => props.delete(index)}
        change={event => props.change(event, person.id)}
      >
        {person.extra}
      </Person>
    </ErrorBoundary>
  ));

Persons.propTypes = {
  persons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired
    }).isRequired
  ).isRequired
};

export default Persons;
