import React, { useState } from 'react';
//components
import Navbar from "./shared/Nvabar";


const UpSection = () => {
  return (
    <div>
        <div className="w-full h-auto bg-Baner bg-cover bg-no-repeat bg-center">
                <div className="flex justify-center items-center md:justify-end text-gray-200 py-2 w-[90%] m-auto border-b-[1px] border-gray-600">
                    <a 
                        className="md:text-sm md:font-bold text-xs font-bold ml-10 "
                        href='#' >
                            پورتال مشتریان
                    </a>
                    <p className="md:font-medium font-thin md:text-base text-sm">ارتباط با ما : 
                        <a
                            href="#"
                            className="md:text-sm md:font-bold text-xs font-bold"> 61 360 360 051
                        </a>
                    </p>
            </div>
            
            <Navbar />
            <div className="m-14 mb-20 py-20 text-gray-200">
                <h1 className="text-3xl font-semibold">سامانه مدیریت فرآیندهای کسب و کار گراف</h1>
                <h4 className="text-xl font-bold mt-10">بکارگیری جدیدترین فناوری های روز دنیا</h4>
                <p className="text-base font-medium my-10">راهکار های ما را در کسب و کار خود تجربه کنید</p>
            </div>
        </div>
        <div className="text-center text-white py-6 z-10 w-[90%] bg-[#CD2122] m-auto mt-[-110px] mb-10 border-t-[3px] border-white rounded-lg">
            <h1 className="text-2xl font-extrabold mb-5">BPMS گراف</h1>
            <p className="text-xl font-bold mb-5">با <span className="text-3xl font-semibold">اطمینان کامل و آسوده خاطر </span> گام آغازین را برای استفاده از سامانه <span className="text-3xl font-semibold">گراف</span> بردارید</p>
            <p className="text-xl font-medium opacity-75 mb-5">شناسایی و مدل‌سازی، پیاده‌سازی، استقرار، آموزش و پشتیبانی فرآیندها</p>
        </div>
    </div>
  )
}

export default UpSection;