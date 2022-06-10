import React, { useState } from "react";

import css from "./CommentForm.module.css";

function CommentForm({ onSubmit }) {
  const [author, setAuthor] = useState("Anon Author");
  const [comment, setComment] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (comment.length === 0) {
      return;
    }
    onSubmit({
      author,
      text: comment
    });
    setComment("");
  }
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.inputContainer}>
        <input
          className={css.input}
          type="text"
          value={author}
          onChange={e => setAuthor(e.target.value)}
        />
        <textarea
          className={css.input}
          placeholder="Write a response..."
          type="text"
          value={comment}
          onChange={e => setComment(e.target.value)}
        />
      </div>
      <button className={css.button} type="submit">
        Submit
      </button>
    </form>
  );
}

export default CommentForm;
