import React from 'react'
import "./Home.css"
import Profileside from '../../components/profileside/Profileside'
import PostSide from '../../components/PostSide/PostSide'

const Home = () => {
  return (
    <div className='Home'>
      <Profileside/>
      <PostSide/>
      <div className="rightSide">Right</div>
    </div>
  )
}

export default Home
