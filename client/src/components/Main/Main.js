import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import Header from '../Header/Header.js';
// import Categories from '../Categories/Categories.js';
import OtherCategories from '../OtherCategories/OtherCategories.js';
import AddPost from '../AddPost/AddPost.js';
import PostDetails from '../PostDetails/PostDetails.js';
import { handleInitialData } from '../../actions/shared';

class Main extends React.Component {
  state = {
    categories: [],
  };

  componentDidMount() {
    this.props.getInitialData();
  }

  generateCategoryComponents = (categories) => {
    if(categories) {
      return categories.map((item, key) => <Route exact path={`/${item}`} component={OtherCategories} key={key} />);
    }
  }

  render() {
    const { categories } = this.props;
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route
            exact
            path='/'
            render={props => (
              <OtherCategories
                {...props}
              />
            )}
          />
          {categories ? this.generateCategoryComponents(categories) : null}
          <Route exact path="/addPost" component={AddPost} />
          <Route path="/:category/:post_id" component={PostDetails} />
        </Switch>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  if(state.categoriesReducer.categories) {
    const { categoriesReducer: { categories } } = state;
    return { categories };
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getInitialData: () => {
      dispatch(handleInitialData())
    }
  }
}

Main = withRouter(connect(
 mapStateToProps,
 mapDispatchToProps
)(Main));


export default Main;
