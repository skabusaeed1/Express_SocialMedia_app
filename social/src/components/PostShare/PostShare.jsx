import React from 'react'
import "./PostShare.css"
import {useState,useRef} from "react"
import ProfileImage from '../../img/profileImg.jpg'
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import {useSelector,useDispatch} from 'react-redux'
import {uploadImage,uploadPost} from '../../actions/UploadAction'

const PostShare = () => {
  const [Image,setImage]=useState(null)
  const ImageRef=useRef();
  const desc = useRef();
  const dispatch=useDispatch()
  const { user } = useSelector((state) => state.authReducer.authData);
  const uploading=useSelector((state)=>state.postReducer.uploading)
  console.log(uploading)

  const ImageChange=(e)=>{
     if(e.target.files && e.target.files[0]){
      let img=e.target.files[0];
      setImage(img)
     }
  }

  const handleUpload =async(e) => {
    e.preventDefault();
    //post data
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    // if there is an image with post
    if (Image) {
      const data = new FormData();
      const fileName = Date.now() + Image.name;
      data.append("name", fileName);
      data.append("file", Image);
      newPost.image = fileName;
      console.log(newPost);
      try {
        dispatch(uploadImage(data));
      } catch (err) {
        console.log(err);
      }
    }
    dispatch(uploadPost(newPost));
    resetShare();
  };

  const resetShare = () => {
    setImage(null);
    desc.current.value = "";
  };

  return (
    <div className='PostShare'>
      <img src={ProfileImage} alt="user" />
      <div>
        <input type="text" placeholder="What's happening?" ref={desc} required/>
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
                <button className='button sh-button' onClick={handleUpload} disabled={uploading}>{uploading ? "Loading..":"Share"}</button>

                <div style={{display:"none"}}>
                  <input type="file" name='myImage' ref={ImageRef} onChange={ImageChange} />
                </div>
            </div>
        {
         Image && (
          <div className='previewImage'>
            <UilTimes onClick={()=>setImage(null)}/>
            <img src={URL.createObjectURL(Image)} alt="image"/>
          </div>
         ) 
        }
      </div>
    </div>
  )
}

export default PostShare
