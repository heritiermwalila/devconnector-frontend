import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Moment from 'react-moment';
import { deleteEducation } from '../../actions/profileActions';

class Education extends Component {

    onDeleteClick = (id)=>{
        this.props.deleteEducation(id);
    }
  render() {
      const education = this.props.education.map(educ=>
        <tr key={educ._id}>
            <td>{educ.school}</td>
            <td>{educ.degree}</td>
            <td><Moment format="DD/MM/YYYY">{educ.from}</Moment> - {educ.to === null ? ('Now'):<Moment format="DD/MM/YYYY">{educ.to}</Moment>}</td>
            <td><button type="button" className="btn btn-danger" onClick={this.onDeleteClick.bind(this, educ._id)}>Delete</button></td>
        </tr>
        );
    return (
      <table className="table">
            <thead>
                <tr>
                <th>School</th>
                <th>Degree</th>
                <th>Year</th>
                <th></th>
                </tr>
                
            </thead>
            <tbody>

            {education}
            </tbody>
      </table>
    )
  }
}
Education.propTypes = {
    deleteEducation:PropTypes.func.isRequired
}
export default connect(null, {deleteEducation})(Education)
