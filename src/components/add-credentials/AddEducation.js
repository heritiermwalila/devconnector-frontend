import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TextField from '../common/TextField';
import TextArea from '../common/TextArea';
import Button from '../common/Button';
import { addEducation } from '../../actions/profileActions';

class AddEducation extends Component {

    constructor(props){
        super(props);
        this.state={
            school:'',
            degree:'',
            fieldOfStudy:'',
            from:'',
            to:'',
            current:false,
            description:'',
            disabled:false,
            errors:{}
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({errors:nextProps.errors})
        }
    }

    onChange = (e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit = (e) =>{
        e.preventDefault();
        const EdData = {
            school:this.state.school,
            degree:this.state.degree,
            fieldOfStudy:this.state.fieldOfStudy,
            from:this.state.from,
            to:this.state.to,
            current:this.state.current,
            description:this.state.description,
        }

        this.props.addEducation(EdData, this.props.history)
        

    }
    onCurrentClick = ()=>{
        this.setState({current:!this.state.current})
    }
  
  render() {
      const { errors } = this.state
      
    return (
      <div className="add-experiences">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                    <Link to="/dashboard" className="btn btn-light">Go Back</Link>
                        <h1 className="display-4 text-center">Add Education</h1>
                        <p className="lead text-center">Add your education to your profile</p>
                        <small className="d-block pd-3">* = required field is required</small>
                        <form onSubmit={this.onSubmit}>
                            <TextField type="text" placeholder="* School or Bootcamp" value={this.state.school} onChange={this.onChange} name="school" error={errors.school} />
                            <TextField type="text" placeholder="* Degree or Certificate" value={this.state.degree} onChange={this.onChange} name="degree" error={errors.degree}/>
                            <TextField type="text" placeholder="Field Of Studies" value={this.state.fieldOfStudy} onChange={this.onChange} name="fieldOfStudy"/>
                            <TextField type="date"  value={this.state.from} onChange={this.onChange} name="from" label="From Date" error={errors.from}/>
                            <TextField type="date"  value={this.state.to} onChange={this.onChange} name="to" label="to Date" disabled={this.state.current ? 'disabled': ''}/>
                            <div className="form-check mb-4">
                                <input type="checkbox" value={this.state.current} checked={this.state.current} className="form-check-input" onChange={this.onCurrentClick}/>
                                <label htmlFor="current" className="form-check-label">Current Studing</label>
                            </div>
                            <TextArea info="Tell us about your experience and what you learned" name="description" placeholder="Program Description" value={this.state.description} onChange={this.onChange}/>
                            <Button type="submit" value="Add Education"/>
                        </form>
                    </div>
                </div>
            </div>
      </div>
    )
  }
}
AddEducation.propTypes = {
    profile:PropTypes.object.isRequired,
    errors:PropTypes.object.isRequired
}

const mapStateToProps = state=>({
    profile:state.profile,
    errors:state.errors
})
export default connect(mapStateToProps, {addEducation})(withRouter(AddEducation));