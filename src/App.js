import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

import HomePage from './pages/HomePage/HomePage.js';
import UserService from './services/UserService';
import ContactsPage from './pages/ContactPage/ContactPage';
import ContactDetails from './pages/ContactDetailsPage/ContactDetailsPage';
import ContactEdit from './pages/ContactEdit/ContactEdit';
import SignupPage from './pages/SignupPage/SignupPage';
import ChartsPage from './pages/ChartsPage/ChartsPage';
import NavBar from './components/NavBar/NavBar';

import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { CSSTransition } from "react-transition-group";

const PrivateRoute = props => {
  return props.user ? <Route {...props} /> : <Redirect to="/signup" />;
};


class App extends Component {
  
  state = {
    currUser: UserService.getUser()
  }
  
  render() {
    return (
      <Router>
        <div className="App">
          {this.state.currUser && <NavBar/>}

          <div className="App-bg">
            <img src={logo} className="App-logo" alt="logo" />
          </div>


          <CSSTransition
            timeout={{ enter: 3000, exit: 3000 }}
            classNames="fade"
          >
            <Switch>
              <PrivateRoute user={this.state.currUser} path="/" exact 
                    render={() => {
                      return <HomePage user={this.state.currUser} />;
                    }}
              />
              <PrivateRoute user={this.state.currUser} path="/stats" exact component={ChartsPage} />
              <PrivateRoute user={this.state.currUser} path="/contact" exact component={ContactsPage} />
              <PrivateRoute user={this.state.currUser} path="/contact/edit/:contactId?" exact component={ContactEdit} />
              <PrivateRoute user={this.state.currUser} path="/contact/:contactId" exact component={ContactDetails} />
              <Route path="/signup" exact component={SignupPage} />
            </Switch>
          </CSSTransition>
        </div>
      </Router>
    );
  }
}

export default App;
