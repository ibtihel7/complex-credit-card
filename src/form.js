import React, { Component } from 'react';
import './App.css';
import InputNumber from 'react-input-just-numbers';


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            number:'' ,
            name:''    ,
            valid:''  ,
        
    }   
}

handelchange1=(event)=>{
this.setState({number:event.target.value})
this.props.getnumber(event.target.value)
}
handelchange2=(event)=>{
    this.setState({name:event.target.value})
    this.props.getname (event.target.value)

    }
handelchange3=(event)=>{
this.setState({valid:event.target.value})
this.props.getvalid(event.target.value)

}




// onChange(e){
//     const re = /^[0-9\b]+$/;

//     // if value is not blank, then test the regex

//     if (e.target.value === '' || re.test(e.target.value)) {
//        this.setState({value: e.target.value})
//     }
// }

render()
{
    return <div> 
     

        <input type='text' placeholder="Enter the card number"  maxlength = "16" onChange={this.handelchange1} pattern="{0,9}"  /> 
        <br></br>
        <input type='text'placeholder="Enter the holder name"  maxlength="20" onChange={this.handelchange2} />
        <br></br>
        <input type="text" placeholder="Enter the card validity" pattern="{0,9}"  onChange={this.handelchange3} />

    </div>
}
}
export default Form;