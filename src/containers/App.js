import React, { Component } from 'react';

import cssClasses from './App.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      {
        id: 1,
        name: 'Max',
        age: 28
      },
      {
        id: 2,
        name: 'Manu',
        age: 29,
        extra: 'My Hobbies: Racing'
      },
      {
        id: 3,
        name: 'Stephanie',
        age: 26
      }
    ],
    showPersons: false
  };

  switchNameHandler = name => {
    const persons = this.state.persons;
    persons[0] = { ...persons[0], name };

    this.setState({ persons });
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
    return (
      <div className={cssClasses.App}>
        <Cockpit
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
      </div>
    );
  }
}

export default App;
