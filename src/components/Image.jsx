import React from 'react';
import Header from './Header';

const Image = () => {
  return (
    <div className="h-screen w-screen">
      <div
        className="
          h-3/4
          bg-cover bg-no-repeat bg-center
          bg-[url('https://images.unsplash.com/photo-1724579243950-3e49ae3560ee?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170')]"
      >
          <div className='text-white pt-2 pl-10 font-serif'>India Tourism</div>
          <div className='pl-10 pt-5'> <Header /> </div>
      </div>
      <div className='h-1/4'>
        <div className=" bg-blue-50 h-full pt-30 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} India Tourism. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Image;

