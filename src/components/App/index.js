import BlogPost from "../BlogPost";
import Comment from "../Comment";
import CommentList from "../CommentList";
import CommentForm from "../CommentForm";
import {blog, comments} from '../../data/blogs.js'

function App() {
  return (
    <div className="App">
      <BlogPost/>
      <CommentList commentArray = {comments}>
      </CommentList>
      <CommentForm />
    </div>
  )
}

export default App;
