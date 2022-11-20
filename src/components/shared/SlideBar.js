import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const SlideBar = () => {
    const [open, setOpen ] = useState(false);

  return (
    <div className="flex flex-col items-end justify-center min-h-screen py-2 z-1000">


          {
            open ? (
              <button
                className="flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50"
                onClick={() => setOpen(false)}
              >
                x
              </button>
            ) : (
              <svg
                onClick={() => setOpen(!open)}
                className="fixed z-30 flex items-center cursor-pointer left-10 top-10 mt-2"
                fill="#fff"
                viewBox="0 0 100 80"
                width="40"
                height="40"
              >
                <rect width="100" height="10"></rect>
                <rect y="30" width="100" height="10"></rect>
                <rect y="60" width="100" height="10"></rect>
              </svg>
           )}


        <div className={`top-0 left-0 w-full bg-[#535353] p-10 pr-20 text-white fixed h-full ease-in-out duration-700 ${open ? "translate-x-0" : "translate-x-full"}`}>
          <ul className="flex flex-col m-auto text-center z-100 p-4 text-gray-200 md:flex-row md:justify-between md:p-5 md:mr-5">
                <li className="liStyle">BPMS گراف</li>
                <li className="liStyle">محصولات</li>
                <li className="liStyle">راهکارها</li>
                <li className="liStyle">
                  <Link to="contact">ارتباط با ما</Link></li>
          </ul>
        </div>


    </div>
  )
}

export default SlideBar;