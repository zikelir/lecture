import React from "react";
import { Link, withRouter } from 'react-router-dom';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestCategories } from "../../actions/categoriesAction";
import { requestCategoryPosts } from '../../actions/categoryPostsAction';
import { categoriesThunk } from '../../thunks/categoriesThunk';
import { handleInitialData } from '../../utils/shared';

// const categories = ["all", "react", "redux", "udacity"];
class Header extends React.Component {
  state = {
    categories: []
  }

  componentDidMount() {
    this.props.dispatch(handleInitialData());
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
    console.log(activePage);
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

Header = withRouter(connect(
  mapStateToProps,
)(Header));

export default Header;