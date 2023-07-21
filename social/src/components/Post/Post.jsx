import React from 'react'
import "./Post.css"
import Comment from '../../img/comment.png'
import Share from '../../img/share.png'
import Heart from '../../img/like.png'
import NotLike from '../../img/notlike.png'
import {useSelector} from 'react-redux'
import {useState} from 'react'
import {likePost} from '../../api/PostsRequests'

const Post = ({data}) => {
  const {user}=useSelector((state)=>state.authReducer.authData)
  const[liked,setLiked]=useState(data.likes.includes(user._id))
  const [likes,setLikes]=useState(data.likes.length)

  const handlelike=()=>{
    setLiked((prev)=>!prev)
     likePost(data._id, user._id)
    liked ? setLikes((prev)=>prev-1) : setLikes((prev)=>prev+1)
  }
  return (
    <div className='Post'>
      <img src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""} alt="img" />

      <div className="PostReaction">
        <img src={liked ? Heart: NotLike} alt="" style={{cursor:"pointer"}} onClick={handlelike}/>
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
      </div>

      <span style={{color:"var(--gray)",fontSize:"14px"}}>{likes} likes</span>

      <div className="details">
        <span><b>{data.name}</b></span>
        <span>  {data.desc}</span>
       </div>
    </div>
  )
}

export default Post
