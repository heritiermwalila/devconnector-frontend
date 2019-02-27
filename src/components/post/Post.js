import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostComment from './PostComment';
import { getPost } from '../../actions/postActions';

class Post extends Component {
    
componentDidMount(){
    this.props.getPost(this.props.match.params.id)
}

  render() {
      const { post } = this.props.post
    return (
      <div>
        <PostComment post={post}/>
      </div>
    )
  }
}
const mapStateToProps = state=>({
    post:state.post,
    errors:state.errors
})
export default connect(mapStateToProps, {getPost})(Post)
