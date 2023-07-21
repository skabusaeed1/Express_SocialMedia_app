import React from 'react'
import "./Home.css"
import Profileside from '../../components/profileside/Profileside'
import PostSide from '../../components/PostSide/PostSide'
import RightSide from '../../components/RightSide/RightSide'

const Home = () => {
  return (
    <div className='Home'>
      <Profileside location='homePage'/>
      <PostSide/>
      <RightSide/>
    </div>
  )
}

export default Home
