import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TextField from '../common/TextField';
import TextArea from '../common/TextArea';
import Button from '../common/Button';
import { addExperience } from '../../actions/profileActions';

class AddExperience extends Component {

    constructor(props){
        super(props);
        this.state={
            title:'',
            company:'',
            location:'',
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
        const ExpData = {
            title:this.state.title,
            company:this.state.company,
            location:this.state.location,
            from:this.state.from,
            to:this.state.to,
            current:this.state.currentJob,
            description:this.state.description,
        }

        this.props.addExperience(ExpData, this.props.history)
        

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
                        <h1 className="display-4 text-center">Add Experiences</h1>
                        <p className="lead text-center">Add your experience to your profile</p>
                        <small className="d-block pd-3">* = required field is required</small>
                        <form onSubmit={this.onSubmit}>
                            <TextField type="text" placeholder="* Job Title" value={this.state.title} onChange={this.onChange} name="title" error={errors.title}/>
                            <TextField type="text" placeholder="* Company" value={this.state.company} onChange={this.onChange} name="company" error={errors.company}/>
                            <TextField type="text" placeholder="Location" value={this.state.location} onChange={this.onChange} name="location"/>
                            <TextField type="date"  value={this.state.from} onChange={this.onChange} name="from" label="From Date" error={errors.from}/>
                            <TextField type="date"  value={this.state.to} onChange={this.onChange} name="to" label="to Date" disabled={this.state.current ? 'disabled': ''}/>
                            <div className="form-check mb-4">
                                <input type="checkbox" value={this.state.current} checked={this.state.current} className="form-check-input" onChange={this.onCurrentClick}/>
                                <label htmlFor="current" className="form-check-label">Current Job</label>
                            </div>
                            <TextArea info="Some of your responsabilities, etc" name="description" placeholder="Job Description" value={this.state.description} onChange={this.onChange}/>
                            <Button type="submit" value="Add Experience"/>
                        </form>
                    </div>
                </div>
            </div>
      </div>
    )
  }
}
AddExperience.propTypes= {
    profile:PropTypes.object.isRequired,
    errors:PropTypes.object.isRequired
}

const mapStateToProps = state=>({
    profile:state.profile,
    errors:state.errors
})
export default connect(mapStateToProps, {addExperience})(withRouter(AddExperience));