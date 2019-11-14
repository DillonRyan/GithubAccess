import React, { Component } from 'react';
import "./App.css";
import axios from 'axios';import Form from './components/Form.jsx';
import 'bootstrap/dist/css/bootstrap.css' ;
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      gitun: '',
      info: '',
      formData: {
        username: '',
      }
    }
    this.handleUserFormSubmit = this.handleUserFormSubmit.bind(this);
    this.handleFormChange= this.handleFormChange.bind(this);
  }

  handleUserFormSubmit(event) {
    event.preventDefault();
    axios.get('https://api.github.com/users/'+this.state.formData.username)
    .then(response => this.setState({
      gitun: response.data.login,
      info : JSON.stringify(response.data, undefined, 2)
    })).catch((err) => { console.log(err); });
  };handleFormChange(event) {
    const obj = this.state.formData;
    obj[event.target.name] = event.target.value;
    this.setState(obj);
  };render() {
    return (
      <div className="App">
      <Router>
        <div>
          <Navbar />
          <div className="space"></div>
          <Switch>

            <Route path="/Home">
              <Home />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
        <center>
        <p className="App-intro">
          Please enter the github username you'd like to see Information about
        </p>
        <Form
          formData={this.state.formData}
          handleUserFormSubmit={this.handleUserFormSubmit}
          handleFormChange={this.handleFormChange}
        />
        <p><b>Github username:</b></p>
        <p>{this.state.gitun}</p>
        <b>Data bout this user:</b>
        <pre>{this.state.info}</pre>
        </center></div>
    );
  }
}export default App;

function Navbar(){
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
      <button type="button" className="navbar-toggler text-cente" data-toggle="collapse" data-target="#collapse_target">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapse_target">
        <ul className="navbar-nav">
          <li className ="nav-item">
            <center>
            <a className="nav-link" href="/Home">Click here to search a new username</a>
            </center>
          </li>
        </ul>
      </div>
    </nav>
  );

}

function Home() {
  return (
      <div>

    </div>
  );
}

function UserProfile(props){
  return(
    <div className="container">
      <h2 className="text-center">Welcome Back!</h2>
    </div>
  );
}

function Repositories(){
  return(
    <div className="container">
      <h2 className="text-center">This is a list of all your repos</h2>
      <div className="row">
      </div>
    </div>
  );
}

function commits() {
  return (
    <div className="container">
      <h2 className="text-center">commits</h2>
      <div className="row">
      </div>
    </div>
  );
}
