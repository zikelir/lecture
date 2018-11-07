import React from 'react';
import PropTypes from 'prop-types';

class Categories extends React.Component {

  componentWillReceiveProps(nextProps) {

  }

  render() {
    return (
      <div className="categories">
        <div className="categories__title">{window.location.pathname === '/' ? 'All' : window.location.pathname} Posts</div>
        <div className="categories__buttons">
        
        </div>
      </div>
    );
  }
};

Categories.propTypes = {

};

export default Categories;
