import React from 'react'
import "./FollowerCard.css"
import {Followers} from '../../Data/FollowerData'
import User from '../User/User'
import {useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {getAllUser} from '../../api/UserRequests'

const FollowerCard = () => {
  const [persons,setPersons]=useState([])
  const {user}=useSelector((state)=>state.authReducer.authData)
  useEffect(()=>{
   const fetchperson=async()=>{
    const {data}=await getAllUser();
    setPersons(data)
   }
   fetchperson()
  },[])
  return (
    <div className='FollowerCard'>
      <h3>People may you know</h3>

      {
        persons.map((person,id)=>{
          if(person._id!==user._id){
            return(
                <User person={person} key={id}/>
            )
        }
        })
      }
    </div>
  )
}

export default FollowerCard
