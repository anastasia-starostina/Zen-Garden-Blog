import { useState } from "react";

function CommentForm() {
  const [newComment, setComment] = useState('');

  function handleChange(e) {
    setComment(e.target.value)
  }

  return null;
}

export default CommentForm;
