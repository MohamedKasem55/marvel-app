import React, { useState } from 'react'
import{useDispatch,useSelector} from 'react-redux'
import { authActions } from '../store/loginSlice'
import { useNavigate } from "react-router-dom";


function Home() {
  const [loginForm,setLoginForm]=useState({email:'',password:''})
  let state=useSelector(state=>state)
  let navigate=useNavigate()
  let dispatch=useDispatch()

  const loginSubmit=(event)=>{
    event.preventDefault()
    console.log(loginForm);
    dispatch(authActions.login(loginForm.email))
    setLoginForm({email:'',password:''})
    navigate('/charachters')
  }
  const loginChangeHandler=(event)=>{
    console.log(event.target);
    switch (event.target.name) {
      case "exampleInputEmail1":
        setLoginForm(previousState=>({...previousState,email:event.target.value}))
        break;
      case "exampleInputPassword1":
        setLoginForm(previousState=>({...previousState,password:event.target.value}))
        break;
    }
  }
  return (
    <div style={{height:'100vh'}} className='m-0 row justify-content-center align-items-center bg-aluminium'>
      <form onSubmit={loginSubmit} onChange={loginChangeHandler} value={loginForm}  className='w-50  shadow p-5 bg-body rounded'>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input value={loginForm.email} type="email" className="form-control" id="exampleInputEmail1" name="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input value={loginForm.password} type="password" className="form-control" name='exampleInputPassword1' id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>

      </form>


    </div>
  )
}

export default Home