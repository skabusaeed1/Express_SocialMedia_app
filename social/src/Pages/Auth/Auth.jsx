import React from 'react'
import "./Auth.css"
import Logo from '../../img/logo.png'
import {useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {logIn,signUp} from '../../actions/AuthActions'

const Auth = () => {
  const loading = useSelector((store) => store.authReducer.loading);
  console.log(loading);
  const dispatch = useDispatch()
  const [isSignUp,SetisSignUp]=useState(true)
  const [confirmpass,setConfirmpass]=useState(true)
  
  const [data,setData]=useState({firstname:"",lastname:"",username:"",password:"",confirmpass:""})
  const handlechange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault();

    if(isSignUp){
     data.password ===data.confirmpass ? dispatch(signUp(data)) : setConfirmpass(false)
    }else{
      dispatch(logIn(data))
    }
  }

  const resetForm=()=>{
    setConfirmpass(true);
    setData({firstname:"",lastname:"",username:"",password:"",confirmpass:""})
  }

  return (
    <div className='Auth'>
      {/* leftside */}
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className='Webname'>
            <h1>Express Media</h1>
            <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>

      {/* Rightside */}
      <div className='a-right'>
          <form className="infoForm authForm" onSubmit={handleSubmit}>
        <h2>{isSignUp ? "Sign up" : "Login"}</h2>

        {
          isSignUp && (
            <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstname"
            value={data.firstname}
            onChange={handlechange}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastname"
            value={data.lastname}
            onChange={handlechange}
          />
        </div>
          )
        }

        <div>
          <input
            type="text"
            className="infoInput"
            name="username"
            placeholder="Username"
            value={data.username}
            onChange={handlechange}
          />
        </div>

        <div>
          <input
            type="password"
            className="infoInput"
            name="password"
            placeholder="Password"
            value={data.password}
            onChange={handlechange}
          />
          {
            isSignUp && (
            <input
            type="password"
            className="infoInput"
            name="confirmpass"
            placeholder="Confirm Password"
            value={data.confirmpass}
            onChange={handlechange}
            />
            )
          }
        </div>
        <span style={{display:confirmpass ? "none":"block",color:"red",alignSelf:"flex-end",fontSize:"12px"}}>
          * confirm Password is not same
        </span>

        <div>
            <span style={{fontSize: '14px',cursor:"pointer"}} onClick={()=>{SetisSignUp(!isSignUp); resetForm()}}>
              {isSignUp ? "Already have an account. Login!" : "Don't have an account? Sign up"}
            </span>
        </div>
        <button className="button infoButton" type="submit" disabled={loading}>{loading ? "Loading.." : isSignUp ? "Signup" : "Login"}</button>
      </form>
        </div>
    </div>
  )
}


export default Auth
