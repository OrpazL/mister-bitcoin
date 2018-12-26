import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

import HomePage from './pages/HomePage/HomePage.js';
import ContactsPage from './pages/ContactPage/ContactPage';
import ContactDetails from './pages/ContactDetailsPage/ContactDetailsPage';
import ContactEdit from './pages/ContactEdit/ContactEdit';
import SignupPage from './pages/SignupPage/SignupPage';
import ChartsPage from './pages/ChartsPage/ChartsPage';
import NavBar from './components/NavBar/NavBar';

import { inject } from 'mobx-react';

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

@inject('store')
class App extends Component {

  store = this.props.store;
  userStore = this.store.UserStore;
  
  currUser = this.userStore.user;

  render() {
    return (
      <Router>
        <div className="App">
          {this.currUser && <NavBar/>}

          <div className="App-bg">
            <img src={logo} className="App-logo" alt="logo" />
          </div>


          <CSSTransition
            timeout={{ enter: 3000, exit: 3000 }}
            classNames="fade"
          >
            <Switch>
              <PrivateRoute user={this.currUser} path="/" exact 
                    render={() => {
                      return <HomePage user={this.currUser} />;
                    }}
              />
              <PrivateRoute user={this.currUser} path="/stats" exact component={ChartsPage} />
              <PrivateRoute user={this.currUser} path="/contact" exact component={ContactsPage} />
              <PrivateRoute user={this.currUser} path="/contact/edit/:contactId?" exact component={ContactEdit} />
              <PrivateRoute user={this.currUser} path="/contact/:contactId" exact component={ContactDetails} />
              <Route path="/signup" exact component={SignupPage} />
            </Switch>
          </CSSTransition>
        </div>
      </Router>
    );
  }
}

export default App;
