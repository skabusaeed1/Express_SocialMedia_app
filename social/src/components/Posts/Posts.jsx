import React from 'react'
import Post from '../Post/Post'
import { PostsData } from '../../Data/PostData'
import {useDispatch,useSelector} from 'react-redux'
import {useEffect} from 'react'
import {getTimelinePosts} from '../../actions/PostsAction'

const Posts = () => {
  const dispatch = useDispatch()
  const {user}=useSelector((state)=>state.authReducer.authData)
  let {posts,loading}=useSelector((state)=>state.postReducer)
  useEffect(()=>{
    dispatch(getTimelinePosts(user._id))
  },[])
  return (
    <div className='Posts' style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
      {loading ? "Fetching posts..."
       : posts.map((post,id)=>{
            return <Post data={post} id={id}/>
        })
      }
    </div>
  )
}

export default Posts
