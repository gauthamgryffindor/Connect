import React,{useState}from 'react'
import axios from 'axios'
function SignIn() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const handleClick=async(e)=>{
    e.preventDefault()
   const res=await axios.post('http://localhost:5000/signin',{
    email:email,
    password:password
   }
  )
  console.log("signin------->",res)
  }
  return (
  <form onSubmit={handleClick}>
    <div> Sign In Page</div>
     <div>
                <input type="email" id="floatingInput" placeholder="name@example.com"  onChange={(event) => {setEmail(event.target.value)}}/>
                <label >Email address</label>
              </div>
              <div >
                <input type="password" id="floatingPassword" placeholder="Password" onChange={(event) => {setPassword(event.target.value)}}/>
                <label >Password</label>
              </div>
              <button type='submit'>SignIn</button>
  </form>
  )
}

export default SignIn