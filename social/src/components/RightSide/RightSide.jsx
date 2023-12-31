import React from 'react'
import "./RightSide.css"
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from '../TrendCard/TrendCard';
import ShareModel from '../ShareModel/ShareModel'
import {useState} from 'react'
import {Link} from 'react-router-dom'

const RightSide = () => {
  const [model,setModel]=useState(false)
  return (
    <div className='RightSide'>
      
      <div className='navIcon'>
        <Link to={"../home"}><img src={Home} alt="" /></Link>
        <UilSetting/>
        <img src={Noti} alt="" />
        <img src={Comment} alt="" />
      </div>
      
      <TrendCard/>

      <button className='button s-buttom' onClick={()=>setModel(true)}>Share</button>
       <ShareModel model={model} setModel={setModel}/>
    </div>
  )
}

export default RightSide
