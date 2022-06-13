import React from 'react';
import Comment from '../Comment';
import { blog, comments } from '../../data/blogs';


function CommentList ({commentArray}) {
    function createComment (comment) {
        return <Comment author={comment.author} content={comment.content} key={comment.id}/>
          }
        return (
            commentArray.map(createComment)
        )

}

export default CommentList;