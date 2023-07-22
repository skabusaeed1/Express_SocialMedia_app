import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {followUser,unfollowUser} from '../../actions/UserAction'
import {useState} from 'react'

const User = ({person}) => {
    const dispatch=useDispatch()
    const {user}=useSelector((state)=>state.authReducer.authData)
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
    const [following, setFollowing] = useState(
        person.followers.includes(user._id)
      );
    const handlefollow=()=>{
        following
      ? dispatch(unfollowUser(person._id, user))
      : dispatch(followUser(person._id, user));
       setFollowing((prev) => !prev);
    }
  return (
    <div className="follower">
                    <div>
                        <img src={person.profilePicture
              ? serverPublic + person.profilePicture
              : serverPublic + "defaultProfile.png"} alt="img" className='followerImg' />
                        <div className='name'>
                            <span>{person.firstname}</span>
                            <span>{person.username}</span>
                        </div>
                    </div>
                    <button className='button fc-button' onClick={handlefollow}> {following ? "Unfollow" : "Follow"}</button>
    </div>
  )
}

export default User
