import React, { useState } from 'react';
//icons
import { FiChevronLeft } from 'react-icons/fi';
import { GiProcessor } from 'react-icons/gi';
import { MdOutlineMobileFriendly, MdOutlineArchitecture } from 'react-icons/md';
import { BiCertification } from 'react-icons/bi';
//img
import manageImg from '../assets/images/فرایندها.jpg';
//component
import TextBaner from './shared/TextBaner';
//context
import { useStateContext } from '../context/ContextProvider';


const Section05 = () => {
    const { response } = useStateContext();

  return (
    <>
    <div className="p-5 text-center">
        <div className="md:flex md:justify-around md:items-start md:mt-20 my-5 p-3 m-auto md:w-3/4 w-full">
          <div className="md:w-1/2">
            <div className="text-start p-3 md:text-start md:mb-4">
              <h1 className="md:text-4xl text-xl font-extrabold md:font-semibold mb-2">مدیریت <span className="text-[#cd2122]">فرآیندها</span></h1>
              <div className="w-10 h-0.5 bg-[#cd2122]"></div>
            </div>
            <div className="md:w-full md:pl-5 text-center w-full">
              <h3 className="my-10 md:my-5 text-base text-start md:text-lg font-semibold text-[#535353] pb-2">موتور گردش کار و مدیریت فرآیندها مبتنی بر استاندارد BPMN </h3>
              <p className="text-justify leading-10 md:leading-normal text-sm text-[#535353] pb-4">تعریف و مدیریت فرایند های کاری، این امکان را می‌دهد تا در حداقل زمان ممکن، فرآیندهای خود را با هر درجه پیچیدگی، به راحتی پیاده سازی کرده و نرم افزاری کاملا سفارشی و مطابق با نیاز های سازمان خود ایجاد نمایید. همچنین در صورت گسترش فعالیت های سازمان و یا تغییر رویکرد های گذشته، می توانید در هر زمان، فرایند های جدیدی به نرم افزار اضافه نموده و یا فرایند های موجود را تغییر دهید.</p>
              <p className="text-justify leading-10 md:leading-normal text-sm text-[#535353] pb-4">از طرف دیگر این امکان را فراهم می آورد تا فرم‌ها به طور خودکار در مسیر مشخص و با توجه به دسترسی‌های اعمال شده گردش داشته باشند که این امر با توجه به مکانیزه شدن فرآیندهای جاری در سازمان ، سبب افزایش سرعت انجام فرآیندهای کسب و کار و کاهش زمان تلف شده پرسنل می گردد.</p>
              <img 
                src={manageImg} 
                alt="form-builer"
                className="mb-5 md:mb-0" />
            </div>
        </div>
        <div>
        <div className="p-3 md:pl-5 md:w-full">
                <div className="flex justify-start items-center">
                <GiProcessor className="w-8 h-8 md:w-12 md:h-12 text-white bg-[#cd2122] rounded-full p-1 hover:scale-75 duration-100"/>
                    <div className="md:w-full text-start">
                        <p className="text-base font-bold text-[#cd2122] mr-3 md:text-xl md:font-extrabold">ویژگی های ابزار مدیریت فرآیندها</p>
                        <div className="border-b-2 border-[#535353] border-dashed h-0.5 w-full mr-3 mt-2"></div>
                    </div>
                </div>
                <p className="text-[#535353] my-5 text-sm">از دیگر ویژگی های این ابزار می توان به موارد ذیل اشاره کرد :</p>
                <ul className="text-[#535353] pr-10 text-sm text-start w-full border-b-2 border-[#ccc] pb-5">
                    <li className="flex items-center justify-start mb-2">
                        <FiChevronLeft className="text-xs font-extralight ml-2" />امکان تعریف چارت سازمانی
                    </li>
                    <li className="flex items-center justify-start mb-2">
                        <FiChevronLeft className="text-xs font-extralight ml-2" />امکان تعیین گردش های پیش فرض بر اساس چارت سازمانی 
                    </li>
                    <li className="flex items-center justify-start mb-2">
                        <FiChevronLeft className="text-xs font-extralight ml-2" />امکان نظارت بر افراد زیرمجموعه بر اساس چارت
                    </li>
                    <li className="flex items-center justify-start mb-2">
                        <FiChevronLeft className="text-xs font-extralight ml-2" />مدل سازی فرایند و امکان تعریف گردش کار فرم‌ها مبتنی بر استاندارد BPMN
                    </li>
                    <li className="flex items-center justify-start mb-2">
                        <FiChevronLeft className="text-xs font-extralight ml-2" />امکان اعمال سیاست های مختلف برای هر گردش کاری
                    </li>
                    <li className="flex items-center justify-start mb-2">
                        <FiChevronLeft className="text-xs font-extralight ml-2" />مدیریت و نظارت بر فرایند، امکان مشاهده چرخه فرم و مراحل انجام کار
                    </li>
                </ul>
                <div>
                    <h2 className="p-5 md:p-14 md:mt-8 text-center md:text-start text-xl font-bold text-gray-600">ویژگی های ابزار مدیریت فرآیندها</h2>
                    <div className="md:flex md:justify-around mb-20 flex flex-wrap justify-center items-center gap-4 text-[#535353] text-center">
                    <div className="flex flex-col justify-center items-center">
                        <BiCertification className=" w-10 h-10 mb-2 text-[#cd2122]"/>
                        <p className="text-xs m-5 md:m-0">مبتنی بر استاندارد BPMN</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <MdOutlineArchitecture className=" w-10 h-10 mb-2 text-[#cd2122]"/>
                        <p className="text-xs m-5 md:m-0">معماری سرویس‌گرا</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <MdOutlineMobileFriendly className=" w-10 h-10 mb-2 text-[#cd2122]"/>
                        <p className="text-xs m-5 md:m-0">نسخه ویژه موبایل</p>
                    </div>
            </div>
        </div>
        </div>
        </div>
        </div>
    </div>

    {
        response && (
            <div className="backdrop-blur bg-bgGozaresh bg-cover bg-center md:py-8 p-5 mb-10 brightness-40">
                <TextBaner 
                    boldText={response[4].BoldText}
                    lightText={response[4].LightText}/>
            </div>
        )
    }
    

    </>
  )
}

export default Section05