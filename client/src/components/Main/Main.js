import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Header from '../Header/Header.js';
import Subheader from '../Subheader/Subheader.js';
import Categories from '../Categories/Categories.js';
import OtherCategories from '../OtherCategories/OtherCategories.js';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  generateCategoryComponents = (categories) => {
    if(categories) {
      return categories.map((item, key) => <Route exact path={`/${item.name}`} component={OtherCategories} key={key} />);
    }
  }

  render() {
    const { categories } = this.props;
    return (
      <React.Fragment>
        <Header />
        <Subheader />
        <Switch>
          <Route
            exact
            path='/'
            render={props => (
              <Categories
                {...props}
              />
            )}
          />
          {categories ? this.generateCategoryComponents(categories) : null}
        </Switch>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  if(state.categoriesReducer.categories) {
    const { categoriesReducer: { categories: { categories } } } = state;
    return { categories };
  }
};

Main = withRouter(connect(
 mapStateToProps,
)(Main));


export default Main;
