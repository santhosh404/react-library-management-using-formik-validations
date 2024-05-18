import React from 'react';
import { Link } from 'react-router-dom';



export default function Topbar() {
  return (
    <>
      <div className='topbar px-10 py-6 flex justify-between' style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}>
        <div className='flex gap-2 items-center'>
          <Link to={"/"}>
            <h1 className='text-[30px] font-[900]'>A-Z Library</h1>
          </Link>
        </div>

        <div className='flex justify-center gap-16'>
            {/* <img className='cursor-pointer' src={lightMode} />
            <img className='cursor-pointer' src={icon2} />
            <img className='cursor-pointer' src={notification} />
            <img className='cursor-pointer' src={settings} />
            <img className='cursor-pointer' src={user} /> */}
            
        </div>

      </div>
    </>
  )
}
