import { useState } from "react";
import './CommentForm.css';

function CommentForm({ handleSubmit }) {
  const [author, setAuthor] = useState("Anon");
  const [comment, setComment] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(author, comment);
  };

  const handleAuthorInput = (event) => {
    setAuthor(event.target.value);
  };

  const handleCommentTextArea = (event) => {
    setComment(event.target.value);
  };


  return (
    <form onSubmit={onSubmit}>
        <div className="comment-text">
        <label htmlFor="name-input"></label>
        <input
          value={author}
          onChange={handleAuthorInput}
          className="comment-text"
          type="text"
          id="name-input"
        />
      </div>
      <div className="comment-form">
        <textarea
          value={comment}
          onChange={handleCommentTextArea}
          className="comment-text"
          placeholder="Write something..."
        />
      </div>
    
      <button className="btn btn-primary">Submit</button>
    </form>
  );
}

export default CommentForm;
