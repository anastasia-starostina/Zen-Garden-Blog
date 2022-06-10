import React from "react";
import CommentForm from "../CommentForm";
import Comment from "../Comment";

function CommentList({ comments, addComment }) {
  return (
    <section>
      <ul>
        {comments.map((c, i) => (
          <React.Fragment key={i}>
            <Comment author={c.author} text={c.text} />
            <hr />
          </React.Fragment>
        ))}
      </ul>
      <CommentForm onSubmit={addComment} />
    </section>
  );
}

export default CommentList;
