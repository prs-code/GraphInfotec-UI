import React from 'react';
import logo from '../../assets/images/logo.png';

const Nvabar = () => {
  return (
    <div>
        
    <div className="flex items-center w-[90%] m-auto py-2">
        <img 
            src={logo} 
            alt="graph-logo"
            className="p-1 w-16 h-16 rounded-lg cursor-pointer" />
        <div>
            <ul className="flex justify-between p-5 mr-5 text-gray-200">
                <li className="ml-5 p-2 rounded-md cursor-pointer duration-200 hover:bg-[#CD2122]">BPMS گراف</li>
                <li className="ml-5 p-2 rounded-md cursor-pointer duration-200 hover:bg-[#CD2122]">محصولات</li>
                <li className="ml-5 p-2 rounded-md cursor-pointer duration-200 hover:bg-[#CD2122]">راهکارها</li>
                <li className="p-2 rounded-md cursor-pointer duration-200 hover:bg-[#CD2122]">درباره گراف</li>
            </ul>
        </div>
    </div>
    </div>
  )
};

export default Nvabar;