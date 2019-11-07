import React from "react";
import "./App.css";
import LogIn from "./LogIn"
import 'bootstrap/dist/css/bootstrap.css' ;
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="space"></div>
        <Switch>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/">
            <LogIn /> // - this sets the default page to be the login page
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Login(){
  return(
    <div>
      <LogIn />
    </div>
  );

}

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
            <a className="nav-link" href="/">Github API Visualisation Log in</a>
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

    </div>
  );
}


function UserProfile(Username){
  return(
    <div className="container">
      <h2 className="text-center">Welcome Back {Username.name} !</h2>
    </div>
  );
}
