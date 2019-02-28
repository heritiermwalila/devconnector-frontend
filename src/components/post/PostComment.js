import React, { Component } from 'react'
import TextArea from '../common/TextArea'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getPost, addComment } from '../../actions/postActions';
import Comments from './Comments';

class PostComment extends Component {
  constructor(props){
    super(props)
    this.state = {
      text:'',
      errors:{}
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount(){
    this.props.getPost(this.props.postId)
  }
  onSubmit = (e)=>{
    e.preventDefault();

    const {user} = this.props.auth;
    const comment = {
      text:this.state.text,
      name:user.name,
      avatar:user.avatar

    }

    this.props.addComment(this.props.postId, comment);
    this.setState({text:''})
  }

  onChange = (e)=>{
    this.setState({[e.target.name]:e.target.value});
  }
  render() {
    const { post } = this.props.post
    return (
      <div className="col-md-12">

      <div className="card card-body mb-3">
          <div className="row">
            <div className="col-md-2">
              <Link to="profile.html">
                <img className="rounded-circle d-none d-md-block" src={post.avatar}
                  alt="" />
              </Link>
              <br />
              <p className="text-center">{post.name}</p>
            </div>
            <div className="col-md-10">
              <p className="lead">{post.text}</p>
            </div>
          </div>
      </div>

      <div className="post-form mb-3">
        <div className="card card-info">
            <div className="card-header bg-info text-white">
            Say Somthing...
            </div>
            <div className="card-body">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                    <TextArea name="text" value={this.state.text} onChange={this.onChange} placeholder="Create a post" />
                    </div>
                    <button type="submit" className="btn btn-dark">Submit</button>
                </form>
            </div>
        </div>
      </div>
      {/* { (post.comments === null) ? (<h2>No Comment yet!</h2>) :  post.comments.map(comment=>(
        console.log(comment)
      ))} */}
      </div>
    )
  }
}
const mapStateToProps = state=>({
  post:state.post,
  errors:state.errors,
  auth:state.auth
})
export default connect(mapStateToProps, {getPost, addComment})(PostComment)
