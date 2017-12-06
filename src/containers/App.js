import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import cssClasses from './App.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClassComponent';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      persons: [
        { id: 1, name: 'Max', age: 28 },
        { id: 2, name: 'Manu', age: 29, extra: 'My Hobbies: Racing' },
        { id: 3, name: 'Stephanie', age: 26 }
      ],
      showPersons: false
    };

    console.log('[App.js] constructor', props);
  }

  componentWillMount() {
    console.log('[App.js] componentWillMount');
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js] shouldComponentUpdate', nextProps, nextState);
  //   const shouldUpdate =
  //     nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons;
  //   console.log(`[UPDATE App.js] Update? ${shouldUpdate}`);

  //   return shouldUpdate;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] componentDidUpdate');
  }

  switchNameHandler = name => {
    if (this.state.persons.length > 0 && this.state.persons[0].name !== name) {
      const person = {
        ...this.state.persons[0],
        name
      };

      const persons = [...this.state.persons];
      persons[0] = person;

      this.setState({ persons });
    }
  };

  showPersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  deletePersonHandler = index => {
    this.setState({
      persons: [
        ...this.state.persons.slice(0, index),
        ...this.state.persons.slice(index + 1)
      ]
    });
  };

  nameChangeHandler = (event, id) => {
    // 'findIndex' will iterate over each element in the array and
    // return the index if the compare statement returns true
    const personIndex = this.state.persons.findIndex(
      tmpPerson => tmpPerson.id === id
    );

    const person = {
      ...this.state.persons[personIndex],
      name: event.target.value
    };

    // Update state this way:
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons });
  };

  render() {
    console.log('[App.js] render');

    return (
      // <div className={cssClasses.App}>
      <WithClass classes={cssClasses.App}>
        {/* <button onClick={() => this.setState({ showPersons: true })}>
          Show Persons
        </button> */}
        <Cockpit
          title={this.props.title}
          personsLength={this.state.persons.length}
          switchNameClick={this.switchNameHandler}
          showPersonsClick={this.showPersonsHandler}
          showPersons={this.state.showPersons}
        />
        {this.state.showPersons ? (
          <Persons
            persons={this.state.persons}
            delete={this.deletePersonHandler}
            change={this.nameChangeHandler}
          />
        ) : null}
      </WithClass>
    );
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired
};

export default App;
