import React from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import { addPost } from '../../actions/post';

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
    if(post.title && post.author && post.body) {
      this.props.dispatch(addPost(post));
      this.setState({
        title: '',
        category: 'react',
        author: '',
        content: '',
      });
      this.props.history.push('/');
    } else {
      alert('all inputs are required!!!!');
    }
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
            <input type="text" value={this.state.title} onChange={this.handleTitle} className="add-post__input" required/>
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
            <input type="text" value={this.state.author} className="add-post__input" onChange={this.handleAuthor} required/>
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

AddPost = withRouter(connect()(AddPost));

export default AddPost;