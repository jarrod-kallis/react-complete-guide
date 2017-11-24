import React, { Component } from 'react';

import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {
        name: 'Max',
        age: 28
      },
      {
        name: 'Manu',
        age: 29,
        extra: 'My Hobbies: Racing'
      },
      {
        name: 'Stephanie',
        age: 26
      }
    ]
  };

  switchNameHandler = () => {
    const persons = this.state.persons;
    persons[0] = { ...persons[0], name: 'Jarrod' };

    this.setState({ persons });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi from React</h1>
        <button onClick={() => this.switchNameHandler()}>Switch Name</button>
        {this.state.persons.map(person => (
          <Person key={person.name} name={person.name} age={person.age}>
            {person.extra}
          </Person>
        ))}
      </div>
    );
  }
}

export default App;
