import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchCategories } from "../../actions/categoriesAction.js";

const categories = ["all", "react", "redux", "udacity"];
class Header extends React.Component {
  componentDidMount() {
    this.props.fetchCategories();
    console.log(this.props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="header">
          <div className="header__title">
            <div className="header__logo" />
            Lecture <button onClick={this.props.fetchCategories}></button>
          </div>
        </div>
        <div className="subheader">
          { categories.map(item => (
            <div
              key={item}
              className={`${
                item === "all" ? "subheader__item-active" : "subheader__item"
              } `}
            >
              {item}
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({ categories: state.categories });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchCategories }, dispatch);

Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default Header;