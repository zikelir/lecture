import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestAllPosts } from "../../actions/postsAction.js";

class Categories extends React.Component {
  state = {
    ordered: '',
    allPosts: [],
  }

  componentDidMount() {
    this.props.requestAllPosts();
  }

  render() {
    return (
      <div className="categories">
        <div className="categories__title">{window.location.pathname === '/' ? 'All' : window.location.pathname} Posts</div>
        <div className="categories__buttons">
          <div className="categories__button-add-post">Add Post</div>
          <select type="" placeholder="Filter by..." className="categories__button-filter-by" value={this.state.ordered}>
            <option value="" defaultValue>Order by...</option>
            <option value="byDate">Ordered by date...</option>
            <option value="byLikes">Ordered by likes...</option>
          </select>
        </div>
        <div>{JSON.stringify(this.props)}</div>
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
const mapDispatchToProps = dispatch =>
 bindActionCreators({ requestAllPosts }, dispatch);

 Categories = connect(
 mapStateToProps,
 { requestAllPosts }
)(Categories);


export default Categories;
