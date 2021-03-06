import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import isEmpty from '../../utils/isEmpty';

class ProfileItems extends Component {
  render() {
      const { profile } = this.props;
     
    return (
        <div className="card card-body bg-light mb-3">
        <div className="row">
          <div className="col-2">
            <img className="rounded-circle" src={profile.user.avatar} alt="" />
          </div>
          <div className="col-lg-6 col-md-4 col-8">
            <h3>{profile.user.name}</h3>
            <p>{profile.status} {isEmpty(profile.company) ? null : (<span>@{profile.company}</span>)}</p>
            <p>{profile.location}</p>
            <Link to={`/profile/${profile.handle}`} className="btn btn-info">View Profile</Link>
          </div>
          <div className="col-md-4 d-none d-lg-block">
            <h4>Skill Set</h4>
           
            <ul className="list-group">
            {profile.skills.slice(0, 4).map((skill, key)=>(
                <li className="list-group-item" key={key}>
                <i className="fa fa-check pr-1"></i>{skill}</li>
                ))}
              
              
            </ul>
          </div>
        </div>
      </div>

    )
  }
}

export default ProfileItems
