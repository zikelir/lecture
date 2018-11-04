import React from "react";
import { Link } from 'react-router-dom';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestCategories } from "../../actions/categoriesAction.js";

// const categories = ["all", "react", "redux", "udacity"];
class Header extends React.Component {
  state = {
    categories: []
  }
  componentDidMount() {
    this.props.requestCategories();
  }

  iterateCategories = (categories) => {
    const categoryArr = [];
    if (categories) {
      console.log(Object.values(categories));
      Object.values(categories).map((item) => {
        item.map(category => {
          return categoryArr.push(category.name);
        });
      });
      return categoryArr;
    }
  }

  render() {
    console.log(this.props.categories, 'props')
    const { categories } = this.props;

    return (
      <React.Fragment>
        <div className="header">
          <div className="header__title">
            <div className="header__logo" />
            Lecture
          </div>
        </div>
        <div className="subheader">
          { categories ? this.iterateCategories(categories).map(item => (
            <Link
              to={`/${item}`}
              key={item}
              className={`${
                item === "all" ? "subheader__item-active" : "subheader__item"
              } `}
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
const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestCategories }, dispatch);

Header = connect(
  mapStateToProps,
  { requestCategories }
)(Header);

export default Header;