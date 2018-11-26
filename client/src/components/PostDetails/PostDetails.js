import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { getPostDetails, getPostComments } from '../../actions/post';
import { increasePost, decreasePost, deletePost, putPost } from '../../actions/post';
import { addComment } from '../../actions/comment';
import PostComment from '../PostComment/PostComment';

class PostDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      comment: '',
      isEditing: false,
      editAuthor: this.props.post.author,
      editTitle: this.props.post.title,
      editPostContent: this.props.post.body,
      editPostCategory: this.props.post.category,
      postComments: this.props.postComments,
      filter: ''
    }
  }

  componentDidMount() {
    if(this.props.match.params.post_id) {
      this.props.postDetailsAct(this.props.match.params.post_id);
      this.props.postCommentsAct(this.props.match.params.post_id);
    }
  }

  incrementPosts = (post) => {
    this.props.incrementAct(post);
    this.props.postDetailsAct(this.props.match.params.post_id);
  }

  decrementPosts = (post) => {
    this.props.decrementAct(post);
    this.props.postDetailsAct(this.props.match.params.post_id);
  }

  deletePost = (post) => {
    this.props.dispatch(deletePost(post));
    this.props.history.push(`/${post.category}`);
  }

  convertDateToStr = (date) => {
    const strdate = new Date(date);
    return strdate.toDateString();
  }

  handleAuthor = (e) => {
    this.setState({author: e.target.value});
  }

  handleComment = (e) => {
    this.setState({comment: e.target.value});
  }

  filterComments = (e) => {
    const value = e.target.value;
    if(!value) {
      this.setState({postComments: this.props.postComments});
    }
    this.setState({ filter: value });
    
  }

  saveComment = (post) => {
    const comment = {
      id: this.genetateId(),
      timestamp: Date.now(),
      body: this.state.comment,
      author: this.state.author,
      parentId: post.id,
    };

    if(comment.body && comment.author) {
      this.props.sendComment(comment);
      this.props.postDetailsAct(this.props.match.params.post_id);
      this.props.postCommentsAct(this.props.match.params.post_id);
      this.setState({author: '', comment: ''});
    } else {
      alert('All inputs are required!!!');
    }
  }

  genetateId = () => {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 25; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  };

  setEditable = (post) => {
    this.state.isEditing === false ?
      this.setState({ isEditing: true, editAuthor: post.author, editTitle: post.title, editPostContent: post.body, editPostCategory: post.category }) :
      this.setState({ isEditing: false, editAuthor: '', editTitle: '', editPostContent: '', editPostCategory: '' })
  }

  editAuthor = (e) => {
    this.setState({editAuthor: e.target.value});
  }

  editTitle = (e) => {
    this.setState({editTitle: e.target.value});
  }

  editBody = (e) => {
    this.setState({editPostContent: e.target.value});
  }

  editPostCategory = (e) => {
    this.setState({editPostCategory: e.target.value});
  }

  saveEdition = (post) => {
    const editedPost = {
      author: this.state.editAuthor,
      body: this.state.editPostContent,
      title: this.state.editTitle,
      category: this.state.editPostCategory,
      id: post.id,
      voteScore: post.voteScore,
      commentCount: post.commentCount,
      timestamp: post.timestamp,
    }

    if(editedPost.author && editedPost.body && editedPost.title) {
      this.props.putPostAct(editedPost);
      this.props.postDetailsAct(this.props.match.params.post_id);
      this.setEditable(post);
    } else {
      alert('All inputs are required!!!');
    }
  }

  render() {
    const { post } = this.props;
    const { postComments } = this.state;
    // console.log(this.props.postComments)
    return (
      <React.Fragment>
        {!post.error ? <div className="post-details" key={post.id}>
          <div className="post-details__user"> 
            <div className="post-details__avatar" />
            { this.state.isEditing === false ?
              <div className="post-details__username">{post.author}</div> :
              <textarea className="post-details__make-comment" value={this.state.editAuthor} onChange={this.editAuthor}/>
            }
          </div>
          <div className="post-details__body">
            <div className="post-details__header">
            { this.state.isEditing === false ?
              <div className="post-details__title">{post.title}</div> :
              <textarea className="post-details__make-comment" value={this.state.editTitle} onChange={this.editTitle}/>
            }
            </div>
            <div className="post-details__infos">
            { this.state.isEditing === false ?
              <div className="post-details__category">{post.category && post.category.toUpperCase()}</div> :
              <select className="post-details__category-select"
              value={this.state.editPostCategory}
              onChange={this.editPostCategory}
            >
              <option value="react" defaultValue>React</option>
              <option value="redux">Redux</option>
              <option value="udacity">Udacity</option>
            </select>
            }

              <div className="post-details__date">{post.timestamp && `Created in: ${this.convertDateToStr(post.timestamp)}`}</div>
              {
                post.voteScore >= 0 ?
                  (<div className="post-details__thumbs-up">
                    <div className="post-details__thumbs-up-icon" />
                    <div className="post-details__thumbs-up-count">{post.voteScore} likes</div>
                  </div>)
                 :
                  (<div className="post-details__thumbs-down">
                    <div className="post-details__thumbs-down-icon" />
                    <div className="post-details_thumbs-down-count">{post.voteScore} dislikes</div>
                  </div>)
              }
            <div className="post-details__comment-count">{post.commentCount} Comments</div>
            </div>
            { this.state.isEditing === false ?
              <div className="post-details__content">{post.body}</div> :
              <textarea className="post-details__make-comment" value={this.state.editPostContent} onChange={this.editBody}/>
            }
            <div className="post-details__emotion-buttons">
              <div className="post-details__emotion" onClick={() => {this.incrementPosts(post)}}>
                <div className="post-details__like-button"/>
                <div className="post-details__emotion-label">Like</div>
              </div>
              <div className="post-details__emotion"  onClick={() => {this.decrementPosts(post)}}>
                <div className="post-details__dislike-button" />
                <div className="post-details__emotion-label">Dislike</div>
              </div>
              <div className="post-details__emotion" onClick={() => {this.setEditable(post)}}>
                <div className="post-details__edit-button" />
                { this.state.isEditing === false ?
                  <div className="post-details__emotion-label">Edit</div> :
                  <div className="post-details__emotion-label" style={{color: 'red'}}>Cancel Edit</div>
                }
              </div>
              { this.state.isEditing === true ?
                <div className="post-details__send-edit-button" onClick={() => {this.saveEdition(post)}}> >Send Edition</div> : ''
              }
              <div className="post-details__emotion"  onClick={() => {this.deletePost(post)}}>
                <div className="post-details__delete-button" />
                <div className="post-details__emotion-label">Delete</div>
              </div>
            </div>
            <div className="post-details__comment-input">
              <div className="post-details__comment-label">Author:</div>
                <input type="text" className="post-details__make-comment" onChange={this.handleAuthor} value={this.state.author} required/>
                <div className="post-details__comment-label">Comment:</div>
                <textarea className="post-details__make-comment" onChange={this.handleComment} value={this.state.comment} required/>
                <div className="post-details__send-comment-button" onClick={() => this.saveComment(post)}>SEND ></div>
            </div>
          </div>
          <div>Filter comments: <input type="text" onChange={this.filterComments} value={this.state.filter}/></div>
          <div className="post-details__comments">
                {postComments && postComments.map(item => {
                  return (<div className="post-details__comment" key={item.id}>
                          <PostComment comment={item}/>
                        </div>)
                })}
          </div>
        </div> :
        <div className="not-found">
          <div className="internal-content">ID NOT FOUND!!!</div>
        </div>
        }
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  const { postReducer: { post, postComments } } = state;
  return { post, postComments };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    putPostAct: (post) => {
      dispatch(putPost(post))
    },
    postDetailsAct: (id) => {
      dispatch(getPostDetails(id))
    },
    postCommentsAct: (id) => {
      dispatch(getPostComments(id))
    },
    incrementAct: (id) => {
      dispatch(increasePost(id));
    },
    decrementAct: (id) => {
      dispatch(decreasePost(id));
    },
    sendComment: (comment) => {
      dispatch(addComment(comment));
    }
  }
}

PostDetails = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetails));


export default PostDetails;
