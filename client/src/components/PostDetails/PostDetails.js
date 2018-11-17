import React from 'react';
import { withRouter } from 'react-router-dom';

import { connect } from "react-redux";


class PostDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="post-details">
        PD
        </div>
      </React.Fragment>
    );
  }
}


PostDetails = withRouter(connect(
)(PostDetails));


export default PostDetails;
