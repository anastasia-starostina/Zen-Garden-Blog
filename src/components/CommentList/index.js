import React from "react";
import Comment from "../Comment";
import { blog, comments } from "../../data/blogs";

function CommentList({ comments }) {
  return (
    <section>
      {comments.map((comment) => {
        return (
          <artcile key={comment.id}>
            <Comment author={comment.author} comment={comment.comment} />
          </artcile>
        );
      })}
    </section>
  );
}

export default CommentList;
