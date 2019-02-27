import React, { Component } from 'react'
import isEmpty from '../../utils/isEmpty';
import Moment from 'react-moment'

class ProfileCreds extends Component {
  render() {
      const { profile } = this.props;
    return (
        <div className="row">
            <div className="col-md-6">
            <h3 className="text-center text-info">Experience</h3>
            <ul className="list-group">
            {isEmpty(profile.experiences) ? null : profile.experiences.map((experience, index)=>(
                <li className="list-group-item" key={index}>
                <h4>{experience.company}</h4>
                <p><Moment format="DD/MM/YYYY">{experience.from}</Moment> - {experience.current === false ? (<span><Moment format="DD/MM/YYYY">{experience.to}</Moment></span>) : (<span>Current</span>)}</p>
                <p>
                    <strong>Position:</strong> {experience.title}
                </p>
                <p>
                    {isEmpty(experience.description) ? null : (<span><strong>Description:</strong> {experience.description}</span>)}
                    </p>
                </li>
            ))}
                
            </ul>
            </div>
            <div className="col-md-6">
            <h3 className="text-center text-info">Education</h3>
                <ul className="list-group">
                {isEmpty(profile.educations) ? null : profile.educations.map((education, index)=>(
                    <li className="list-group-item" key={index}>
                    <h4>{education.school}</h4>
                    <p><Moment format="DD/MM/YYYY">{education.from}</Moment> - {education.current === false ? (<span><Moment format="DD/MM/YYYY">{education.to}</Moment></span>) : (<span>Current</span>)}</p>
                    <p>
                        <strong>Degree: </strong>{education.degree}</p>
                    <p>
                        <strong>Field Of Study: </strong>{education.fieldOfStudy}</p>
                        <p>
                        <strong>Description:</strong> {education.description}</p>
                    </li>
                ))}
                    
                </ul>
            </div>
      </div>

    )
  }
}

export default ProfileCreds
