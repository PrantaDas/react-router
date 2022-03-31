import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const {name,username,email,address,phone,website,id}=props.friend;
    const navigate=useNavigate();
    const showFriendDetail=()=>{
        const path=`/friends/${id}`;
        navigate(path);
    }
    return (
        <div>
            <h2>Name:{name}</h2>
            <button onClick={showFriendDetail}>{username}</button>
        </div>
    );
};

export default Friend;