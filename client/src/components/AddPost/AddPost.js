import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import { addPost } from '../../utils/post';
import { requestAllPosts } from "../../actions/postsAction";

// import { increasePost, decreasePost } from '../../utils/post';

class AddPost extends React.Component {
  state = {
    title: '',
    category: 'react',
    author: '',
    content: '',
  };

  savePost = () => {
    const post = {
      id: this.genetateId(),
      timestamp: Date.now(),
      title: this.state.title,
      category: this.state.category,
      author: this.state.author,
      body: this.state.content,
    }
    this.props.dispatch(addPost(post));
    this.setState({
      title: '',
      category: 'react',
      author: '',
      content: '',
    });
    this.props.history.push('/');
  }

  genetateId = () => {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 25; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  };

  handleTitle = (e) => {
    this.setState({ title: e.target.value });
  }

  handleAuthor = (e) => {
    this.setState({ author: e.target.value });
  }

  handleContent = (e) => {
    this.setState({ content: e.target.value });
  }

  handleCategory = (e) => {
    this.setState({ category: e.target.value });
  }

  render() {
    return (
      <React.Fragment>
        <div className="add-post">
          <div className="add-post__title">ADD POST</div>
          <div className="add-post__inputs">
            <div className="add-post__input-label">Post Title:</div>
            <input type="text" value={this.state.title} onChange={this.handleTitle} required/>
          </div>
          <div className="add-post__inputs">
            <div className="add-post__input-label">Post Category:</div>
            <select className="add-post__category-select"
              value={this.state.category}
              onChange={this.handleCategory}
            >
              <option value="react" defaultValue>React</option>
              <option value="redux">Redux</option>
              <option value="udacity">Udacity</option>
            </select>
          </div>
          <div className="add-post__inputs">
            <div className="add-post__input-label" required>Author:</div>
            <input type="text" value={this.state.author} onChange={this.handleAuthor} required/>
          </div>
          <div className="add-post__inputs">
            <div className="add-post__input-label">Content:</div>
            <textarea value={this.state.content} onChange={this.handleContent} className="add-post__textarea" required/>
          </div>
          <div className="add-post__save-button" onClick={() => this.savePost()}>SAVE</div>
        </div>
      </React.Fragment>
    );
  }
}

// const mapStateToProps = (state) => {
//  };
// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ requestPost }, dispatch);


AddPost = withRouter(connect(
  // mapStateToProps,
 //  { requestCategoryPosts }
 )(AddPost));

export default AddPost;