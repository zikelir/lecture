import React from "react";
import { Link } from 'react-router-dom';
// import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// import { requestCategories } from "../../actions/categoriesAction.js";

class PostCard extends React.Component {
  render() {
    const { post } = this.props;
    console.log(post);
    return (
      <React.Fragment>
        <div className="post-card">
          <div className="post-card__user">
            <div className="post-card__avatar" />
            {/* <div>{JSON.stringify(post)}</div> */}
            <div className="post-card__username">{post.author}</div>
          </div>
          <div className="post-card__body">
            <div className="post-card__header">
              <div className="post-card__title">{post.title}</div>
              <div className="post-card__details-icon" />
            </div>
            <div className="post-card__infos">
              <div className="post-card__category">{post.category}</div>
              <div className="post-card__date">timestamp</div>
              <div className="post-card__thumbs-up">
                <div className="post-card__thumbs-up-icon" />
                <div className="post-card_thumbs-up-count">upvote</div>
              </div>
              <div className="post-card__thumbs-down">
                <div className="post-card__thumbs-up-down" />
                <div className="post-card_thumbs-down-count">downvote</div>
              </div>
            </div>
            <div className="post-card__content">{post.body}</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

// const mapStateToProps = (state) => {
//    const { categoriesReducer: { categories } } = state;
//    return { categories };
//  };
// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ requestCategories }, dispatch);

PostCard = connect(
  // mapStateToProps,
  // { requestCategories }
)(PostCard);

export default PostCard;