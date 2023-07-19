import React from 'react'
import Post from '../Post/Post'
import { PostsData } from '../../Data/PostData'

const Posts = () => {
  return (
    <div className='Posts' style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
      {
        PostsData.map((post,id)=>{
            return <Post data={post} id={id}/>
        })
      }
    </div>
  )
}

export default Posts
