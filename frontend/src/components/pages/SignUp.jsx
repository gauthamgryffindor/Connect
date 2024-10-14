import React,{useState}from 'react'
import axios from 'axios'

function SignUp() {

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [userName,setUserName]=useState("")
  const handleClick=async(e)=>{ 
      e.preventDefault()
    // const axios= axios.create({
    //   baseURL: 'http://localhost:5000'
    // })
    try{
   const res=await axios.post('http://localhost:5000/signup',{
    userName:userName,
    email:email,
    password:password
   }
  )
  //return "hucu"
  console.log("------->",res)
  }
   catch(error){
    console.log("------->",error)
   }
}
  return (
  <form onSubmit={handleClick}>
    <div> Sign up Page</div>
    <div>
                <input type="name" id="userName" placeholder="name" onChange={(event) => {setUserName(event.target.value)}}/>
                <label  >userName</label>
              </div>
     <div>
                <input type="email" id="floatingInput" placeholder="name@example.com" onChange={(event) => {setEmail(event.target.value)}}/>
                <label>Email address</label>
              </div>
              <div >
                <input type="password" id="floatingPassword" placeholder="Password" onChange={(event) => {setPassword(event.target.value)}}/>
                <label >Password</label>
              </div>
              <button type='submit'>SignUp</button>
  </form>
  
  )
}
export default SignUp