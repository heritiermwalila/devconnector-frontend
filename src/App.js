import React, { Component } from 'react';
import { Provider } from 'react-redux'; // this allow us to connect our application to redux
import store from './store';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; //routing configuration
import './App.css';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import setCurrentUser from './utils/setCurrentUser';
import Navbar from './components/Layouts/Navbar';
import Footer from './components/Layouts/Footer';
import Landing from './components/Layouts/Landing';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './components/dashboard/Dashboard';
import { logoutUser } from './actions/authActions';
import { clearCurrentProfile } from './actions/profileActions'
import PrivateRoute from './components/common/PrivateRoute';

//check token in the local storage
if(localStorage.jwtToken){
  //set auth token to local storage
  setAuthToken(localStorage.jwtToken);
  //set current user and get user info
  const decoded = jwt_decode(localStorage.jwtToken);

  //dispatch the action
  store.dispatch(setCurrentUser(decoded));

  //check the expired Token
  const currentTime = Date.now() / 1000;

  if(decoded.exp < currentTime){
    
    store.dispatch(logoutUser())
    //TODO: clear current profile
    store.dispatch(clearCurrentProfile())
    //Redirect the user to login
    window.location.href = '/login'
  }
}


class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Router>
          <div className="App">
            <Navbar />
              <Route exact path="/" component={Landing} />
              <div className="container">
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Switch>
                  <PrivateRoute exact path="/dashboard" component={Dashboard} />
                </Switch>
              </div>
          <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
