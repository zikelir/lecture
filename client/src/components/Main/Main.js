import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header.js';
import Subheader from '../Subheader/Subheader.js';
import Categories from '../Categories/Categories.js';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
  const url = window.location.pathname;
  const arr = ['react', 'redux', 'udacity'];

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
          <Route
            exact
            path='/:category'
            render={props => (
              <Categories
                {...props}
              />
            )}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Main;
