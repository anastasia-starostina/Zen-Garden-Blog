import React from 'react';
import './Comment.css';


const comment = {
  author: 'Anastasia S.',
  content: 'Hello, great post',
  initals: ''
}
const getInitials = function () {
    const fullName = comment.author.split(" ");
    const initials = [];
    for (let i = 0; i < fullName.length; i++) {
      initials.push(fullName[i].charAt(0).toUpperCase());
    }
    return initials.join("");
  };


function Comment() {
  return (
    <div className='Comment'>
    <div className='initials-name'>
      <span className = 'initials'>{getInitials(comment.author)}</span>
      <span>{comment.author}</span>
    </div>
    <p className='comment-text'>{comment.content}</p>
    </div>

  );
}
 
export default Comment;
