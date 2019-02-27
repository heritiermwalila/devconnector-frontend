import React, { Component } from 'react'
import TextArea from '../common/TextArea';

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

  onSubmit = (e)=>{
    e.preventDefault();
    console.log(this.state)
  }

  onChange = (e)=>{
    this.setState({[e.target.name]:e.target.value});
  }
  render() {
    const { post } = this.props
  
    return (
      <div className="col-md-12">

      <div className="card card-body mb-3">
          <div className="row">
            <div className="col-md-2">
              <a href="profile.html">
                <img className="rounded-circle d-none d-md-block" src={post.avatar}
                  alt="" />
              </a>
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
      </div>
    )
  }
}

export default PostComment
