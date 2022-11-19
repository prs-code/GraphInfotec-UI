import React, { useState } from 'react';
//img
import mobilePic from '../assets/images/اپلیکیشن-گراف-BPMS.webp';
//icons
import { TfiRulerPencil } from 'react-icons/tfi';
import { FiChevronLeft } from 'react-icons/fi';
import { MdOutlineAddLocationAlt, MdOutlineDashboardCustomize } from 'react-icons/md';
import { AiOutlineForm } from 'react-icons/ai';
import { BsClipboardData } from 'react-icons/bs';
import { BiNetworkChart } from 'react-icons/bi';
import { SiAppstore } from 'react-icons/si';
//component
import TextBaner from './shared/TextBaner';
//context
import { useStateContext } from '../context/ContextProvider';



const Baner03 = () => {
    const { response } = useStateContext();

  return (
    <>
        <div className="w-full m-auto md:flex md:mt-10 md:justify-end md:px-40 mb-10">
            <div>
                <div className="text-start p-3 md:pl-10 md:w-3/4">
                    <h1 className="text-xl font-extrabold md:text-4xl md:font-extrabold">اپلیکیشن موبایل <span className="text-[#CD2122]">Android , IOS</span></h1>
                    <div className="h-[3px] w-[50px] bg-[#ccc] my-5"></div>
                    <h2 className="text-[#535353] mb-5 leading-10 text-justify text-sm m-auto border-b-2 border-[#ccc] pb-5 md:pb-10">امروزه با گسترش استفاده از ابزارهای ارتباطی هوشمند مانند تلفن همراه و تبلت،وجود برنامه هایی که بتوانند در کنار وجود نسخه های دسکتاپ روی این ابزارها هم قابلیت اجراء داشته باشند بیش از پیش محسوس      است.از این رو شرکت گراف با بکارگیری نیروهای متخصص و تکنولوژی روز و با پشت سر گذاشتن تست های فنی لازم، توانسته است نرم افزار نظارت ، بازرسی مدیریت کار همراه را به متقاضیان ارائه نماید.</h2>
                </div>


                <div className="p-3 md:pl-10 md:w-3/4">
                <div className="flex justify-start items-center">
                <TfiRulerPencil className="w-8 h-8 md:w-12 md:h-12 text-white bg-[#cd2122] rounded-full p-1 hover:scale-75 duration-100"/>
                <div>
                    <p className="text-base font-bold text-[#cd2122] mr-3 md:text-xl md:font-extrabold">راهکارهای اپلیکیشن مدیریت کار همراه</p>
                    <div className="border-b-2 border-[#535353] border-dashed h-0.5 w-full mr-3 mt-2"></div>
                </div>
                </div>
                <p className="text-[#535353] my-5 text-sm">با استفاده از این راهکار امکان ایجاد انواع چک لیست ها و زمانبندی آنها برای مکانهای خاص برای کاربران فراهم می گردد.</p>
                <ul className="text-[#535353] pr-10 text-sm">
                    <li className="flex items-center justify-start mb-2">
                        <FiChevronLeft className="text-xs font-extralight ml-2" />برداشت اطلاعات میدانی
                    </li>
                    <li className="flex items-center justify-start mb-2">
                        <FiChevronLeft className="text-xs font-extralight ml-2" />بازدید و بازرسی
                    </li>
                    <li className="flex items-center justify-start mb-2">
                        <FiChevronLeft className="text-xs font-extralight ml-2" />پرسشنامه و تحقیق و پژوهش
                    </li>
                    <li className="flex items-center justify-start mb-2">
                        <FiChevronLeft className="text-xs font-extralight ml-2" />حضور و غیاب
                    </li>
                    <li className="flex items-center justify-start mb-2">
                        <FiChevronLeft className="text-xs font-extralight ml-2" />مدیریت کار همراه
                    </li>
                </ul>
            </div>
        
            </div>

            <div className="md:w-full">
                <img 
                    src={mobilePic} 
                    alt="mobile-application"
                    className="w-full h-full p-3 md:p-0" />
            </div>
        </div>
        <div>
            <h2 className="p-5 md:p-14 text-center md:text-start text-xl font-bold text-gray-600">ویژگی های کلیدی اپلیکیشن موبایل</h2>
            <div className="md:flex md:justify-around mb-20 flex flex-wrap justify-center items-center gap-4 text-[#535353] text-center">
                <div className="flex flex-col justify-center items-center">
                    <MdOutlineAddLocationAlt className=" w-10 h-10 mb-2 text-[#cd2122]"/>
                    <p className="text-xs m-5 md:m-0">مدیریت و کنترل محدوده انجام کار</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <AiOutlineForm className=" w-10 h-10 mb-2 text-[#cd2122]"/>
                    <p className="text-xs m-5 md:m-0">ثبت آنلاین و آفلاین اطلاعات</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <BsClipboardData className=" w-10 h-10 mb-2 text-[#cd2122]"/>
                    <p className="text-xs m-5 md:m-0">حضور و غیاب پرسنل</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <MdOutlineDashboardCustomize className=" w-10 h-10 mb-2 text-[#cd2122]"/>
                    <p className="text-xs m-5 md:m-0">دسترسی به داشبوردهای اطلاعاتی</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <BiNetworkChart className=" w-10 h-10 mb-2 text-[#cd2122]"/>
                    <p className="text-xs m-5 md:m-0">دسترسی به کارتابل فرآیندها</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <SiAppstore className=" w-10 h-10 mb-2 text-[#cd2122]"/>
                    <p className="text-xs m-5 md:m-0">دسترسی به اطلاعات، سوابق و گزارشات مورد نیاز</p>
                </div>
            </div>
        </div>

        {
            response && (
                <div className="bg-bgHamishe bg-cover bg-center md:py-8 p-5 mb-10">
                    <TextBaner 
                        boldText={response[3].BoldText}
                        lightText={response[3].LightText}/>
                </div>
            
            ) 
        }
    </>
  )
}

export default Baner03;