import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas : [
      { name: 'Ryu', age: 30, belt: 'black', id: 1 },
      { name: 'Yoshi', age: 20, belt: 'green', id: 2 },
      { name: 'Crystal', age: 25, belt: 'pink', id: 3 },
      { name: 'Daniel', age: "He looks too good to be this old", belt: "He's the MASTER!", id: 4}
    ]
  }

// creates a random number assigned to the id property.  new variable that takes in the spread of this.state (original Ninjas Arr) and adds the new Ninja.
//  created a new array.
  addNinja = (ninja) => {
    ninja.id = Math.random()
    let ninjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas: ninjas
    })
  }
  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    });
    this.setState({
      ninjas: ninjas
    })
  }

  componentDidMount(){
    console.log("Component Mounted");
  }

  componentDidUpdate(prevProps, prevState){
    console.log("components updated");
    console.log(prevProps, prevState);
  }
  render() {
    return (
      <div className="App">
        <h1> This is the body </h1>
        <Ninjas ninjas={ this.state.ninjas } deleteNinja = {this.deleteNinja} />
        <AddNinja addNinja = {this.addNinja} />
      </div>
    );
  }
}

export default App;
