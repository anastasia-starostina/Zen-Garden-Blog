import React from 'react';
import Comment from '../Comment';
import { blog, comments } from '../../data/blogs';


function CommentList () {
   const foundComments = comments.map((comment) => (
        <ul key = {blog.id}></ul>
    ))
return foundComments}

export default CommentList;