import BlogPost from "../BlogPost";
import Comment from "../Comment";
import CommentList from "../CommentList";
import CommentForm from "../CommentForm";

function App() {
  return (
    <div className="App">
      <BlogPost/>
      <CommentList>
      <Comment/></CommentList>
      <CommentForm />
    </div>
  )
}

export default App;
