import React from 'react'
import { Link } from 'react-router-dom'

const Aboutp = () => {
  return (
    <div className='bg-blue-50 h-screen'>
      <div className='text-gray-600 flex justify-center pt-5 text-5xl font-bold'>ABOUT US</div>
      <div className='pl-5 pt-10 font-semibold flex flex-col gap-8'>
        <div>
          Welcome to Explore India, your gateway to discovering the beauty, culture, and adventures across India.
          We aim to help travelers explore hidden gems, plan perfect trips, and experience India like never before.
          India is a land of stories — every city, mountain, and temple has one to tell. At Explore India, we bring those stories to life, 
          guiding you through the country’s heritage, festivals, and natural wonders that define its magic.
        </div>
        <div>
          <div className='font-bold text-2xl'>What We Offer</div>
          <ul className="list-disc pl-7">
            <li>Destination guides and travel itineraries</li>
            <li>Cultural and historical insights</li>
            <li>Adventure and heritage tour ideas</li>
            <li>Travel tips and safety information</li>
            <li>Local experiences and recommendations</li>
          </ul>
        </div>
        <div>
          <div className='font-bold text-2xl'>Why Choose Us</div>
          At Explore India, we believe every traveler deserves more than just a trip — they deserve an experience. That’s why we focus on trust, 
          comfort, and genuine connections, helping you explore India safely and joyfully.Our team brings together travel experts, local guides, 
          and technology to provide reliable, well-researched, and easy-to-follow travel information — making your planning simple and stress-free.
        </div>
        <span className='text-cyan-950 underline'><Link to='/'>Go back to home</Link></span>
      </div>
    </div>
  )
}

export default Aboutp