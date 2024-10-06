import React,{useState} from 'react'
import {useNavigate, } from 'react-router-dom'

function Signup(props) {
  const [Craditinal, setCraditinal] = useState({name : "",email : "",password : ""})
  const UseNavigate = useNavigate(); 

  const handleSubmit = async (e)=>{
    e.preventDefault()
    const response = await fetch("http://localhost:4000/api/auth/createuser",{
    method : "POST",
    headers : {
      
      'Content-Type' : "application/json"
    },
    body : JSON.stringify({name : Craditinal.name,email : Craditinal.email,password : Craditinal.password})
    })
    const json = await response.json()
    if(json.success){
      localStorage.setItem('token',json.authtoken)
      UseNavigate('/')
      props.showAlert('   Account Created',+""+'success')
    }else{
     props.showAlert('    Invalid Creditional','danger')
    }
  }

 const  onChange  = (e)=>{
   setCraditinal({...Craditinal, [e.target.name]: e.target.value} )
 }
  return (
    <>
  <form onSubmit={handleSubmit}>

  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" name='name' onChange={onChange} aria-describedby="emailHelp" minLength={5} required/>
  </div>
  
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" name='email' onChange={onChange} aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>

  
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name='password'minLength={5} required onChange={onChange}/>
  </div>



  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </>
  )
}

export default Signup       