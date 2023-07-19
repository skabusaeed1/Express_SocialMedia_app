import React from 'react'
import "./ProfileLeft.css"
import Logosearch from '../logo/Logosearch'
import  FollowerCard  from '../FollowerCard/FollowerCard'
import InfoCard from '../InfoCard/InfoCard'

const ProfileLeft = () => {
  return (
    <div className='ProfileLeft'>
      <Logosearch/>
      <InfoCard/>
      <FollowerCard/>
    </div>
  )
}

export default ProfileLeft
