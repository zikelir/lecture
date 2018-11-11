import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestCategoryPosts } from '../../actions/categoryPostsAction';

import PostCard from '../PostCard/PostCard.js';

class OtherCategories extends React.Component {
  state = {
    ordered: '',
    categoryPosts: [],
  }

  componentDidMount() {
    this.props.requestCategoryPosts();
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.categoryPosts !== nextProps.categoryPosts) {
      this.props.requestCategoryPosts();
    }
  }

  render() {
    const { categoryPosts } = this.props;
    return (
      <div className="categories">
        <div className="categories__title">{window.location.pathname.replace('/','')} Posts</div>
        <div className="categories__buttons">
          <div className="categories__button-add-post">Add Post</div>
          <select type="" placeholder="Filter by..." className="categories__button-filter-by" value={this.state.ordered}>
            <option value="" defaultValue>Order by...</option>
            <option value="byDate">Ordered by date...</option>
            <option value="byLikes">Ordered by likes...</option>
          </select>
        </div>
        <div className="categories__posts">
          {categoryPosts ? categoryPosts.map(item => {
            return <PostCard post={item} category={``} />;
          }) : ''}
        </div>
      </div>
    );
  }
};

OtherCategories.propTypes = {

};

const mapStateToProps = (state) => {
  console.log(state);
  const { categoryPostsReducer: { categoryPosts } } = state;

  return { categoryPosts };
};
const mapDispatchToProps = dispatch =>
 bindActionCreators({ requestCategoryPosts }, dispatch);

 OtherCategories = connect(
 mapStateToProps,
 { requestCategoryPosts }
)(OtherCategories);


export default OtherCategories;
