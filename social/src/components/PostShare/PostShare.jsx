import React from 'react'
import "./PostShare.css"
import {useState,useRef} from "react"
import ProfileImage from '../../img/profileImg.jpg'
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";

const PostShare = () => {
  const [Image,setImage]=useState(null)
  const ImageRef=useRef();
  const ImageChange=(e)=>{
     if(e.target.files && e.target.files[0]){
      let img=e.target.files[0];
      setImage({
        image:URL.createObjectURL(img) 
      })
     }
  }
  return (
    <div className='PostShare'>
      <img src={ProfileImage} alt="user" />
      <div>
        <input type="text" placeholder="What's happening?" />
            <div className='postOption'>
                <div className='option' style={{ color: "var(--photo)" }} onClick={()=>ImageRef.current.click()}>
                <UilScenery/>
                Photo
                </div>
                <div className='option' style={{ color: "var(--video)" }}>
                <UilPlayCircle/>
                 Video
                </div>
                <div className='option' style={{ color: "var(--location)" }}>
                <UilLocationPoint/>
                Location
                </div>
                <div className='option' style={{ color: "var(--shedule)" }}>
                <UilSchedule/>
                shedule
                </div>
                <button className='button sh-button'>Share</button>
                <div style={{display:"none"}}>
                  <input type="file" name='myImage' ref={ImageRef} onChange={ImageChange} />
                </div>
            </div>
        {
         Image && (
          <div className='previewImage'>
            <UilTimes onClick={()=>setImage(null)}/>
            <img src={Image.image} alt="image"/>
          </div>
         ) 
        }
      </div>
    </div>
  )
}

export default PostShare
