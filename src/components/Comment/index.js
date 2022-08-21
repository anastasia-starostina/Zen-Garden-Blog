import React from "react";
import "./Comment.css";

function Comment({ author, content }) {
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
      <p className="comment-text">{content}</p>
    </div>
  );
}

export default Comment;
