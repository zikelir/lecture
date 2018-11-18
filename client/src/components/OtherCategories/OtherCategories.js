import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// import { requestCategoryPosts } from '../../actions/categoryPostsAction';
import { handleCategoryPost } from '../../utils/category';


import PostCard from '../PostCard/PostCard.js';

class OtherCategories extends React.Component {
  state = {
    ordered: '',
    categoryPosts: [],
  }

  componentDidMount() {
    // this.props.requestCategoryPosts();
    this.props.dispatch(handleCategoryPost());
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.location.pathname !== nextProps.location.pathname) {
      // this.props.requestCategoryPosts();
      this.props.dispatch(handleCategoryPost(this.props.location.pathname));
      return true;
    }
  }

  render() {
    const { categoryPosts } = this.props;
    return (
      <div className="categories" key={this.props.location.key}>
        <div className="categories__title">{window.location.pathname.replace('/','').toUpperCase()} Posts</div>
        <div className="categories__buttons">
          <Link
                to="/addPost"
                className="categories__button-add-post"
              >Add Post</Link>
          <select type="" placeholder="Filter by..." className="categories__button-filter-by" value={this.state.ordered}>
            <option value="" defaultValue>Order by...</option>
            <option value="byDate">Ordered by date...</option>
            <option value="byLikes">Ordered by likes...</option>
          </select>
        </div>
        <div className="categories__posts">
          {categoryPosts ? categoryPosts.map(item => {
            return <PostCard post={item} key={item.id} />;
          }) : ''}
        </div>
      </div>
    );
  }
};

OtherCategories.propTypes = {

};

const mapStateToProps = (state) => {
  const { categoryPostsReducer: { categoryPosts } } = state;

  return { categoryPosts };
};
// const mapDispatchToProps = dispatch =>
//  bindActionCreators({ requestCategoryPosts }, dispatch);

 OtherCategories = withRouter(connect(
 mapStateToProps,
//  { requestCategoryPosts }
)(OtherCategories));


export default OtherCategories;
