import React from "react";

import css from "./BlogPost.module.css";

function BlogPost({ title, author, datePosted, text, image, alt }) {
  return (
    <article className={css.container}>
      <div className={css.header}>
        <h2 className={css.title}>{title}</h2>
        <h4 className={css.author}>by {author}</h4>
        <time className={css.date} dateTime={datePosted}>
          {datePosted}
        </time>
        <hr className={css.divider} />
      </div>
      {image && (
        <figure className={css.imageContainer}>
          <img className={css.image} src={image} alt={title} />
          <figcaption className={css.caption}>{alt}</figcaption>
        </figure>
      )}
      <p className={css.body}>{text}</p>
    </article>
  );
}

BlogPost.defaultProps = {
  title: "My First Post",
  author: "Chris Meah",
  datePosted: "10/11/2019",
  text: `
    A structure used in most apps and games.
    It's a way to keep doing the same.
    While a condition is true,
    Or for one to twenty-two.
    If endless, for errors we blame
    ..........
    Loop `,
  image:
    "https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  alt: "A couple of coders."
};

export default BlogPost;
