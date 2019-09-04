import React, { Component } from 'react';
import Contacts from './components/Contacts'
import Todos from './components/Todos'
import logo from './logo.svg';
import './App.css';

class App extends Component{
  render () {
    return (
      <Contacts blue_eyes ={this.state.blue_eyes} magician= {this.state.magician}/>
      
    )
  }

  state = {
    blue_eyes : [],
    magician : [],
  };

  componentDidMount() {
    fetch('https://db.ygoprodeck.com/api/v5/cardinfo.php?name=Blue-Eyes%20White%20Dragon')
      .then(res => res.json())
      .then((data) => {
        this.setState ({ blue_eyes: data })
      })
      .catch(console.log)
  }

  componentWillMount(){
    fetch('https://db.ygoprodeck.com/api/v5/cardinfo.php?name=Dark%20Magician')
      .then(res => res.json())
      .then((data) => {
        this.setState ({ magician: data })
      })
      .catch(console.log)
  }


}


export default App;
