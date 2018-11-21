import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { getPostComments, getPostDetails } from '../../actions/post';
import { increaseComment, decreaseComment, deleteComment, putComment } from '../../actions/comment';


class PostComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      comment: '',
      isEditing: false,
      editAuthor: this.props.comment.author,
      editTitle: this.props.comment.title,
      editCommentContent: this.props.comment.body,
      editCommentCategory: this.props.comment.category
    }
  }


  incrementComment = (comment) => {
    this.props.dispatch(increaseComment(comment));
    this.props.dispatch(getPostDetails(this.props.match.params.post_id));
    this.props.dispatch(getPostComments(this.props.match.params.post_id));
  }

  decrementComment = (comment) => {
    this.props.dispatch(decreaseComment(comment));
    this.props.dispatch(getPostDetails(this.props.match.params.post_id));
    this.props.dispatch(getPostComments(this.props.match.params.post_id));
  }

  deleteComment = (comment) => {
    this.props.dispatch(deleteComment(comment));
    this.props.dispatch(getPostDetails(this.props.match.params.post_id));
    this.props.dispatch(getPostComments(this.props.match.params.post_id));
  }

  convertDateToStr = (date) => {
    const strdate = new Date(date);
    return strdate.toDateString();
  }

  genetateId = () => {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 25; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  };

  setEditable = (comment) => {
    this.state.isEditing === false ?
      this.setState({ isEditing: true, editAuthor: comment.author, editTitle: comment.title, editCommentContent: comment.body, editCommentCategory: comment.category }) :
      this.setState({ isEditing: false, editAuthor: '', editTitle: '', editPostContent: '', editPostCategory: '' })
  }

  editAuthor = (e) => {
    this.setState({editAuthor: e.target.value});
  }

  editTitle = (e) => {
    this.setState({editTitle: e.target.value});
  }

  editBody = (e) => {
    this.setState({editCommentContent: e.target.value});
  }

  editCommentCategory = (e) => {
    this.setState({editCommentCategory: e.target.value});
  }

  saveEdition = (comment) => {
    const editedComment = {
      author: this.state.editAuthor,
      body: this.state.editCommentContent,
      title: this.state.editTitle,
      category: this.state.editCommentCategory,
      id: comment.id,
      voteScore: comment.voteScore,
      commentCount: comment.commentCount,
      timestamp: comment.timestamp,
    }
    this.props.dispatch(putComment(editedComment));
    this.props.dispatch(getPostComments(this.props.match.params.post_id));
    this.setEditable(comment);
  }



  render() {
    const { comment } = this.props;
    return (
      <React.Fragment>
        <div className="post-comment" key={comment.id}>
          <div className="post-comment__user">
            <div className="post-comment__avatar" />
            { this.state.isEditing === false ?
              <div className="post-comment__username">{comment.author}</div> :
              <textarea className="post-comment__make-comment" value={this.state.editAuthor} onChange={this.editAuthor}/>
            }
          </div>
          <div className="post-comment__body">
            {/* <div className="post-comment__header">
              <div className="post-comment__title">{comment.title}</div>
            </div> */}
            <div className="post-comment__infos">
              <div className="post-comment__date">{comment.timestamp && `Created in: ${this.convertDateToStr(comment.timestamp)}`}</div>
              {
                comment.voteScore >= 0 ?
                  (<div className="post-comment__thumbs-up">
                    <div className="post-comment__thumbs-up-icon" />
                    <div className="post-comment__thumbs-up-count">{comment.voteScore} likes</div>
                  </div>)
                 :
                  (<div className="post-comment__thumbs-down">
                    <div className="post-comment__thumbs-down-icon" />
                    <div className="post-comment_thumbs-down-count">{comment.voteScore} dislikes</div>
                  </div>)
              }
            </div>
            { this.state.isEditing === false ?
              <div className="post-comment__content">{comment.body}</div> :
              <textarea className="post-comment__make-comment" value={this.state.editCommentContent} onChange={this.editBody}/>
            }
            <div className="post-comment__emotion-buttons">
              <div className="post-comment__emotion" onClick={() => {this.incrementComment(comment)}}>
                <div className="post-comment__like-button"/>
                <div className="post-comment__emotion-label">Like</div>
              </div>
              <div className="post-comment__emotion"  onClick={() => {this.decrementComment(comment)}}>
                <div className="post-comment__dislike-button" />
                <div className="post-comment__emotion-label">Dislike</div>
              </div>
              <div className="post-comment__emotion"  onClick={() => {this.setEditable(comment)}}>
                <div className="post-comment__edit-button" />
                {/* <div className="post-comment__emotion-label">Edit</div> */}
                { this.state.isEditing === false ?
                  <div className="post-comment__emotion-label">Edit</div> :
                  <div className="post-comment__emotion-label" style={{color: 'red'}}>Cancel Edit</div>
                }
              </div>
              { this.state.isEditing === true ?
                <div className="post-details__send-edit-button" onClick={() => {this.saveEdition(comment)}}> >Send Edition</div> : ''
              }
              <div className="post-comment__emotion"  onClick={() => {this.deleteComment(comment)}}>
                <div className="post-comment__delete-button" />
                <div className="post-comment__emotion-label">Delete</div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

PostComment = withRouter(connect()(PostComment));


export default PostComment;
