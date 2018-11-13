import React from "react";
import { Link } from 'react-router-dom';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestPost, receivePost } from "../../actions/categoriesAction.js";
import postReducer from '../../reducers/postReducer';

import { updatePostApi } from '../../services/post.js';
import fetchPostData from '../../sagas/postSaga.js';

class PostCard extends React.Component {

  incrementPosts = (post) => {
    fetchPostData(post);
  }

  decrementPosts = (post) => {
    post.voteScore = post.voteScore -1;
    // updatePostApi(post);
  }

  render() {
    const { post, allPosts } = this.props;
    return (
      <React.Fragment>
        <div className="post-card" key={post.id}>
          <div className="post-card__user">
            <div className="post-card__avatar" />
            <div className="post-card__username">{post.author}</div>
          </div>
          <div className="post-card__body">
            <div className="post-card__header">
              <div className="post-card__title">{post.title}</div>
              <div className="post-card__details-icon" />
            </div>
            <div className="post-card__infos">
              <div className="post-card__category">{post.category.toUpperCase()}</div>
              <div className="post-card__date">{post.timestamp}</div>
              {
                post.voteScore >= 0 ?
                  (<div className="post-card__thumbs-up">
                    <div className="post-card__thumbs-up-icon" />
                    <div className="post-card__thumbs-up-count">{post.voteScore} likes</div>
                  </div>)
                 :
                  (<div className="post-card__thumbs-down">
                    <div className="post-card__thumbs-down-icon" />
                    <div className="post-card_thumbs-down-count">{post.voteScore} dislikes</div>
                  </div>)
              }
            <div className="post-card__comment-count">{post.commentCount} Comments</div>
            </div>
            <div className="post-card__content">{post.body}</div>
            <div className="post-card__emotion-buttons">
              <div className="post-card__emotion" onClick={() => {this.incrementPosts(post)}}>
                <div className="post-card__like-button"/>
                <div className="post-card__emotion-label">Like</div>
              </div>
              <div className="post-card__emotion"  onClick={() => {this.decrementPosts(post, allPosts)}}>
                <div className="post-card__dislike-button" />
                <div className="post-card__emotion-label">Dislike</div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state, 'mstp');
   const { postReducer: { allPosts, categoryPosts } } = state;
   return { allPosts, categoryPosts };
 };
const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestPost }, dispatch);

PostCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostCard);

export default PostCard;