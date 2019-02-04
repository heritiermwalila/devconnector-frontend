import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types'; //get the component props type
import { connect } from 'react-redux'; //this allow us to connect our component to the store
import { registerUser } from '../../actions/authActions'; //this an action which will be passed to the reducer
import TextField from '../common/TextField';
import Button from '../common/Button';


class Register extends Component {
    constructor(){
        super();
        this.state = {
            name:'',
            email:'',
            password:'',
            password2:'',
            errors:{}
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount(){
        if(this.props.auth.isAuthenticated){
            this.props.history.push('/dashboard')
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({errors:nextProps.errors});
        }
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }
    onSubmit(e){
        e.preventDefault();

        //new user object
        const newUser = {
            name:this.state.name,
            email:this.state.email,
            password:this.state.password,
            password2:this.state.password2
        }
       
        if(this.state.password !== this.state.password2){
            const password2 = 'This password does not match the above';
            this.setState({errors:{...this.state.errors, password2}})
        }else{
            /**
             * @param this.props.history allowing us to pass a redirect action to the 
             * @param registerUser action
             */
            this.props.registerUser(newUser, this.props.history);
            
        }

        
    }
  render() {
      const { errors } = this.state;
    return (
        <div className="register">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center">Sign Up</h1>
                        <p className="lead text-center">Create your DevConnector account</p>
                        <form onSubmit={this.onSubmit}>
                            
                            <TextField type="text" name="name" value={this.state.name} onChange={this.onChange} error={errors.name} placeholder="Name"/>
                            <TextField type="email" name="email" value={this.state.email} onChange={this.onChange} error={errors.email} info="This site uses Gravatar so if you want a profile image, use a Gravatar email" placeholder="Email"/>
                            <TextField type="password" name="password" value={this.state.password} onChange={this.onChange} error={errors.password} placeholder="Password"/>
                            <TextField type="password" name="password2" value={this.state.password2} onChange={this.onChange} error={errors.password2} placeholder="Confirm password"/>
                            <Button type="submit" value="Register account" />
                            
                        </form>
                    </div>
                </div>
            </div>
      </div>
    )
  }
}

Register.propTypes = {
    registerUser:PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired,
    errors:PropTypes.object.isRequired

}

const mapStateToProps = (state)=>({
    auth:state.auth,
    errors:state.errors
})

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
