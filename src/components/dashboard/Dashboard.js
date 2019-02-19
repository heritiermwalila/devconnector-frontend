import React, { Component } from 'react'
import { Link } from 'react-router-dom' 
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getProfile, deleteAccount } from '../../actions/profileActions'
import Spinner from '../common/Spinner';
import ProfileActions from './ProfileActions';
import Experience from './Experience';
import Education from './Education';


class Dashboard extends Component {
  componentDidMount(){
    this.props.getProfile();
  }
  deleteAccountClick = (e)=>{
    this.props.deleteAccount()
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
        dashboardContent = (
          <div>
          <p className="lead text-muted">Welcome <Link to={`/profile/${profile.handle}`}>{ user.name }</Link></p>
          <ProfileActions />

          <h4 className="mb-2">Experience Credentials</h4>
          <Experience experience={profile.experiences}/>

          <h4 className="mb-2">Education Credentials</h4>
          <Education education={profile.educations}/>
          <div style={{marginBottom:'16px'}}/>
          <button type="button" onClick={this.deleteAccountClick.bind(this)} className="btn btn-danger">Delete My Account</button>
          </div>
        );
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
  profile:PropTypes.object.isRequired,
  deleteAccount:PropTypes.func.isRequired
}

const mapStateToProps = state=>({
  profile:state.profile,
  auth:state.auth
})

export default connect(mapStateToProps, { getProfile, deleteAccount })(Dashboard)
