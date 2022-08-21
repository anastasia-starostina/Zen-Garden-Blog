import BlogPost from "../BlogPost";
import Comment from "../Comment";
import CommentList from "../CommentList";
import CommentForm from "../CommentForm";
import { blog } from "../../data/blogs.js";
import { useState } from "react";

function App() {
  const [comments] = useState([
    {
      id: "kskBC5HZ8qgNQUiW6If6q",
      author: "Billy Bootcamper",
      content: "Hello, great post",
    },
    {
      id: "jFyGAKz1VsGputO1gV8xa",
      author: "Chris Meah",
      content: "Many thank yous",
    },
  ]);
  return (
    <div className="App">
      <BlogPost blog={blog} />
      <Comment author={blog.author} content={blog.content} />
      <CommentList comments={comments} />
      <CommentForm />
    </div>
  );
}

export default App;
