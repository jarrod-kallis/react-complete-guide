import React from 'react';
import PropTypes from 'prop-types';
// import Radium from 'radium';

import cssClasses from './Person.css';

import Auxillary from '../../../hoc/Auxillary';
import withClass from '../../../hoc/withClassFunction';

class Person extends React.Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] constructor', props);
  }

  componentWillMount() {
    console.log('[Person.js] componentWillMount');
  }

  componentDidMount() {
    console.log('[Person.js] componentDidMount');
  }

  componentWillUnmount() {
    console.log('[Person.js] componentWillUnmount');
  }

  render() {
    console.log('[Person.js] render');

    if (Math.random() > 0.9999999) {
      throw new Error(`Error rendering Person: ${this.props.name}!`);
    }

    return (
      <Auxillary>
        <p>
          I am {this.props.name} and I am {this.props.age}!
        </p>
        <input onChange={this.props.change} value={this.props.name} />
        <p>{this.props.children}</p>
        <button onClick={this.props.deleteClick}>Delete Person</button>
      </Auxillary>
    );
    // return [
    //   <p key={1} className={cssClasses.Person}>
    //     I am {this.props.name} and I am {this.props.age}!
    //   </p>,
    //   <input key={2} onChange={this.props.change} value={this.props.name} />,
    //   <p key={3}>{this.props.children}</p>,
    //   <button key={4} onClick={this.props.deleteClick}>
    //     Delete Person
    //   </button>
    // ];
  }
}

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
export default withClass(Person, cssClasses.Person);
