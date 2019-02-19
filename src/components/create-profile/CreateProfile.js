import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TextField from '../common/TextField';
import SocialField from '../common/SocialField';
import BlankButton from '../common/BlankButton';
import Button from '../common/Button';
import TextArea from '../common/TextArea';
import SelectList from '../common/SelectList';
import { createProfile } from '../../actions/profileActions';

class CreateProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
            displaySocialNetworks: false,
            handle:'',
            status:'',
            company:'',
            website:'',
            location:'',
            skills:'',
            gitusername:'',
            bio:'',
            twitter:'',
            facebook:'',
            linkedin:'',
            youtube:'',
            instagram:'',
            errors:{}
        }
        this.onChange = this.onChange.bind(this)
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({errors:nextProps.errors})
        }
    }
    onSubmit = (e)=>{
        e.preventDefault();

        const profileData = {
            handle:this.state.handle,
            status:this.state.status,
            company:this.state.company,
            website:this.state.website,
            location:this.state.location,
            skills:this.state.skills,
            gitusername:this.state.gitusername,
            bio:this.state.bio,
            twitter:this.state.twitter,
            facebook:this.state.facebook,
            linkedin:this.state.linkedin,
            youtube:this.state.youtube,
            instagram:this.state.instagram,
        }
        this.props.createProfile(profileData, this.props.history)
        
    }
    onChange = (e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    toggleSocials = () =>{
        this.setState(prevState=>({
            displaySocialNetworks:!prevState.displaySocialNetworks
        }))
    }
  render() {
      
      const {errors, displaySocialNetworks} = this.state;
      const options= [
          {label:'*Select Professional Status', value:''},
          {label:'Developer', value:'developer'},
          {label:'Junior Developer', value:'junior developer'},
          {label:'Senior Developer', value:'senior developer'},
          {label:'Manager', value:'manager'},
          {label:'Student or learning', value:'student'},
          {label:'Teacher or Instructor ', value:'teacher'},
          {label:'Inter', value:'intern'},
          {label:'Other', value:'other'},
      ]

      let showSocials = '';
      if(displaySocialNetworks){
          showSocials = (<div className="social-networks mt-4">
          <SocialField icon="fab fa-twitter" placeholder="Twitter Profile URL" name="twitter" onChange={this.onChange} value={this.state.twitter}/>
          <SocialField icon="fab fa-facebook" placeholder="Facebook Profile URL" name="facebook" onChange={this.onChange} value={this.state.facebook}/>
          <SocialField icon="fab fa-linkedin" placeholder="LinkedIn Profile URL" name="linkedin" onChange={this.onChange} value={this.state.linkedin}/>
          <SocialField icon="fab fa-youtube" placeholder="Youtube Profile URL" name="youtube" onChange={this.onChange} value={this.state.youtube}/>
          <SocialField icon="fab fa-instagram" placeholder="Instagram Profile URL" name="instagram" onChange={this.onChange} value={this.state.instagram}/>
      </div>)
      }
      
    return (
      <div className="create-profile">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h1 className="display-4 text-center">Create Your Profile</h1>
                    <p className="lead text-center">Create your profile by filling the form bellow</p>
                    <small className="d-block pd-3">* = required field is required</small>
                    <form onSubmit={this.onSubmit}>
                        <TextField type="text" name="handle" onChange={this.onChange} value={this.state.handle} placeholder="* Handle" info="A unique handle for your profile URL. Your full name, company name, nickname, etc (This CAN'T be changed later)" error={errors.handle}/>
                        <SelectList name="status" options={options} onChange={this.onChange} value={this.state.status} error={errors.status} info="Give us an idea of where you are at in your career"/>
                        <TextField type="text" name="company" onChange={this.onChange} value={this.state.company} placeholder="Company" info="Could be your own company or one you work for"/>
                        <TextField type="text" name="website" onChange={this.onChange} value={this.state.website} placeholder="Website" info="Could be your own or a company website"/>
                        <TextField type="text" name="location" onChange={this.onChange} value={this.state.location} placeholder="Location" info="City & state suggested (eg. Boston, MA)"/>
                        <TextField type="text" name="skills" onChange={this.onChange} value={this.state.skills} placeholder="Skills" info="Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)" error={errors.skills}/>
                        <TextField type="text" name="gitusername" onChange={this.onChange} value={this.state.gitusername} placeholder="Git Username" info="If you want your latest repos and a Github link, include your username"/>
                        <TextArea name="bio" onChange={this.onChange} value={this.state.bio} placeholder="A short Bio of yourself" info="Tell us a little about yourself"/>
                        <BlankButton type="button" value="Add Social Network Links" onClick={this.toggleSocials}/>

                        {showSocials}
                        
                        
                        <Button type="submit" value="Create profile"/>
                    </form>
                </div>
            </div>
        </div>
        
      </div>
    )
  }
}
CreateProfile.propTypes = {
    profile:PropTypes.object.isRequired,
    errors:PropTypes.object.isRequired
}
const mapStateToProps = state =>({
    profile:state.profile,
    errors:state.errors
})
export default connect(mapStateToProps, {createProfile})(withRouter(CreateProfile))
