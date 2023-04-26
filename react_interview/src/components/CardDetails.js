import React from 'react'
import { useSelector } from 'react-redux';

const CardDetails = ({ children }) => {

  const SelectedPost = useSelector((state) => state.Post.post);

  return (
    <>
      <div className="model">
        <p>userId : {SelectedPost.userId}</p>
        <p>id : {SelectedPost.id}</p>
        <p>Title : {SelectedPost.title}</p>
        <p>Body : {SelectedPost.body}</p>
        <button
        >
          {children.isFav ? "Already Liked" : "Wanna Like"}
        </button>
      </div>

    </>
  )
}

export default CardDetails
