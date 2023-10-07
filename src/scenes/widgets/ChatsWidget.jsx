import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


const Chats = () => {
    const dispatch = useDispatch();
    // const posts = useSelector((state) => state.posts);
    const token = useSelector((state) => state.token);
  return (
    <div>Chats</div>
  )
}

export default Chats