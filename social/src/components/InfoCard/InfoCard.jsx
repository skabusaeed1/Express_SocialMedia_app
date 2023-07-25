import React from 'react'
import './InfoCard.css'
import { UilPen } from "@iconscout/react-unicons";
import {useState,useEffect} from 'react'
import ProfileModel from '../ProfileModel/ProfileModel';
import * as UserApi from '../../api/UserRequests.js'
import {useSelector,useDispatch} from 'react-redux'
import { useParams } from "react-router-dom";
import {logout} from '../../actions/AuthActions'

const InfoCard = () => {
  const[model,setModel]=useState(false)
  const dispatch = useDispatch()
  const params = useParams();
  const profileUserId = params.id;
  const [profileUser, setProfileUser] = useState({});
  const { user } = useSelector((state) => state.authReducer.authData);

  useEffect(() => {
    const fetchProfileUser = async () => {
      if (profileUserId === user._id) {
        setProfileUser(user);
      } else {
        console.log("fetching")
        const profileUser = await UserApi.getUser(profileUserId);
        setProfileUser(profileUser);
      }
    };
    fetchProfileUser();
  }, [user]);

  const handleLogOut=()=>{
    dispatch(logout())
  }

  return (
    <div className='InfoCard'>
      <div className="infoHead">
        <h4>Profile Info</h4>
        {user._id===profileUserId ? 
        (  <div>
          <UilPen width="2rem" height="1.2rem" onClick={()=>setModel(true)}/>
          <ProfileModel model={model} setModel={setModel} data={user}/>
          </div>
        ) : ""}
        
      </div>

      <div className="info">
        <span><b>Status </b></span>
        <span>{profileUser.relationship}</span>
      </div>

      <div className="info">
        <span><b>Lives </b></span>
        <span>{profileUser.livesin}</span>
      </div>

      <div className="info">
        <span><b>Works at </b></span>
        <span>{profileUser.worksAt}</span>
      </div>

      <button className='button logout-button' onClick={handleLogOut}>Logout</button>
    </div>
  )
}

export default InfoCard
