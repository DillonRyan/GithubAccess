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
        <header className="App-header">
          <h1 className="App-title">GitHub Visualisation</h1>
        </header>
        <p className="App-intro">
          Please enter the github username you'd like to see Information about
        </p>
        <Form
          formData={this.state.formData}
          handleUserFormSubmit={this.handleUserFormSubmit}
          handleFormChange={this.handleFormChange}
        />
        <p><b>Username:</b></p>
        <p>{this.state.gitun}</p>
        <b>Information:</b>
        <pre>{this.state.info}</pre></center></div>
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
            <a className="nav-link" href="/LogIn">Github API Visualisation Log In</a>
            </center>
          </li>
          <li className ="nav-item">
            <a className="nav-link" href="/Home">Home</a>
          </li>
        </ul>
      </div>
    </nav>
  );

}

function Home() {
  return (
      <div>
        <UserProfile name="Dillon" />
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <Link to="/repo" type="button" className="btn">Repositories</Link>
          </div>
          <div className="col-12 text-center">
            <Link to="/commits" type="button" className="btn">Number of commits</Link>
          </div>
        </div>
      </div>
    </div>
    //something to take up all empty space
  );
}

function UserProfile(props){
  return(
    <div className="container">
      <h2 className="text-center">Welcome Back {props.name} !</h2>
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
