import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { handleInitialData } from '../../actions/shared';

import PostCard from '../PostCard/PostCard.js';

class Categories extends React.Component {
  state = {
    ordered: '',
    allPosts: [],
    sorted: [],
    isSorted: false,
  }

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  sortPosts = ((allPosts, type) => {
    if(type === 'crescending') {
      const sorted = allPosts.sort((item1, item2) => {
        return item2.timestamp - item1.timestamp
      });
      this.setState({allPosts: sorted, isSorted: true});
    } else {
      const sorted = allPosts.sort((item1, item2) => {
        return item1.timestamp - item2.timestamp
      });
      this.setState({allPosts: sorted, isSorted: true});
    }
  });

  handleSelect = ((e) => {
    const type = e.target.value;
    this.sortPosts(this.props.allPosts, type)
  });

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
          <select type="" placeholder="Filter by..." className="categories__button-filter-by" value={this.state.ordered} onChange={this.handleSelect}>
            <option value="">Order by...</option>
            <option value="crescending">Order by decreasing date...</option>
            <option value="asending">Order by ascending date...</option>
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

const mapStateToProps = (state) => {
  const { postsReducer: { allPosts } } = state;
  return { allPosts };
};

 Categories = withRouter(connect(
 mapStateToProps,
)(Categories));


export default Categories;
