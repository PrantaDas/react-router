import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const {postId}=useParams();
    const [post,setPost]=useState({});
    useEffect( ()=>{
        const url=`https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
        .then(res =>res.json())
        .then(data => setPost(data))
    },[postId])
    return (
        <div>
            <p>This is Posst Detail for:{postId}</p>
            <p>Title:{post.title}</p>
            <p>Detail:{post.body}</p>
        </div>
    );
};

export default PostDetail;