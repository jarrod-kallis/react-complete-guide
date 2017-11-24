import React, { Component } from 'react';

import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {
        key: 1,
        name: 'Max',
        age: 28
      },
      {
        key: 2,
        name: 'Manu',
        age: 29,
        extra: 'My Hobbies: Racing'
      },
      {
        key: 3,
        name: 'Stephanie',
        age: 26
      }
    ]
  };

  switchNameHandler = (name) => {
    const persons = this.state.persons;
    persons[0] = { ...persons[0], name };

    this.setState({ persons });
  };

  nameChangedHandler = (event, id) => {
    const name = event.target.value;

    const persons = this.state.persons.map((person) => {
      let alteredPerson = person;
      if (person.key === id) {
        alteredPerson = Object.assign({}, person, { name });
      }

      return alteredPerson;
    });

    this.setState({ persons });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi from React</h1>

        <button style={style}
          onClick={() => this.switchNameHandler('Jarrod')}>
          Switch Name
        </button>

        {this.state.persons.map(person => (
          <Person key={person.key} id={person.key} name={person.name} age={person.age}
            click={() => this.switchNameHandler('Max!')}
            changed={this.nameChangedHandler}>
            {person.extra}
          </Person>
        ))}
      </div>
    );
  }
}

export default App;
