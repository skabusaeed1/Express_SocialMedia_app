import React from 'react'
import Logosearch from '../logo/Logosearch'
import ProfileCard from '../ProfileCard/ProfileCard'
import FollowerCard from '../FollowerCard/FollowerCard'
import './Profileside.css'

const Profileside = () => {
  return (
    <div className='Profileside'>
     <Logosearch/>
     <ProfileCard/>
     <FollowerCard/>
    </div>
  )
}

export default Profileside
