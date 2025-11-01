import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPass] = useState("")
    const [cpassword, setCpass] = useState("")

  const signUpHandler = (e) => {
  e.preventDefault()

  if (!name || !email || !password || !cpassword) {
    alert("Please fill in all fields before signing up!")
    return;
  }

  if (password !== cpassword) {
    alert("Passwords do not match!")
    return;
  }

  console.log('Account Created Successfully')
  setName("")
  setEmail("")
  setPass("")
  setCpass("")
};


  return (
    <div className='grid grid-cols-2'>
      <div className='h-screen'>
        <img className='h-full w-full' src='https://www.incredibleindia.gov.in/content/dam/incredible-india/images/global/subscription-desktop-bg.jpg'></img>
      </div>
      <div className='h-screen'>

        <div className='flex justify-center gap-8 font-bold text-xl text-cyan-900 underline'>
          <Link to='/login'><span>Login</span></Link>
          <Link to='/login/signup'><span>Sign Up</span></Link>
        </div>
        <div className=' flex text-3xl justify-center font-bold pt-5'>Create an account</div>
        <div>
          <form className='flex flex-col items-start gap-4'>

            <input 
            type="text" placeholder="Full Name" required value={name} 
            className='ml-15 mt-10 w-1/2 border-2 px-5 py-1 mr-15 rounded' 
            onChange={(e)=>{
                setName(e.target.value)
            }
            }
            />

            <input
            type="email" placeholder="Email" required value={email}
            className='ml-15  w-1/2 border-2 px-5 py-1 mr-15 rounded' 
            onChange={(e)=>{
                setEmail(e.target.value)
            }
            }
            />

            <input
            type="text" placeholder="Password" required value={password}
            className='ml-15 w-1/2 border-2 px-5 py-1 mr-15 rounded' 
            onChange={(e)=>{
                setPass(e.target.value)
            }
            }
            />

            <input
            type="text" placeholder="Confirm Password" required value={cpassword}
            className='ml-15 w-1/2 border-2 px-5 py-1 mr-15 rounded' 
            onChange={(e)=>{
                setCpass(e.target.value)
            }
            }
            />

            <button onClick={(e)=>{
                signUpHandler(e)
            }} 
            className='bg-black text-white px-5 py-1 mx-15 rounded'>Sign Up</button>

          </form>
        </div>
        <div className='text-cyan-950 underline ml-15 mt-44'><Link to='/'>Go back to home</Link></div>

      </div>
    </div>
  )
}

export default SignUp