import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextArea from '../common/TextArea';
import { connect } from 'react-redux'
import { addPost } from '../../actions/postActions';

class PostForm extends Component {

    constructor(props){
        super(props)
        this.state = {
            text:'',
            errors:{}
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({
                errors:nextProps.errors
            })
        }
    }

    onChange = (e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit = (e)=>{
        e.preventDefault()
        const { user } = this.props.auth;
        
        const postData = {
            text:this.state.text,
            name:user.name,
            avatar:user.avatar,
        }
        this.props.addPost(postData)
        this.setState({text:''})
    }

  render() {
      const { errors } = this.state
    return (
        <div className="post-form mb-3">
        <div className="card card-info">
          <div className="card-header bg-info text-white">
            Say Somthing...
          </div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
              <TextArea name="text" placeholder="Create a post" onChange={this.onChange} value={this.state.text} error={errors.text}/>
              </div>
              <button type="submit" className="btn btn-dark">Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

PostForm.propTypes = {
    addPost:PropTypes.func.isRequired,
    post:PropTypes.object.isRequired,
    errors:PropTypes.object.isRequired,
    auth:PropTypes.object.isRequired
}
const mapStateToProps = state=>({
    post:state.post,
    errors:state.errors,
    auth:state.auth
})
export default connect(mapStateToProps, {addPost})(PostForm)

