import { useState } from "react";

function CommentForm({onSubmit}) {
  const [author, setAuthor] = useState('Anon')
  const [content, setContent] = useState('')

  function handleAuthorChange(e) {
    setAuthor(e.target.value)
  }
  function handleContentChange(e){
    setContent(e.target.value)
  }
  function handleClick(){
    if (content != ''){
      onSubmit(author, content)
      setContent('')
    }
  }
return (
  <form>
    <label>Author</label>
    <input type='text' onChange={handleAuthorChange} value={author} id='author'></input><br/>
    <label>Comment</label>
    <input type='text' onChange={handleContentChange} value={content} id='comment'></input><br/>
    <button type='button' onClick={handleClick}>Submit</button>
  </form>
)
}

export default CommentForm;
