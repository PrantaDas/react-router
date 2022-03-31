import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {friendId}=useParams();
    const [friend,setFriend]=useState({});
    useEffect( ()=>{
        const url=`https://jsonplaceholder.typicode.com/users/${friendId}`;
        console.log(url);
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    },[]);
    
    return (
        <div>
            <p>This is friend detail :{friendId}</p>
            <h3>Name:{friend.name}</h3>
            <p>Email:{friend.email}</p>
            <p>Wbsites:{friend.website}</p>
            <p>City:{friend.address?.city}</p>
        </div>
    );
};

export default FriendDetail;