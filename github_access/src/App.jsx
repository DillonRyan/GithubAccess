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
import ProfileDetails from './components/ProfileDetails.jsx';
import SortedList from './components/SortedList.jsx';
import LanguageList from './components/LanguageList.jsx';
import lda from './lda';


class App extends Component {
  constructor() {
    super();
    this.state = {
      gitun: 'No username',
       infoclean : '',
       formData: {
         username: '',
       },
       repitems: null,
     staritems: null,
     replanguagecount: {},

    }
    this.handleUserFormSubmit = this.handleUserFormSubmit.bind(this);
    this.handleFormChange= this.handleFormChange.bind(this);
  }

  handleUserFormSubmit(event) {
    event.preventDefault();
    axios.get('https://api.github.com/users/'+this.state.formData.username)
    .then(response => this.setState({
      gitun: response.data.login,
      infoclean: response.data,
      info : JSON.stringify(response.data, undefined, 2)
    })).catch((err) => { console.log(err); });
axios.get('https://api.github.com/users/'+this.state.formData.username+'/repos')
    .then(response => {
var itemsWithFalseForks = response.data.filter(item => item.fork === false)
var sortedItems = itemsWithFalseForks.sort((b,a) => {
        if((a.watchers_count +  a.forks_count) < (b.forks_count + b.watchers_count)){
          return -1
        }else if ((a.watchers_count +  a.forks_count) > (b.forks_count + b.watchers_count)){
          return 1
        }else {
          return 0
        }
      })
let dictrlc = Object.assign({}, this.state.replanguagecount);
      for (var i = 0; i < itemsWithFalseForks.length; i++) {
          dictrlc[itemsWithFalseForks[i]['language']] = -~ dictrlc[itemsWithFalseForks[i]['language']]
      }
this.setState({
        repitems: sortedItems.slice(0,10),
        replanguagecount: dictrlc,
      })
}).catch((err) => { console.log(err); })
axios.get('https://api.github.com/users/'+this.state.formData.username+'/starred')
    .then(response => {
var itemsWithFalseForks = response.data.filter(item => item.fork === false)
var sortedItems = itemsWithFalseForks.sort((b,a) => {
        if((a.watchers_count +  a.forks_count) < (b.forks_count + b.watchers_count)){
          return -1
        }else if ((a.watchers_count +  a.forks_count) > (b.forks_count + b.watchers_count)){
          return 1
        }else {
          return 0
        }
      })
var documents = []
      for (var i = 0; i < response.data.length; i++) {
          var descr = response.data[i]['description']
          if (descr != null) {
            var newtext = descr.match(/[^.!?]+[.!?]+/g)
            if (newtext != null) {
              documents = documents.concat(newtext)
            }
          }
      }
      var result = lda(documents, 3, 3);

this.setState({
        staritems: sortedItems.slice(0,10),
      })
}).catch((err) => { console.log(err); })
};



  handleFormChange(event) {
    const obj = this.state.formData;
    obj[event.target.name] = event.target.value;
    this.setState(obj);
  };


  render() {
    return (
      <div className="App">
      <Router>
        <div>
          <Navbar />
          <div className="space"></div>
          {
              }
          <Switch>
            <Route path="/Home">
              <Home />
            </Route>
            <Route path="/">
              <Home />
            </Route>
              <Route path ="/RepoOnly">
              <Link to="/RepoOnly">
              </Link>
              <RepoOnly />
            </Route>
          </Switch>
        </div>
      </Router>
        <center>
        <h1 className="App-intro">
          Please enter the github username you'd like to see Information about
        </h1>
        <hr></hr>
        <Form
          formData={this.state.formData}
          handleUserFormSubmit={this.handleUserFormSubmit}
          handleFormChange={this.handleFormChange}
        />
        <hr></hr>
        <div>
        <p>Profile Details:</p>
        <ProfileDetails infoclean={this.state.infoclean}/>
        </div>
        <hr></hr>
        <div>
        <p>Own Repositories:</p>
        <SortedList repitems={this.state.repitems}/>
        <hr></hr>
        </div>
        Starred Repositories:
        <SortedList repitems={this.state.staritems}/>
        <hr></hr>
       Own Repos Language Count:
       <LanguageList langslist={this.state.replanguagecount}/>

        </center>
</div>
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
            <center>

            </center>
          </li>
          <li className = "nav-item">
          <a className="nav-link" Link to ="/RepoOnly" href="/RepoOnly">Click here to see only repos</a>
          </li>
        </ul>
      </div>
    </nav>
  );

}

function Home (){
  return(
    <div>
    </div>
  );
}


function RepoOnly(){
  return (
  <div className="container">
  <h1>Repos shown only</h1>
  </div>
);
}
