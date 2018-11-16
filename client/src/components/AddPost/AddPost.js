import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// import { increasePost, decreasePost } from '../../utils/post';

class AddPost extends React.Component {

  // incrementPosts = (post) => {
  //   this.props.dispatch(increasePost(post));
  // }

  render() {
    return (
      <React.Fragment>
        <div className="add-post">
          <div className="add-post__title">ADD POST</div>
          <div className="add-post__inputs">
            <div>Post Title:</div>
            <input type="text"/>
          </div>
          <div className="add-post__inputs">
            <div className="add-post__input-label">Post Category:</div>
            <select className="add-post__category-select">
              <option value="react">React</option>
              <option value="redux">Redux</option>
              <option value="udacity">Udacity</option>
            </select>
          </div>
          <div className="add-post__inputs">
            <div className="add-post__input-label">Date:</div>
            <div>{Date.now()}</div>
          </div>
          <div className="add-post__inputs">
            <div className="add-post__input-label">Author:</div>
            <input type="text"/>
          </div>
          <div className="add-post__inputs">
            <div className="add-post__input-label">Content:</div>
            <input type="text"/>
          </div>
          <button>Save</button>
        </div>
      </React.Fragment>
    );
  }
}

// const mapStateToProps = (state) => {
//  };
// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ requestPost }, dispatch);

AddPost = connect(
  // mapStateToProps,
  // mapDispatchToProps
)(AddPost);

export default AddPost;