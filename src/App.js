import React, { Component } from 'react';

import './App.css';

import Person from './Person/Person';

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
    // const persons = this.state.persons.slice();
    // const persons = [...this.state.persons];
    // persons.splice(index, 1);
    // this.setState({ persons });

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

    // Or this way:
    // this.setState({
    //   persons: [
    //     ...this.state.persons.slice(0, personIndex),
    //     person,
    //     ...this.state.persons.slice(personIndex + 1)
    //   ]
    // });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      marginRight: '5px'
    };

    return (
      <div className="App">
        <h1>Hi from React</h1>
        <button style={style} onClick={() => this.switchNameHandler('Jarrod')}>
          Switch Name
        </button>
        <button style={style} onClick={() => this.showPersonsHandler()}>
          {this.state.showPersons ? 'Hide Persons' : 'Show Persons'}
        </button>
        {this.state.showPersons
          ? this.state.persons.map((person, index) => (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                deleteClick={() => this.deletePersonHandler(index)}
                change={event => this.nameChangeHandler(event, person.id)}
              >
                {person.extra}
              </Person>
            ))
          : null}
      </div>
    );
  }
}

export default App;
