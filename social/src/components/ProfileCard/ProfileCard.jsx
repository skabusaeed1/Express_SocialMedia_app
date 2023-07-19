import React from 'react'
import Cover from "../../img/cover.jpg"
import ProfileImg from "../../img/profileImg.jpg"
import "./ProfileCard.css"

const ProfileCard = () => {
  return (
    <div className='Profilecard'>
      <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={ProfileImg} alt="" />
      </div>

      <div className='ProfileName'>
        <span>Zendya MJ</span>
        <span>Senior UI/UX Developer</span>
      </div>

      <div className='followStatus'>
        <hr />
          <div>
          <div className='follow'>
            <span>6,823</span>
            <span>Followings</span>
        </div>
        <div className='vl'></div>
        <div className='follow'>
            <span>1</span>
            <span>Followers</span>
        </div>
          </div>
        <hr />
      </div>

      <span>
        My Profile
      </span>
    </div>
  )
}

export default ProfileCard
