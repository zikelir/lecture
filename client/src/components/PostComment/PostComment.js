import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { getPostDetails, getPostComments } from '../../utils/post';
import { increasePost, decreasePost } from '../../utils/post';


class PostComment extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   // if(this.props.match.params.post_id) {
  //   //   this.props.dispatch(getPostDetails(this.props.match.params.post_id));
  //   //   this.props.dispatch(getPostComments(this.props.match.params.post_id));
  //   // }
  // }

  incrementPosts = (post) => {
    this.props.dispatch(increasePost(post));
  }

  decrementPosts = (post) => {
    this.props.dispatch(decreasePost(post));
  }

  convertDateToStr = (date) => {
    const strdate = new Date(date);
    return strdate.toDateString();
  }

  // seeDetails = (post) => {
  //   console.log(post);
  //   this.props.history.push(`/${post.category}/${post.id}`);
  // }

  render() {
    console.log(this.props, 'render');
    const { comment } = this.props;
    return (
      <React.Fragment>
        <div className="post-comment" key={comment.id}>
          <div className="post-comment__user">
            <div className="post-comment__avatar" />
            <div className="post-comment__username">{comment.author}</div>
          </div>
          <div className="post-comment__body">
            <div className="post-comment__header">
              <div className="post-comment__title">{comment.title}</div>
            </div>
            <div className="post-comment__infos">
              <div className="post-comment__date">{comment.timestamp && `Created in: ${this.convertDateToStr(comment.timestamp)}`}</div>
              {
                comment.voteScore >= 0 ?
                  (<div className="post-comment__thumbs-up">
                    <div className="post-comment__thumbs-up-icon" />
                    <div className="post-comment__thumbs-up-count">{comment.voteScore} likes</div>
                  </div>)
                 :
                  (<div className="post-comment__thumbs-down">
                    <div className="post-comment__thumbs-down-icon" />
                    <div className="post-comment_thumbs-down-count">{comment.voteScore} dislikes</div>
                  </div>)
              }
            </div>
            <div className="post-comment__content">{comment.body}</div>
            <div className="post-comment__emotion-buttons">
              <div className="post-comment__emotion" onClick={() => {this.incrementPosts(comment)}}>
                <div className="post-comment__like-button"/>
                <div className="post-comment__emotion-label">Like</div>
              </div>
              <div className="post-comment__emotion"  onClick={() => {this.decrementPosts(comment)}}>
                <div className="post-comment__dislike-button" />
                <div className="post-comment__emotion-label">Dislike</div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

// const mapStateToProps = (state) => {
//   const { postReducer: { post, postComments } } = state;
//   return { post, postComments };
// };

PostComment = withRouter(connect(
  // mapStateToProps,
)(PostComment));


export default PostComment;
