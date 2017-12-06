import React from 'react';
import PropTypes from 'prop-types';

import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Person from './Person/Person';

// PureComponent: detects changes in props & state and will only update if
// necessary. This means you don't have to implement shouldComponentUpdate
// lifecycle hook if state is updated immutably (as it should be anyway)
class Persons extends React.PureComponent {
  constructor(props) {
    super(props);
    console.log('[Persons.js] constructor', props);
  }

  componentWillMount() {
    console.log('[Persons.js] componentWillMount');
  }

  componentDidMount() {
    console.log('[Persons.js] componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE Persons.js] componentWillReceiveProps', nextProps);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(
  //     '[UPDATE Persons.js] shouldComponentUpdate',
  //     nextProps,
  //     nextState
  //   );
  //   return (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.change !== this.props.change ||
  //     nextProps.delete !== this.props.delete
  //   );
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      '[UPDATE Persons.js] componentWillUpdate',
      nextProps,
      nextState
    );
  }

  componentDidUpdate() {
    console.log('[UPDATE Persons.js] componentDidUpdate');
  }

  render() {
    console.log('[Persons.js] render');

    return this.props.persons.map((person, index) => (
      <ErrorBoundary key={person.id}>
        <Person
          name={person.name}
          age={person.age}
          deleteClick={() => this.props.delete(index)}
          change={event => this.props.change(event, person.id)}
        >
          {person.extra}
        </Person>
      </ErrorBoundary>
    ));
  }
}

Persons.propTypes = {
  delete: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired,
  persons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired
    }).isRequired
  ).isRequired
};

export default Persons;
