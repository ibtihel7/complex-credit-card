import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
class Form extends Component {
                
                            constructor() {
                                super();
                                this.state = {
                                    value1: "",
                                    value2:"",
                                    value3:'',

                                  }
                            }
                            render() { 
                
                            return (  
                                <div className="form-group">
                                <input
                                    name1={this.state.name1}
                                    value1={this.state.value1}
                                    onChange1={this.handleChange1}
                                    placeholder1="votre nom" />
                                    <br/>
                                <input
                                    name2={this.state.name2}
                                    value2={this.state.value2}
                                    onChange2={this.handleChange2}
                                    placeholder2='numero'
                                />
                                    <br/>
                                <input
                                    name3={this.state.name3}
                                    value3={this.state.value3}
                                    onChange3={this.handleChange3}
                                    placeholder3='Entrer la validité de votre carte'
                                />
                                </div>
                            )
                            }
                            handleChange(e) {
                                var key = e.target.name1;
                                var obj = {};
                                obj[key] = e.target.value1;
                                var updatedValues = Object.assign({}, this.state.values, obj);
                                this.setState({values: updatedValues});
                            }
                        }
                      


                            export default Form