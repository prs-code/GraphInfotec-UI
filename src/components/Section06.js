import React, { useState } from 'react';
//icons
import { FiChevronLeft } from 'react-icons/fi';
import { MdOutlineDashboard } from 'react-icons/md';
import { AiOutlineBarChart } from 'react-icons/ai';
import { RiDatabase2Fill } from 'react-icons/ri';
//component
import TextBaner from './shared/TextBaner';
//context
import { useStateContext } from '../context/ContextProvider';

const Section06 = () => {
    const { response } = useStateContext();


  return (
    <>
    <div className="text-center p-5 md:flex">
      <div className="md:flex md:flex-col md:justify-around md:items-start md:pr-20 md:mt-20 p-3 m-auto md:w-3/4 w-full">
          <div className="md:w-1/2">
            <div className="text-start p-3 md:text-start md:mb-4">
              <h1 className="md:text-4xl text-xl font-extrabold md:font-semibold mb-2"><span className="text-[#cd2122]">داشبورد</span> اطلاعاتی</h1>
              <span className="mb-2 text-base font-bold">با امکان سفارشی سازی 100 درصد</span>
              <div className="w-10 h-0.5 bg-[#ccc] mt-4"></div>
            </div>
            <div className="md:w-full md:pl-5 text-center w-full">
              <p className="text-justify leading-10 md:leading-normal text-sm text-[#535353] pb-4">سازمان‌ها در جستجوی روش‌هایی ساده، برای دستیابی به اطلاعات کلیدی از میان حجم انبوهی از اطلاعات بوده تا با تحلیل آنها، عملکرد سازمان را اندازه‌گیری نمایند، تصمیمات مناسب و به موقع را اتخاذ و در نهایت هزینه‌ها را کاهش دهند. این سازمان‌ها از جمله استفاده‌کنندگان داشبوردهای اطلاعاتی هستند. </p>
            </div>
        </div>

        <div className="p-3 md:pl-5 md:w-full">
                <div className="flex justify-start items-center">
                <MdOutlineDashboard className="w-8 h-8 md:w-12 md:h-12 text-white bg-[#cd2122] rounded-full p-1 hover:scale-75 duration-100"/>
                    <div className="md:w-full text-start">
                        <p className="text-base font-bold text-[#cd2122] mr-3 md:text-xl md:font-extrabold">امکانات داشبورد اطلاعاتی</p>
                        <div className="border-b-2 border-[#535353] border-dashed h-0.5 w-full mr-3 mt-2"></div>
                    </div>
                </div>
                <p className="text-[#535353] my-5 text-sm text-start">از جمله امــــکانات داشبورد مدیریتی گـــراف:</p>
                <ul className="text-[#535353] pr-10 text-sm text-start w-full pb-5">
                    <li className="flex items-center justify-start mb-2">
                        <FiChevronLeft className="text-xs font-extralight ml-2" />محیط کاری تحت وب و مـوبایـل
                    </li>
                    <li className="flex items-center justify-start mb-2">
                        <FiChevronLeft className="text-xs font-extralight ml-2" /> مشاهده نمودارهای کلی از عملكرد سازمان در یک نگاه و قابلیت اندازه‌گيری كارآمدی و ناكارآمدی سيستم 
                    </li>
                    <li className="flex items-center justify-start mb-2">
                        <FiChevronLeft className="text-xs font-extralight ml-2" /> رعایت اصل ســهولت استــفاده برای مدیــران
                    </li>
                    <li className="flex items-center justify-start mb-2">
                        <FiChevronLeft className="text-xs font-extralight ml-2" />بهره‌گیری از شاخص های از پیش تعریف شده برای حوزه‌های عملیاتی مختلف
                    </li>
                    <li className="flex items-center justify-start mb-2">
                        <FiChevronLeft className="text-xs font-extralight ml-2" />طراحی و پیاده‌سازی شاخص‌های شناسایی شده جدید، توسط کارشناسان سازمان
                    </li>
                    <li className="flex items-center justify-start mb-2">
                        <FiChevronLeft className="text-xs font-extralight ml-2" />استفاده از المان‌های گرافیکی مطرح در داشبوردها مانند نشانگرها، انواع نمودارها و...
                    </li>
                    <li className="flex items-center justify-start mb-2">
                        <FiChevronLeft className="text-xs font-extralight ml-2" />ایجاد داشبوردهای اختصاصی به ازای مدیران در حوزه‌های مختلف
                    </li>
                </ul>
            </div>
        </div>


        <div className="md:flex md:flex-col md:justify-around md:items-start md:mt-20 md:pl-20 my-5 p-3 m-auto md:w-3/4 w-full">
          <div className="md:w-1/2">
            <div className="text-start p-3 md:text-start md:mb-4">
              <h1 className="md:text-4xl text-xl font-extrabold md:font-semibold mb-2">گزارش ساز <span className="text-[#cd2122]">پویا</span></h1>
              <span className="mb-2 text-base font-bold"> ساخت گزارشات مورد نیاز و تبدیل داده های پراکنده به اطلاعات کارگشا</span>
              <div className="w-10 h-0.5 bg-[#ccc] mt-4"></div>
            </div>
            <div className="md:w-full md:pl-5 text-center w-full">
              <p className="text-justify leading-10 md:leading-normal text-sm text-[#535353] pb-4">گزارش‌ساز گراف به واسطه کاربری ساده خود، این امکان را فراهم می‌آورد تا کاربران بتواند بدون نیاز به دانش برنامه نویسی گزارش‌های ساده و پیچیده‌ای را بسازند و گزارشات مورد نیاز برای تصمیم‌گیری را در اختیار مدیران و‌ کارکنان قرار دهند.</p>
            </div>
        </div>

        <div className="p-3 md:pl-5 md:w-full">
                <div className="flex justify-start items-center">
                <AiOutlineBarChart className="w-8 h-8 md:w-12 md:h-12 text-white bg-[#cd2122] rounded-full p-1 hover:scale-75 duration-100"/>
                    <div className="md:w-full text-start">
                        <p className="text-base font-bold text-[#cd2122] mr-3 md:text-xl md:font-extrabold">ویژگی‌های بارز گزارش‌ساز پویا</p>
                        <div className="border-b-2 border-[#535353] border-dashed h-0.5 w-full mr-3 mt-2"></div>
                    </div>
                </div>
                <p className="text-[#535353] my-5 text-sm text-start">امکان تعیـــین سطح دســـــترسی بر اساس نقش در 3 سطح :
                  <ul className="text-[#535353] pr-10 text-sm text-start w-full pb-5">
                  <li className="flex items-center justify-start mb-2">
                        <FiChevronLeft className="text-xs font-extralight ml-2" />منو ها و امکانات سامانه
                    </li>
                    <li className="flex items-center justify-start mb-2">
                        <FiChevronLeft className="text-xs font-extralight ml-2" />محدوده اطلاعات گزارش
                    </li>
                    <li className="flex items-center justify-start mb-2">
                        <FiChevronLeft className="text-xs font-extralight ml-2" />گزارشات و نمودار های ساخته شده
                    </li>
                  </ul>
                </p>
                <ul className="text-[#535353] text-sm text-start w-full pb-5">
                    <li className="flex items-center justify-start mb-2">
                        <FiChevronLeft className="text-xs font-extralight ml-2" />تعریـــــف انواع حـــــوزه های اطلاعــــــات و دسترســی آنها
                    </li>
                    <li className="flex items-center justify-start mb-2">
                        <FiChevronLeft className="text-xs font-extralight ml-2" /> ذخيره خـــــروجي گــــزارش در انواع فـــــرمت های رایــــج و ناكارآمدی سيستم 
                    </li>
                    <li className="flex items-center justify-start mb-2">
                        <FiChevronLeft className="text-xs font-extralight ml-2" /> تعریف انواع فــــرمول ها و عملــگرهای محاسباتی در گزارش
                    </li>
                    <li className="flex items-center justify-start mb-2">
                        <FiChevronLeft className="text-xs font-extralight ml-2" />امـــــکان استفاده از قالب پیـــــش فرض برای ساخت گزارش
                    </li>
                    <li className="flex items-center justify-start mb-2">
                        <FiChevronLeft className="text-xs font-extralight ml-2" />امکان ارسال یک گزارش با سطح دسترسی متفاوت برای افراد مختلف
                    </li>
                    <li className="flex items-center justify-start mb-2">
                        <FiChevronLeft className="text-xs font-extralight ml-2" />ساخت گزارش های چند سطحی و پارامتریک از پرونده های اطلاعاتی مختلف
                    </li>
                    <li className="flex items-center justify-start mb-2">
                        <FiChevronLeft className="text-xs font-extralight ml-2" />نمایش خروجی گزارش ها در قالب نمودار، فرم هاي طراحي شده و جدولي
                    </li>
                    <li className="flex items-center justify-start mb-2">
                        <FiChevronLeft className="text-xs font-extralight ml-2" />طراحی چندین فـــــرم چاپی با قابلیــــت های بســیار متنوع و کاربردی (برای هر گزارش)
                    </li>
                </ul>
            </div>
        </div>
    </div>

    {
        response &&
    <div className="bg-bgBank bg-cover bg-center md:py-8 p-5 mb-10">
        <TextBaner 
            boldText={response[5].BoldText}
            lightText={response[5].LightText}/>
    </div>
    }


    <div className="text-center md:w-3/5 md:m-auto">
      <div className="text-start p-3 md:text-start md:mb-4">
        <h1 className="md:text-4xl text-xl font-extrabold md:font-semibold mb-2">مدیریت <span className="text-[#cd2122]">بانک ها و سرویس های</span> اطلاعاتی</h1>
        <div className="w-10 h-0.5 bg-[#ccc] mt-4"></div>
        <p className="text-justify leading-10 md:leading-normal md:text-base md:mt-10 text-sm text-[#535353] pb-4">در هسته اصلی BPMS گراف این ویژگی دیده شده است تا براحتی با انواع بانک های اطلاعاتی در سرورهای مختلف ارتباط گرفته و نتایج مورد نظر را در قالب لیست داده، گزارش، نمودار و داشبورد در اختیار شمار قرار دهد. دسترسی آنلاین به منابع اطلاعات و امکان مقایسه، کنترل و پردازش و استعلام داده ها ابزاری کارآمد بمنظور تحلیل و مطالعه داده در اختیار شما قرار خواهد داد. همچنین در صورت لزوم دسترسی به این منابع اطلاعاتی در طراحی فرم ها و فرآیندها نیز ممکن می باشد.</p>
      </div>
      <div className="text-start p-3 md:text-start md:mb-5 md:flex md:justify-around md:items-start">
        <h3 className="my-2 md:my-5 text-base text-justify md:w-1/2 md:ml-20 md:text-lg font-semibold text-[#535353] pb-2">اگر در سازمان یا کسب و کار شما از سامانه‌ها و نرم‌افزارهای دیگر استفاده می‌شود، با استفاده از سامانه مدیریت کسب و کار گراف می‌توانید مدیریت خود را یکپارچه کرده و کماکان از مزایای نرم‌افزارها و سامانه‌های دیگر خود بهره ببرید</h3>
        <div className="p-3 md:pl-5 md:w-full">
                <div className="flex justify-start items-center">
                <RiDatabase2Fill className="w-8 h-8 md:w-10 md:h-10 text-white bg-[#cd2122] rounded-full p-1 hover:scale-75 duration-100"/>
                    <div className="md:w-full text-start">
                        <p className="text-base font-bold text-[#cd2122] mr-3 md:text-lg md:font-extrabold">ویژگی‌های مدیریت بانک‌ها و سرویس‌های اطلاعاتی</p>
                        <div className="border-b-2 border-[#535353] border-dashed h-0.5 w-full mr-3 mt-2"></div>
                    </div>
                </div>
                <p className="text-[#535353] my-5 text-sm md:text-xs md:text-semibold text-start">انواع بانک های اطلاعاتی پوشش داده شده و قابلیت ها:</p>
                <ul className="text-[#535353] pr-10 text-sm md:text-xs md:text-semibold text-start w-full pb-5">
                    <li className="flex items-center justify-start mb-2">
                        <FiChevronLeft className="text-xs font-extralight ml-2" />امکان ارتباط و استخراج داده از انواع بانک های اطلاعاتی SQL Sever, MySQL, Oracel, ...
                    </li>
                    <li className="flex items-center justify-start mb-2">
                        <FiChevronLeft className="text-xs font-extralight ml-2" />امکان تعریف و ارتباط و استخراج داده از انواع وب سرویس های اطلاعاتی WSDL Parser و ناكارآمدی سيستم 
                    </li>
                    <li className="flex items-center justify-start mb-2">
                        <FiChevronLeft className="text-xs font-extralight ml-2" /> امکان تعریف مدل های داده برای بانک های مورد نظر
                    </li>
                    <li className="flex items-center justify-start mb-2">
                        <FiChevronLeft className="text-xs font-extralight ml-2" />امکان تعیین سطح دسترسی افراد روی محدوده اطلاعات
                    </li>
                </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section06;