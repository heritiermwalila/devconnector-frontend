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
import CreateProfile from './components/create-profile/CreateProfile';
import EditProfile from './components/edit-profile/EditProfile';
import AddExperience from './components/add-credentials/AddExperience';
import AddEducation from './components/add-credentials/AddEducation';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import NotFound from './components/not-found/Not-Found';
import Posts from './components/post/Posts';
import Post from './components/post/Post';

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
                <Switch>
                  <PrivateRoute exact path="/create-profile" component={CreateProfile} />
                </Switch>
                <Switch>
                  <PrivateRoute exact path="/edit-profile" component={EditProfile} />
                  <PrivateRoute exact path="/add-experience" component={AddExperience} />
                  <PrivateRoute exact path="/add-education" component={AddEducation} />
                  <PrivateRoute exact path="/post-feed" component={Posts} />
                  <PrivateRoute exact path="/post/:id" component={Post} />
                </Switch>
                <Route exact path="/profiles" component={Profiles} />
                <Route exact path="/profile/:handle" component={Profile} />
                <Route exact path="/not-found" component={NotFound} />
                
              </div>
          <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
