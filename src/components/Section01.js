import React from 'react';
//components
import Navbar from "./shared/Nvabar";


const UpSection = () => {
  return (
    <div>
        <div className="w-full h-auto bg-center bg-fixed  bg-no-repeat bg-cover bg-Baner">
                <div className="flex justify-center items-center md:justify-end text-gray-200 py-2 w-[90%] m-auto border-b-[1px] border-gray-600">
                    <a 
                        className="ml-10 text-xs font-bold md:text-sm md:font-bold "
                        href='#' >
                            پورتال مشتریان
                    </a>
                    <p className="text-sm font-thin md:font-medium md:text-base">ارتباط با ما : 
                        <a
                            href="#"
                            className="text-xs font-bold md:text-sm md:font-bold"> 61 360 360 051
                        </a>
                    </p>
            </div>
            
            <Navbar />
            <div className="py-20 mb-20 text-gray-200 m-14">
                <h1 className="text-3xl font-semibold">سامانه مدیریت فرآیندهای کسب و کار گراف</h1>
                <h4 className="mt-10 text-xl font-bold">بکارگیری جدیدترین فناوری های روز دنیا</h4>
                <p className="my-10 text-base font-medium">راهکار های ما را در کسب و کار خود تجربه کنید</p>
            </div>
        </div>
        <div className="text-center text-white py-6 z-10 w-[90%] bg-[#CD2122] m-auto mt-[-110px] mb-10 border-t-[3px] border-white rounded-lg">
            <h1 className="mb-5 text-2xl font-extrabold">BPMS گراف</h1>
            <p className="mb-5 text-xl font-bold">با <span className="text-3xl font-semibold">اطمینان کامل و آسوده خاطر </span> گام آغازین را برای استفاده از سامانه <span className="text-3xl font-semibold">گراف</span> بردارید</p>
            <p className="mb-5 text-xl font-medium opacity-75">شناسایی و مدل‌سازی، پیاده‌سازی، استقرار، آموزش و پشتیبانی فرآیندها</p>
        </div>
    </div>
  )
}

export default UpSection;