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

  onTextChange = (e) => {
      this.setState({persons: [
              {name: 'Emeka', age: 47},
              {name: e.target.value, age: 30},
              {name: 'Amakanen', age: 21, hobby: 'I love cakes'},
          ]})
  };

  render() {

    let listPersons = this.state.persons.map((person, index) => {
      return <Person changed={this.onTextChange} key={index} name={person.name} age={person.age}/>
    });

    const btnStyle = {
        backgroundColor: 'green',
        border: '1px solid #eee',
        marginTop: '50px',
        padding: '8px',
        color: 'white',
        cursor: 'pointer'
    }

    return (
      <div className="App">

        <button  style={btnStyle} className="add-btn" onClick={this.addNewHandler.bind(this, 'Emeks')}>
          Add New
        </button>

        {/*<Person*/}
        {/*  */}
        {/*    click={this.addNewHandler.bind(this, 'Emeks')}*/}
        {/*    name="Emekaz"*/}
        {/*    age="200"/>*/}

        {listPersons}
      </div>
    );
  }
}

export default App;
