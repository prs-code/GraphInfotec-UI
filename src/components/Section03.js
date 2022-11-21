import React from 'react';

//icons
import { TbMapSearch } from 'react-icons/tb';
import { TfiRulerPencil } from 'react-icons/tfi';
import { FiChevronLeft } from 'react-icons/fi';
import { MdOutlineAddLocationAlt } from 'react-icons/md';
import { AiOutlineForm } from 'react-icons/ai';
import { BsClipboardData } from 'react-icons/bs';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { BiNetworkChart } from 'react-icons/bi';
import { SiAppstore } from 'react-icons/si';
//context
import { useStateContext } from '../context/ContextProvider';
//img
import imageForm from '../assets/images/baner02.jpg';
//component
import TextBaner from './shared/TextBaner';



const Baner02 = () => {
  const { response } = useStateContext();

  return (
    <div>
      <div className="relative z-1000 overflow-hidden md:flex md:justify-around md:items-center md:text-end my-8 w-full">
      <video
          autoPlay
          loop
          muted
          className="absolute z-[-10] w-auto min-w-full min-h-full max-w-none max-h-none"
        >
          <source 
            src="http://graphinfotec.com/wp-content/uploads/2018/10/graph_Co.mp4"
            type="video/mp4"
          />
        </video>
        <div className="bg-[rgba(53,53,53,0.60)] text-white md:w-1/2 md:p-24 p-5 h-[400px]">
          <h2
            data-aos="zoom-in" data-aos-offset="50" data-aos-easing="linear" data-aos-duration="800" 
            className="md:text-2xl font-semibold mb-12">تجمیع و تحلیل اطلاعات و رصد آنلاین جریان داده در سطح کلان</h2>
          <p
            data-aos="zoom-in" data-aos-offset="50" data-aos-easing="linear" data-aos-duration="800" 
            className="text-sm">با بکارگیری سامانه گراف زیرساختی امن و کارآمد جهت جمع آوری ساختار یافته اطلاعات و تحلیل و بررسی آن ایجاد نمایید.</p>
        </div>
        <div className="bg-[rgba(220,38,38,0.50)] backdrop-blur text-white md:w-1/2 md:p-20 p-5 h-[400px]">
          <TbMapSearch  className="md:text-6xl md:font-light text-4xl"/>
          <h2
            data-aos="zoom-in" data-aos-offset="50" data-aos-easing="linear" data-aos-duration="800" 
            className="md:text-2xl font-semibold mb-14 text-end">مدیریت کامل و کارآمد بر گردش کار در سطح کلان</h2>
          <p
            data-aos="zoom-in" data-aos-offset="50" data-aos-easing="linear" data-aos-duration="800" 
            className="text-sm">فرایند های اختصاصی خود را با هر درجه پیچیدگی، به راحتی پیاده سازی کرده و سامانه ای کاملا سفارشی و مطابق با نیازتان ایجاد نمایید.</p>
        </div>
      </div>

      {
        response && (
          <div className="md:py-8 p-5 mb-10">
            <TextBaner 
              boldText={response[0].BoldText}
              lightText={response[1].LightText}/>
      </div>
        )
      }


        <div className="md:flex md:justify-around md:items-start md:mt-20 my-20 p-3 m-auto md:w-3/4 w-full">

          <div 
            className="md:w-1/2"
            data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1000">
            <div className="text-start p-3 md:text-start md:mb-4">
              <h1 className="md:text-4xl text-xl font-extrabold md:font-semibold mb-2">فرم ساز <span className="text-[#cd2122]">پیشرفته</span></h1>
              <div className="w-10 h-0.5 bg-[#cd2122]"></div>
            </div>
            <div 
              className="md:w-3/4 text-center w-full">
              <h3 className="my-10 text-base text-start md:text-lg font-semibold text-[#535353] pb-2">اطمینان از صحت اطلاعات در ساختار ایجاد شده</h3>
              <p className="text-justify leading-10 text-sm md:text-base text-[#535353] pb-4">امروزه بخش قابل توجهی از اسناد در قالب اطلاعاتی هستند. ثبت، نگهداری و بازیابی اطلاعات این فرم‌ها از اهمیت ویژه‌ای برخوردار است. راهکار فرمساز جهت پاسخگویی به این نیاز طراحی و ارائه شده است. با استفاده از ابزار  کاربر بدون دانش برنامه‌نویسی می‌تواند فرم‌ها را به راحتی در سیستم طراحی کرده و اطلاعات جمع آوری شده را تحلیل و بررسی نماید.</p>
              <img 
                src={imageForm} 
                alt="form-builer"
                className="mb-5 md:mb-0"
              data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="700"
            />
            </div>
        </div>


          <div 
            className="p-3 md:p-5 md:w-1/2"
            data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000">
            <div className="flex justify-start items-center">
              <TfiRulerPencil className="w-10 h-10 p-1 md:w-12 md:h-12 text-white bg-[#cd2122] rounded-full md:p-2 hover:scale-75 duration-100"/>
              <div>
                <p className="text-base font-bold text-[#cd2122] mr-3 md:text-xl md:font-extrabold">مزایای ابزار فرم ساز پیشرفته</p>
                <div className="border-b-2 border-[#535353] border-dashed h-0.5 w-full mr-3 mt-2"></div>
              </div>
            </div>
            <p className="text-[#535353] my-5 text-xs md:text-base">به کارگیری این سیستم موجب :</p>
            <ul className="text-[#535353] pr-10 text-xs">
              <li className="flex items-center  justify-start mb-2">
                <FiChevronLeft className="text-sm md:text-xl ml-2" />بهبـود‌ كارايـــــي‌ و افزايــش ‌بـــهره‌وري ‌و‌ رضايـــت ‌كاركنان
              </li>
              <li className="flex items-center  justify-start mb-2">
                <FiChevronLeft className="text-sm md:text-xl ml-2" />افزایش سرعت ثبت و نگهداری اطلاعات فرم های مختلف به صورت الکترونیکی
              </li>
              <li className="flex items-center  justify-start mb-2">
                <FiChevronLeft className="text-sm md:text-xl ml-2" />کمک به پیـــــاده سازی آســــــان قوانیــن و مجــوزها
              </li>
              <li className="flex items-center  justify-start mb-2">
                <FiChevronLeft className="text-sm md:text-xl ml-2" />قابلیت پشتیبانی از بهبود و امکان ایجاد نگارش جدید بر روی فرم ها طبق نیازهای مخاطبین
              </li>
              <li className="flex items-center  justify-start mb-2">
                <FiChevronLeft className="text-sm md:text-xl ml-2" />امـــــکان پیـــــش نمایش فرم در زمــــان طراحی
              </li>
              <li className="flex items-center  justify-start mb-2">
                <FiChevronLeft className="text-sm md:text-xl ml-2" />امکان طراحی نامحدود  فیلدهای یک فرم اطلاعاتی
              </li>
              <li className="flex items-center  justify-start mb-2">
                <FiChevronLeft className="text-sm md:text-xl ml-2" />امــــکان ویرایــــش کـــــــــــد HTML فـــــرم ها،
              </li>
              <li className="flex items-center justify-start mb-2">
                <FiChevronLeft className="text-sm md:text-xl ml-2" />امــــکان اعـــــمال CSS در طــــــراحی فــــــــرم
              </li>
              <li className="flex items-center justify-start mb-2">
                <FiChevronLeft className="text-sm md:text-xl ml-2" />امکان تعریف فیلدهای وابـــــسته به جـــداول دیگر
              </li>
              <li className="flex items-center justify-start mb-2">
                <FiChevronLeft className="text-sm md:text-xl ml-2" />امــــــکان تعـــــــریف فیلــــــد های محاســــباتی
              </li>
              <li className="flex items-center justify-start mb-2">
                <FiChevronLeft className="text-sm md:text-lg ml-2" />امــــــکان تعـــــــــریف فـــــرم هــــــای تو در تو
              </li>
              <li className="flex items-center justify-start mb-2">
                <FiChevronLeft className="text-sm md:text-lg ml-2" />امـــکان چاپ فــــرم با الگوهای از قبل تعریف شده
              </li>
              <li className="flex items-center justify-start mb-2">
                <FiChevronLeft className="text-sm md:text-lg ml-2" />اعتبار ســــنجی فیلد های فرم در زمان ورود اطلاعات
              </li>
              <li className="flex items-center justify-start mb-2">
                <FiChevronLeft className="text-sm md:text-lg ml-2" />امـــکان استـــــفاده از اطلاعات فـــــرم‌های دیگر در طراحی فرم
              </li>
              <li className="flex items-center justify-start mb-2">
                <FiChevronLeft className="text-sm md:text-lg ml-2" />امکان تعــــریف انــــــواع فیــــــــلد های اطلاعاتــــــــی
              </li>
              <li className="flex items-center justify-start mb-2">
                <FiChevronLeft className="text-sm md:text-lg ml-2" />امکان تعریف امکان ویرایش و نمایش مولفه‌های فـــــرم بر اساس وضعیت فرم
              </li>
              <li className="flex items-center justify-start mb-2">
                <FiChevronLeft className="text-sm md:text-lg ml-2" />تولید خودکار وب سرویس دریافــــت و ارسال اطلاعــات مربوط به هر فرم جهت ارتباط با سایر سامانه ها
              </li>
              <li className="flex items-center justify-start mb-2">
                <FiChevronLeft className="text-sm md:text-lg ml-2" />امکان ثبت اطلاعــــات و بازبینی ســــوابق فرم ها در رابط کاربری موبایل
              </li>
              <li className="flex items-center justify-start mb-2">
                <FiChevronLeft className="text-sm md:text-lg ml-2" />امکان تعریف محدوده و شرط برای هر فیلد در زمـــان ورود اطلاعات فرم
              </li>
              <li className="flex items-center justify-start mb-2">
                <FiChevronLeft className="text-sm md:text-lg ml-2" />جلوگیری از ثبت داده تکراری بر اســـاس فیلدهای مشخص شده برای هر فرم
              </li>
              <li className="flex items-center justify-start mb-2">
                <FiChevronLeft className="text-sm md:text-lg ml-2" />امکان جســـــتجوی اطلاعـــــات و مشخـــص بودن ســابقه ثبت،ویرایش و حذف آنها
              </li>
              <li className="flex items-center justify-start mb-2">
                <FiChevronLeft className="text-sm md:text-lg ml-2" />امکان تعریف سـطوح دسترسی به فرم ها و فیلدهای هر فرم
              </li>
            </ul>
          </div>

        </div>


        <h2 className="p-5 md:p-14 text-center md:text-start text-xl font-bold text-gray-600">ویژگی های کلیدی فرم ساز</h2>

        <div className="md:flex md:justify-around mb-20 flex flex-wrap justify-center items-center gap-4 text-[#535353] text-center">

          <div 
            className="flex flex-col justify-center items-center"
            data-aos="fade-down-left" data-aos-easing="linear" data-aos-duration="300">
              <MdOutlineAddLocationAlt className=" w-10 h-10 mb-2 text-[#cd2122]"/>
              <p className="text-xs m-5 md:m-0">فیلد تشخیص موقعیت و مسیر حرکت</p>
          </div>
          <div 
            className="flex flex-col justify-center items-center"
            data-aos="fade-down-left" data-aos-easing="linear" data-aos-duration="300">
              <AiOutlineForm className=" w-10 h-10 mb-2 text-[#cd2122]"/>
              <p className="text-xs m-5 md:m-0">امکان ایجاد فرم‌های تودرتو</p>
          </div>
          <div 
            className="flex flex-col justify-center items-center"
            data-aos="fade-down-left" data-aos-easing="linear" data-aos-duration="900">
              <BsClipboardData className=" w-10 h-10 mb-2 text-[#cd2122]"/>
              <p className="text-xs m-5 md:m-0">کنترل و جلوگیری از ثبت داده تکراری</p>
          </div>
          <div 
            className="flex flex-col justify-center items-center"
            data-aos="fade-down-left" data-aos-easing="linear" data-aos-duration="1200">
              <MdOutlineDashboardCustomize className=" w-10 h-10 mb-2 text-[#cd2122]"/>
              <p className="text-xs m-5 md:m-0">انواع فیلدهای اطلاعاتی پیشرفته</p>
          </div>
          <div 
            className="flex flex-col justify-center items-center"
            data-aos="fade-down-left" data-aos-easing="linear" data-aos-duration="1500">
              <BiNetworkChart className=" w-10 h-10 mb-2 text-[#cd2122]"/>
              <p className="text-xs m-5 md:m-0">ایجاد وب‌سرویس‌های ارتباطی متناظر با فرم</p>
          </div>
          <div 
            className="flex flex-col justify-center items-center"
            data-aos="fade-down-left" data-aos-easing="linear" data-aos-duration="1800">
              <SiAppstore className=" w-10 h-10 mb-2 text-[#cd2122]"/>
              <p className="text-xs m-5 md:m-0">قابلیت ارسال به نرم افزار همراه</p>
          </div>

        </div>
        
        {
          response && (
            <div className="bg-bgMeidani bg-cover bg-no-repeat bg-fixed bg-center md:py-8 p-5 mb-10">
              <TextBaner
                  boldText={response[1].BoldText}
                  lightText={response[1].LightText} />
            </div>
          )
        }

    </div>
  )
}

export default Baner02;