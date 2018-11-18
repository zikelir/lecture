import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { getPostDetails, getPostComments } from '../../utils/post';
import { increasePost, decreasePost, deletePost } from '../../utils/post';
import { addComment } from '../../utils/comment';
import PostComment from '../PostComment/PostComment';

class PostDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      comment: '',
    }
  }

  componentDidMount() {
    if(this.props.match.params.post_id) {
      this.props.dispatch(getPostDetails(this.props.match.params.post_id));
      this.props.dispatch(getPostComments(this.props.match.params.post_id));
    }
  }

  incrementPosts = (post) => {
    this.props.dispatch(increasePost(post));
    this.props.dispatch(getPostDetails(this.props.match.params.post_id));
  }

  decrementPosts = (post) => {
    this.props.dispatch(decreasePost(post));
    this.props.dispatch(getPostDetails(this.props.match.params.post_id));
  }

  deletePost = (post) => {
    console.log(post);
    this.props.dispatch(deletePost(post));
    this.props.history.push(`/${post.category}`);
  }

  convertDateToStr = (date) => {
    const strdate = new Date(date);
    return strdate.toDateString();
  }

  handleAuthor = (e) => {
    this.setState({author: e.target.value});
  }

  handleComment = (e) => {
    this.setState({comment: e.target.value});
  }

  saveComment = (post) => {
    const comment = {
      id: this.genetateId(),
      timestamp: Date.now(),
      body: this.state.comment,
      author: this.state.author,
      parentId: post.id,
    };
    this.props.dispatch(addComment(comment));
    this.props.dispatch(getPostComments(this.props.match.params.post_id));
    this.setState({author: '', comment: ''});
  }



  genetateId = () => {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 25; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  };

  render() {
    const { post, postComments } = this.props;
    return (
      <React.Fragment>
        <div className="post-details" key={post.id}>
          <div className="post-details__user">
            <div className="post-details__avatar" />
            <div className="post-details__username">{post.author}</div>
          </div>
          <div className="post-details__body">
            <div className="post-details__header">
              <div className="post-details__title">{post.title}</div>
            </div>
            <div className="post-details__infos">
              <div className="post-details__category">{post.category && post.category.toUpperCase()}</div>
              <div className="post-details__date">{post.timestamp && `Created in: ${this.convertDateToStr(post.timestamp)}`}</div>
              {
                post.voteScore >= 0 ?
                  (<div className="post-details__thumbs-up">
                    <div className="post-details__thumbs-up-icon" />
                    <div className="post-details__thumbs-up-count">{post.voteScore} likes</div>
                  </div>)
                 :
                  (<div className="post-details__thumbs-down">
                    <div className="post-details__thumbs-down-icon" />
                    <div className="post-details_thumbs-down-count">{post.voteScore} dislikes</div>
                  </div>)
              }
            <div className="post-details__comment-count">{post.commentCount} Comments</div>
            </div>
            <div className="post-details__content">{post.body}</div>
            <div className="post-details__emotion-buttons">
              <div className="post-details__emotion" onClick={() => {this.incrementPosts(post)}}>
                <div className="post-details__like-button"/>
                <div className="post-details__emotion-label">Like</div>
              </div>
              <div className="post-details__emotion"  onClick={() => {this.decrementPosts(post)}}>
                <div className="post-details__dislike-button" />
                <div className="post-details__emotion-label">Dislike</div>
              </div>
              <div className="post-details__emotion"  onClick={() => {}}>
                <div className="post-details__edit-button" />
                <div className="post-details__emotion-label">Edit</div>
              </div>
              <div className="post-details__emotion"  onClick={() => {this.deletePost(post)}}>
                <div className="post-details__delete-button" />
                <div className="post-details__emotion-label">Delete</div>
              </div>
            </div>
            <div className="post-details__comment-input">
              <div className="post-details__comment-label">Author:</div>
                <input type="text" className="post-details__make-comment" onChange={this.handleAuthor} value={this.state.author} required/>
                <div className="post-details__comment-label">Comment:</div>
                <textarea className="post-details__make-comment" onChange={this.handleComment} value={this.state.comment} required/>
                <div className="post-details__send-comment-button" onClick={() => this.saveComment(post)}>SEND ></div>
            </div>
          </div>
          <div className="post-details__comments">
                {postComments && postComments.map(item => {
                  return (<div className="post-details__comment" key={item.id}>
                          <PostComment comment={item}/>
                        </div>)
                })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  const { postReducer: { post, postComments } } = state;
  return { post, postComments };
};

PostDetails = withRouter(connect(
  mapStateToProps,
)(PostDetails));


export default PostDetails;
