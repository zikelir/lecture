import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header/Header.js';
import Subheader from '../Subheader/Subheader.js';
import Home from '../Home/Home.js';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Subheader />
        <Route
          exact
          path="/"
          render={props => (
            <Home
              {...props}
            />
          )}
        />
      </React.Fragment>
    );
  }
}

export default Main;
