import React, { Component } from 'react';
import Card from './card'; 
import Form from './form'; 
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state=
    { 
      cardnumber:'************',
      cardname:'***********',
      cardvalid:'****'
     }
  }
getnumber=(p)=>{
  this.setState({cardnumber:p})
}
getname=(p)=>{
  this.setState({cardname:p})
}
getvalid=(p)=>{
  this.setState({cardvalid:p})
}
  render() {
    return (
      <div className="App">      
     <Card cardnumber={this.state.cardnumber}
     cardname={this.state.cardname} 
     cardvalid={this.state.cardvalid}/>

     <Form getnumber={this.getnumber}
     getname={this.getname}
     getvalid={this.getvalid} />
     
     </div> );
  }
}
export default App;
