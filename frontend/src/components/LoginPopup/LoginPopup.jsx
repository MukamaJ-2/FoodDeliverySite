import React, {  useState } from 'react'
import "./LoginPopup.css"
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) =>{

    const [currentState, setCurrentState] = useState("Login")
    const [data,setData] = useState({
      name:"",
      email:"",
      password:""
    })

    const onChangeHandler = (event) =>{
      const name = event.target.name;
      const value = event.target.value;
      setData(data=>({...data,[name]:value}))
    }

   

  return (
    <div className='login-popup'>
        <form action="" className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currentState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-input">
              {currentState==="Login"?<></>:<input name='name' onChange={onChangeHandler} value={data.name} type="text"placeholder='Name' required/>}

                <input name='email' onChange={onChangeHandler} value={data.email} type="email"placeholder='Email' required/>
                <input name='password' onChange={onChangeHandler} value={data.password} type="password"placeholder='Password' required/>  
            </div>
            <button>{currentState==="Sign Up" ? "Create Account":"Login"}</button>
            <div className="login-popup-condition">
              <input type="checkbox" required />
              <p>I agree to the terms of use & privacy policy.</p>
            </div>
            {currentState==="Login"?
            <p>Don't have an account? <span onClick={()=>setCurrentState("Sign Up")}>Create an Account</span></p>
            :<p>Already have an account? <span onClick={()=>setCurrentState("Login")}>Login</span></p>}
        </form>
    </div>
  )
}

export default LoginPopup