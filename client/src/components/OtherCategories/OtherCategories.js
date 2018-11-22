import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { handleCategoryPost } from '../../actions/category';
import { handleInitialData } from '../../actions/shared';


import PostCard from '../PostCard/PostCard.js';

class OtherCategories extends React.Component {
  state = {
    ordered: '',
    allPosts: [],
    categoryPosts: [],
    isSorted: false,
  }

  componentDidMount() {
    this.props.getCategoryPostData();
    this.props.getInitialData();
  }

  // componentWillReceiveProps(nextProps) {
  //   if(this.props.location.pathname !== nextProps.location.pathname) {
  //     this.props.dispatch(handleCategoryPost(this.props.location.pathname));
  //     return true;
  //   }
  // }

  sortPosts = ((posts, type, category) => {
    const postArr = posts;
    if(category === 'other') {
      if(type === 'crescending') {
        const sorted = postArr.sort((item1, item2) => {
          return item2.timestamp - item1.timestamp
        });
        this.setState({categoryPosts: sorted, isSorted: true});
      } else {
        const sorted = postArr.sort((item1, item2) => {
          return item1.timestamp - item2.timestamp
        });
        this.setState({categoryPosts: sorted, isSorted: true});
      }
    } else {
      if(type === 'crescending') {
        const sorted = postArr.sort((item1, item2) => {
          return item2.timestamp - item1.timestamp
        });
        this.setState({allPosts: sorted, isSorted: true});
      } else {
        const sorted = postArr.sort((item1, item2) => {
          return item1.timestamp - item2.timestamp
        });
        this.setState({allPosts: sorted, isSorted: true});
      }
    }
  });

  handleSelectCategoryPosts = ((e) => {
    const type = e.target.value;
    this.sortPosts(this.props.categoryPosts, type, 'other')
  });

  handleSelectAllPosts = ((e) => {
    const type = e.target.value;
    this.sortPosts(this.props.allPosts, type, 'all');
  });


  render() {
    const { categoryPosts, allPosts } = this.props;
    return (
      <React.Fragment>
        <div className="categories" key={this.props.location.key}>
          <div className="categories__title">{this.props.location.pathname !== '/' ? window.location.pathname.replace('/','').toUpperCase() : 'All'} Posts</div>
          <div className="categories__buttons">
            <Link
                  to="/addPost"
                  className="categories__button-add-post"
                >Add Post</Link>
            <select type="" placeholder="Filter by..." className="categories__button-filter-by" value={this.state.ordered} onChange={this.props.location.pathname !== '/' ? this.handleSelectCategoryPosts : this.handleSelectAllPosts}>
              <option className="categories__option" value="" defaultValue>Order by...</option>
              <option className="categories__option" value="crescending">Ordered by decreasing date...</option>
              <option className="categories__option" value="asending">Ordered by ascending date...</option>
            </select>
          </div>
          {
            this.props.location.pathname !== '/' ?
            <div className="categories__posts">
              {categoryPosts ? categoryPosts.map(item => {
                return <PostCard post={item} key={item.id} />;
              }) : ''}
            </div>
            : <div className="categories__posts">
            {allPosts ? allPosts.map(item => {
              return <PostCard post={item} key={item.id} />;
            }) : ''}
          </div>
          }
        </div>
      </React.Fragment>
    );
  }
};

const mapStateToProps = (state) => {
  const { categoryPostsReducer: { categoryPosts }, postsReducer: { allPosts } } = state;

  return { categoryPosts, allPosts };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getInitialData: () => {
      dispatch(handleInitialData())
    },
    getCategoryPostData: () => {
      dispatch(handleCategoryPost())
    }
  }
}

 OtherCategories = withRouter(connect(
 mapStateToProps,
 mapDispatchToProps
)(OtherCategories));


export default OtherCategories;
