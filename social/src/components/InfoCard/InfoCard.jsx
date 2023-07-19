import React from 'react'
import './InfoCard.css'
import { UilPen } from "@iconscout/react-unicons";
import {useState} from 'react'
import ProfileModel from '../ProfileModel/ProfileModel';

const InfoCard = () => {
  const[model,setModel]=useState(false)
  return (
    <div className='InfoCard'>
      <div className="infoHead">
        <h4>Your Info</h4>
        <div>
        <UilPen width="2rem" height="1.2rem" onClick={()=>setModel(true)}/>
        <ProfileModel model={model} setModel={setModel}/>
        </div>
      </div>

      <div className="info">
        <span><b>Status </b></span>
        <span>in Relationship</span>
      </div>

      <div className="info">
        <span><b>Lives </b></span>
        <span>Aurangabad</span>
      </div>

      <div className="info">
        <span><b>Works at </b></span>
        <span>Masai Scahool</span>
      </div>

      <button className='button logout-button'>Logout</button>
    </div>
  )
}

export default InfoCard
