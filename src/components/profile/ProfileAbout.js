import React, { Component } from 'react'
import isEmpty from '../../utils/isEmpty';

class ProfileAbout extends Component {
  render() {
      const {profile} = this.props
      const name = profile.user.name.trim().split(' ')[0]
    return (
        <div className="row">
            <div className="col-md-12">
            <div className="card card-body bg-light mb-3">
                <h3 className="text-center text-info">{name}'s Bio</h3>
                <p className="lead text-center">{profile.bio}
                </p>
                <hr />
                <h3 className="text-center text-info">Skill Set</h3>
                <div className="row">
                <div className="d-flex flex-wrap justify-content-center align-items-center">
                {isEmpty(profile.skills) ? null: profile.skills.map((skill, index)=>(
                    <div className="p-3 text-center" key={index}>
                    <i className="fa fa-check"></i> {skill}</div>
                ))}
                    
                </div>
                </div>
            </div>
            </div>
        </div>

    )
  }
}

export default ProfileAbout
