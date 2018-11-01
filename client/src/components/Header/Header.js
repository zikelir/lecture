import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestCategories } from "../../actions/categoriesAction.js";

// const categories = ["all", "react", "redux", "udacity"];
class Header extends React.Component {
  componentDidMount() {
    this.props.requestCategories();
  }

  render() {
    console.log(this.props.categories, 'PROPS');
    return (
      <React.Fragment>
        <div className="header">
          <div className="header__title">
            <div className="header__logo" />
            Lecture
          </div>
        </div>
        <div className="subheader">
          {['2', '23'].map(item => (
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

const mapStateToProps = () => ({ });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestCategories }, dispatch);

Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default Header;