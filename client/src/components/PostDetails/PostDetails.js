import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { getPostDetails, getPostComments } from '../../utils/post';
import { increasePost, decreasePost } from '../../utils/post';


class PostDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if(this.props.match.params.post_id) {
      this.props.dispatch(getPostDetails(this.props.match.params.post_id));
      this.props.dispatch(getPostComments(this.props.match.params.post_id));
    }
  }

  incrementPosts = (post) => {
    this.props.dispatch(increasePost(post));
  }

  decrementPosts = (post) => {
    this.props.dispatch(decreasePost(post));
  }

  convertDateToStr = (date) => {
    const strdate = new Date(date);
    // return strdate.toDateString();
  }

  seeDetails = (post) => {
    console.log(post);
    this.props.history.push(`/${post.category}/${post.id}`);
  }

  render() {
    console.log(this.props, 'render');
    const { post } = this.props;
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
              <div className="post-details__details-icon" onClick={() => { this.seeDetails(post) }} />
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
            </div>
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
