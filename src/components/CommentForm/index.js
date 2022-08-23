import { useState } from "react";
import './CommentForm.css';

function CommentForm({ handleSubmit }) {
  const [author, setAuthor] = useState("Anonymous User");
  const [comment, setComment] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(author, comment);
  };

   const isNotFilled = () => {
     return !(author && comment);
   };

  const handleAuthorInput = (event) => {
    setAuthor(event.target.value);
  };

  const handleCommentTextArea = (event) => {
    setComment(event.target.value);
    console.log(comment)
  };


  return (
    <form onSubmit={onSubmit}>
        <div className="author-text">
        <label htmlFor="name-input"></label>
        <input
          value={author}
          onChange={handleAuthorInput}
          className="author"
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
    
      <button disabled={isNotFilled()} className="btn btn-primary">Submit</button>
    </form>
  );
}

export default CommentForm;
