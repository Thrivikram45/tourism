import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='text-white flex justify-between '>
        <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='font-mono text-xl'>visit</span><br/>
            <span className='font-serif font-bold text-2xl'>INDIA</span>
        </div>
        <div className='pr-10 flex gap-5'>
            <Link to='/tripplanner'><span className='hover:underline'>Trip Planner</span></Link>
            <Link to='/tripdetails'><span className='hover:underline '>Trip Details</span></Link>
            <Link to='/destinations'><span className='hover:underline '>Destinations</span></Link>
            <Link to='/more'><span className='hover:underline '>More</span></Link>
            <Link to='/login'><span className='hover:underline '>Login</span></Link>
        </div>

    </div>
  )
}

export default Header