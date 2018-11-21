import React from "react";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";

import { increasePost, decreasePost } from '../../actions/post';

let PostCard = (props) => {

  const convertDateToStr = (date) => {
    const strdate = new Date(date);
    return strdate.toDateString();
  }

  const  seeDetails = (post) => {
    props.history.push(`/${post.category}/${post.id}`);
  }

  const { post } = props;
  return (
    <React.Fragment>
      <div className="post-card" key={post.id}>
        <div className={"post-card__user-"+post.category}>
          <div className={"post-card__avatar-"+post.category} />
          <div className="post-card__username">{post.author}</div>
        </div>
        <div className="post-card__body">
          <div className="post-card__header">
            <div className="post-card__title">{post.title}</div>
            <div className="post-card__details-icon" onClick={() => { seeDetails(post) }} />
          </div>
          <div className="post-card__infos">
            <div className={"post-card__category-"+post.category}>{post.category && post.category.toUpperCase()}</div>
            <div className="post-card__date">{post.timestamp && `Created in: ${convertDateToStr(post.timestamp)}`}</div>
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
            <div className="post-card__emotion" onClick={() => {props.incrementCount(post)}}>
              <div className="post-card__like-button"/>
              <div className="post-card__emotion-label">Like</div>
            </div>
            <div className="post-card__emotion"  onClick={() => {props.decreaseCount(post)}}>
              <div className="post-card__dislike-button" />
              <div className="post-card__emotion-label">Dislike</div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );

}

const mapStateToProps = (state) => {
   const { postReducer: { allPosts, categoryPosts } } = state;
   return { allPosts, categoryPosts };
 };

 const mapDispatchToProps = (dispatch, ownProps) => {
   return {
     incrementCount: (post) => {
       dispatch(increasePost(post))
     },
     decreaseCount: (post) => {
      dispatch(decreasePost(post))
    }
   }
 }

PostCard =  withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PostCard));

export default PostCard;