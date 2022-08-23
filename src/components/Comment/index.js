import React from "react";
import "./Comment.css";

function Comment({ comment, author }) {
  const inititals = author
    .split(" ")
    .map((name) => name[0])
    .join("");

  return (
    <div className="Comment">
      <div className="initials-name">
        <span className="initials">{inititals}</span>
        <span>{author}</span>
      </div>
      <p className="comment-text">{comment}</p>
    </div>
  );
}

export default Comment;
