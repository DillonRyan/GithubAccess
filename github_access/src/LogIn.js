import './LogIn.css';
import React from 'react';

import {
  Link
} from "react-router-dom";


class LogIn extends React.Component {
  constructor(props) {
  super(props);
  this.state = {value: ''};


  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit=this.handleSubmit.bind(this);
}

handleChange(event) {
  this.setState({value: event.target.value});

}
  handleSubmit(event){
    this.props.history.push('/kjjk');
    console.log('huhu');
    event.preventDefault();
  }

  render() {
    console.log(this.state.value);
    return (
      <div className="LogIn">
      <header className="LogInHeader">
      <h1>Github Log In Page</h1>
      <form onSubmit={this.handleSubmit}>
      <label>
        <p>Github Username: </p>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
      <Link className="btn btn-primary small" to="/">Log In</Link>
      </form>
      </header>
      </div>
    );
  }
}

export default LogIn;
