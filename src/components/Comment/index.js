import React from "react";

import css from "./Comment.module.css";

function Comment({ author, text }) {
  return (
    <li className={css.container}>
      <div className={css.header}>
        <div className={css.avatar}>
          {author
            .split(" ")
            .map(w => w[0])
            .join("")}
        </div>
        <p className={css.author}>{author}</p>
      </div>
      <p className={css.content}>{text}</p>
    </li>
  );
}

Comment.defaultProps = {
  author: "Ben Lee",
  text: "Hello, great post"
};

export default Comment;
