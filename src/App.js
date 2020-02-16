import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      {name: 'Emeka', age: 21},
      {name: 'Amara', age: 40},
      {name: 'MC', age: 30},
      {name: 'Amaka', age: 21, hobby: 'I love cakes'},
    ]
  };

  addNewHandler = (name) => {

    this.setState({persons: [
        {name: name, age: 47},
        {name: 'MC', age: 30},
        {name: 'Amakanen', age: 21, hobby: 'I love cakes'},
      ]})
  };

  render() {

    let listPersons = this.state.persons.map(function(person, index){
      return <Person key={index} name={person.name} age={person.age}/>
    });

    return (
      <div className="App">
        Hello Franklin!
        <button className="add-btn" onClick={this.addNewHandler.bind(this, 'Emeks')}>
          Add New
        </button>
        <Person click={this.addNewHandler.bind(this, 'Emeks')} name="Emekaz" age="200"/>
        {listPersons}
      </div>
    );
  }
}

export default App;
