import React, { Component } from 'react'
import PostComment from './PostComment';


class Post extends Component {


  render() {
      const  postId = this.props.match.params.id
    return (
      <div>
        <PostComment postId={postId} />
      </div>
    )
  }
}

export default Post
