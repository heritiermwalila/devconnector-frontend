import React, { Component } from 'react'
import { Link } from 'react-router-dom' 
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getProfile } from '../../actions/profileActions'
import Spinner from '../common/Spinner';

class Dashboard extends Component {
  componentDidMount(){
    this.props.getProfile();
  }
  render() {
    const { user } = this.props.auth
    const { profile, loading } = this.props.profile
    let dashboardContent;
    if(profile === null || loading === true){
      dashboardContent = <Spinner />
    }else{
      //check if the user has a profile
      if(Object.keys(profile).length > 0){
        dashboardContent = <h4>TODO: User profile</h4>
      }else{
        //user logged in but has no profile
        dashboardContent = (
          <div>
            <p className="lead text-muted">Welcome { user.name }</p>
            <p>You have no setup your profile yet, please click the button below to setup your profile</p>
            <Link to="/create-profile" className="btn btn-lg btn-info">Create profile</Link>
          </div>
        )
      }
    }
    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Dashboard</h1>
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
Dashboard.propTypes = {
  getProfile:PropTypes.func.isRequired,
  auth:PropTypes.object.isRequired,
  profile:PropTypes.object.isRequired
}

const mapStateToProps = state=>({
  profile:state.profile,
  auth:state.auth
})

export default connect(mapStateToProps, { getProfile })(Dashboard)
