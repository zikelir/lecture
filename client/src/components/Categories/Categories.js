import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from "redux";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { requestAllPosts } from "../../actions/postsAction.js";

import PostCard from '../PostCard/PostCard.js';

class Categories extends React.Component {
  state = {
    ordered: '',
    allPosts: [],
  }

  componentDidMount() {
    // this.props.requestAllPosts();
  }

  render() {
    const { allPosts } = this.props;
    return (
      <div className="categories">
        <div className="categories__title">ALL Posts</div>
        <div className="categories__buttons">
          <Link
              to="/addPost"
              className="categories__button-add-post"
            >Add Post</Link>
          {/* <div className="categories__button-add-post">Add Post</div> */}
          <select type="" placeholder="Filter by..." className="categories__button-filter-by" value={this.state.ordered}>
            <option value="" defaultValue>Order by...</option>
            <option value="byDate">Ordered by date...</option>
            <option value="byLikes">Ordered by likes...</option>
          </select>
        </div>
        <div className="categories__posts">
          {allPosts ? allPosts.map(item => {
            return <PostCard post={item} key={item.id} />;
          }) : ''}
        </div>
      </div>
    );
  }
};

Categories.propTypes = {

};

const mapStateToProps = (state) => {
  const { postsReducer: { allPosts } } = state;
  return { allPosts };
};
// const mapDispatchToProps = dispatch =>
//  bindActionCreators({ requestAllPosts }, dispatch);

 Categories = withRouter(connect(
 mapStateToProps,
//  { requestAllPosts }
)(Categories));


export default Categories;
