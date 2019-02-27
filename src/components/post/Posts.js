import React, { Component } from 'react'
import { connect } from 'react-redux'
import Spinner from '../common/Spinner'
import PostForm from './PostForm';
import PostItems from './PostItems';
import { getPosts } from '../../actions/postActions';

class Posts extends Component {

    componentDidMount(){
        this.props.getPosts();
    }
  render() {
    const { posts } = this.props.post
    let postItem
    if(posts === null){
        postItem = <Spinner />;
    }else{

        postItem = posts.map((post, id) => (
            <div className="posts" key={id}>
                <PostItems post={post}/>
            </div>
        ))
    }
    return (
        <div className="feed">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
                <PostForm />
            
                {postItem}
            </div>
          </div>
        </div>
      </div>
    
    )
  }
}
const mapStateToProps = state=>({
    post:state.post,
    errors:state.errors
})
export default connect(mapStateToProps, {getPosts})(Posts)
