import React from 'react'
import { Phone,Mail,MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

const Contactp = () => {
  return (
    <div className='bg-blue-50 h-screen'>
      <div className='text-gray-600 flex justify-center pt-5 text-5xl font-bold'>CONTACT US</div>
      <div className='pl-15 pt-10 font-semibold gap-8'>
        <div className='font-bold text-2xl underline decoration-red-600'>Reach Out</div>
      </div>
      <div className='pl-15 pt-10 flex'>
        <span><Phone size={36} color="#f91f1f"  /></span>
        <span className=' font-mono pl-8 text-xl font-semibold'>Landline<br/>9483103828</span>
      </div>
      <div className='pl-15 pt-10 flex'>
        <span><Mail size={36} color="#f91f1f" /></span>
        <span className='font-mono pl-8 text-xl font-semibold'>Email<br/>info.mot@gov.in</span>
      </div>
      <div className='pl-15 pt-10 flex'>
        <span><MapPin size={36} color="#f91f1f" /></span>
        <span className=' font-mono pl-8 text-xl font-semibold'>Address<br/>Ministry of Tourism,<br/> Transport Bhawan, Sansad<br/>Marg, New Delhi - 110001</span>
      </div>
      <div className='text-cyan-950 underline pl-15 pt-10 font-semibold'><Link to='/'>Go back to home</Link></div>

    </div>
  )
}

export default Contactp