import React, { useState } from "react";
import BlogPost from "../BlogPost";
import CommentList from "../CommentList";

import "./App.module.css";

function App() {
  const [comments, setComments] = useState([
    { author: "Ben Lee", text: "Hello, great post" }
  ]);
  return (
    <div>
      <BlogPost />
      <CommentList
        comments={comments}
        addComment={c => setComments([...comments, c])}
      />
    </div>
  );
}

export default App;
