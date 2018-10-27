import React from "react";

const categories = [
  'all', 'react', 'redux', 'udacity'
];

const Header = () => (
  <React.Fragment>
    <div className="header">
      <div className="header__title"><div className="header__logo"/>Lecture</div>
    </div>
    <div className="subheader">
      {categories.map( item => <div key={item} className={`${item === 'all' ? 'subheader__item-active' : 'subheader__item' } `}>{item}</div>  )}
    </div>
  </React.Fragment>
);

export default Header;
