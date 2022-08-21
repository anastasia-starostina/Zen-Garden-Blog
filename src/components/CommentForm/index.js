import { useState } from "react";

function CommentForm() {
  const [author, setAuthor] = useState("Anon");
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    setComment("");
  };

  return (
    <form>
      <label>Author</label>
      <input
        type="text"
        onChange={(event) => setAuthor(event.target.value)}
        value={author}
        id="author"
      ></input>

      <br />
      <label>Comment</label>
      <input
        type="text"
        onChange={(event) => setComment(event.target.value)}
        value={comment}
        id="comment"
      ></input>
      <br />
      <button type="button" onClick={() => handleSubmit()}>
        Submit
      </button>
    </form>
  );
}

export default CommentForm;
