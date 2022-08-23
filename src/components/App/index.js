import BlogPost from "../BlogPost";
import Comment from "../Comment";
import CommentList from "../CommentList";
import CommentForm from "../CommentForm";
import { blog } from "../../data/blogs.js";
import React, { Component } from "react";

//OLDER SOLUTION - FUNCTIONAL COMPONENTS

// function App() {
//   const [comments] = useState([
//     {
//       id: "kskBC5HZ8qgNQUiW6If6q",
//       author: "Billy Bootcamper",
//       content: "Hello, great post",
//     },
//     {
//       id: "jFyGAKz1VsGputO1gV8xa",
//       author: "Chris Meah",
//       content: "Many thank yous",
//     },
//   ]);

//UTILIZING CLASS COMPONENTS
class App extends Component {
  state = {
    comments: [],
  };

  handleSubmit = (author, comment) => {
    const newComment = { author, comment };
    this.setState({ comments: [...this.state.comments, newComment] });
  };
  render() {
    return (
      <div className="App">
        <BlogPost blog={blog} />
        <Comment author={blog.author} content={blog.content} />
        <CommentList comments={this.state.comments} />
        <CommentForm handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
