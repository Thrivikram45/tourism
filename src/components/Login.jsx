import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPass] = useState("")

  const loginHandler = (e) => {
  e.preventDefault();

  if (!email || !password) {
    alert("Please fill in all fields before signing up!");
    return;
  }

  console.log('Logged In Successfully');
  setEmail("")
  setPass("")
}

  return (
    <div className='grid grid-cols-2'>
      <div className='h-screen'>
        <img className='h-full w-full' src='https://www.incredibleindia.gov.in/content/dam/incredible-india/images/global/subscription-desktop-bg.jpg'></img>
      </div>
      <div className='h-screen'>

        <div className='flex justify-center gap-8 font-bold text-xl text-cyan-900 underline'>
          <Link to='/login'><span className='hover:underline '>Login</span></Link>
          <Link to='/login/signup'><span className='hover:underline '>Sign Up</span></Link>
        </div>
        <div className=' flex text-3xl justify-center font-bold pt-5'>Login to your account</div>
        <div>
          <form className='flex flex-col items-start gap-4'>

            <input
            type="email" placeholder="Email" required value={email}
            className='ml-15 mt-10 w-1/2 border-2 px-5 py-1 mr-15 rounded' 
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

             <button onClick={(e)=>{
                loginHandler(e)
            }} 
            className='bg-black text-white px-5 py-1 mx-15 rounded'>Login</button>

          </form>
        </div>
        <div className='text-cyan-950 underline ml-15 mt-70'><Link to='/'>Go back to home</Link></div>

      </div>
    </div>
  )
}

export default Login