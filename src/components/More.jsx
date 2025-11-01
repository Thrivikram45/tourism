import React from 'react'
import { Link } from 'react-router-dom'

const More = () => {
  return (
    <div className='flex gap-5'>
        <Link to='/more/about'><span className='hover:underline '>About Us</span></Link>
        <Link to='/more/contact'><span className='hover:underline '>Contact</span></Link>
        <Link to='/more/feedback'><span className='hover:underline '>Feedback</span></Link>
    </div>
  )
}

export default More