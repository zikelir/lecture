import React from "react";
import { Link, withRouter } from 'react-router-dom';
import { connect } from "react-redux";

import { handleInitialData } from '../../actions/shared';
class Header extends React.Component {
  state = {
    categories: []
  }

  componentDidMount() {
    this.props.getInitialData();
  }

  iterateCategories = (categories) => {
    const categoryArr = [];
    if (categories) {
      Object.values(categories).map((item) => {
        item.map(category => {
          return categoryArr.push(category.name);
        });
      });
      return categoryArr;
    }
  }

  render() {
    const { categories } = this.props;
    const activePage = this.props.location.pathname;
    return (
      <React.Fragment>
        <div className="header">
          <Link to="/" className="header__title">
            <div className="header__logo" />
            Lecture
          </Link>
        </div>
        <div className="subheader">
        <Link
              to='/'
              className={`${
                activePage === "/" ? "subheader__item-active" : "subheader__item"
              } `}
            >
              all
            </Link>
          { categories ? categories.map(item => (
            <Link
              to={`/${item}`}
              key={item}
              className={`${
                `/${item}` === activePage ? "subheader__item-active" : "subheader__item"
              } `}
              onClick={() => {this.props.requestCategoryPosts}}
            >
              {item}
            </Link>
          )) : ''}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
   const { categoriesReducer: { categories } } = state;
   return { categories };
 };

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getInitialData: () => {
      dispatch(handleInitialData());
    }
  }
}

Header = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Header));

export default Header;