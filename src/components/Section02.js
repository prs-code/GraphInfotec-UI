import React from 'react';
//icons
import { MdOutlineDesignServices } from 'react-icons/md';
import { GiProcessor } from 'react-icons/gi';
import { TbFileReport } from 'react-icons/tb';
import { SiDatabricks } from 'react-icons/si';
import { AiOutlineForm } from 'react-icons/ai';



const MdSection = () => {
  return (
    <div className="text-center mb-20">

        <div 
            className="flex flex-col opacity-50 text-[#808080]"
            data-aos="fade-down" data-aos-offset="50" data-aos-easing="ease" data-aos-duration="500">
            <h1 className="p-5 md:p-0 text-3xl font-semibold">نرم افزار مدیریت فرایندهای کسب و کار گراف - BPMS</h1>
            <h1 className="text-3xl font-semibold">...</h1>
            <p >مدیریت کامل و کارآمد بر فرآیندها در سطح سازمان</p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center md:mb-20 mb-10 shadow-underShadow">
            <div>
                <div className="p-5 flex flex-col items-start">
                    <div className="flex justify-start items-center md:px-10 px-5 w-full">
                        <MdOutlineDesignServices className="w-12 h-12 p-3 rounded-full bg-gray-300 hover:bg-[#CD2122] hover:text-white" />
                        <div className="flex flex-col items-start pr-4">
                            <p className="text-base font-bold">ابزار طراحی فرآیند</p>
                            <p className="text-sm opacity-50">مبتنی بر استاندارد BPMN</p>
                        </div>
                    </div>
                </div>
                <div className="p-5 flex flex-col items-start">
                    <div className="flex justify-start items-center md:px-10 px-5 w-full">
                        <TbFileReport className="w-12 h-12 p-3 rounded-full bg-gray-300 hover:bg-[#CD2122] hover:text-white" />
                        <div className="flex flex-col items-start pr-4">
                            <p className="text-base font-bold">گزارش‌ساز پیشرفته و داشبورد</p>
                            <p className="text-sm opacity-50 w-[220px] text-start">قابلیت ساخت انواع گزارشات و قالب‌های چاپ اختصاصی و رصد آنلاین اطلاعات از طریق داشبورد مدیریتی</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="p-5 flex flex-col items-start">
                    <div className="flex justify-start items-center md:px-10 px-5 w-full">
                        <GiProcessor className="w-12 h-12 p-3 rounded-full bg-gray-300 hover:bg-[#CD2122] hover:text-white" />
                        <div className="flex flex-col items-start pr-4">
                            <p className="text-base font-bold">مدیریت فرآیندها</p>
                            <p className="text-sm opacity-50">امکان پیاده‌سازی و مدیریت انواع فرآیندها</p>
                        </div>
                    </div>
                </div>
                <div className="p-5 flex flex-col items-start">
                    <div className="flex justify-start items-center md:px-10 px-5 w-full">
                        <SiDatabricks className="w-12 h-12 p-6 md:p-3 rounded-full bg-gray-300 hover:bg-[#CD2122] hover:text-white" />
                        <div className="flex flex-col items-start pr-4">
                            <p className="text-base font-bold">مدیریت بانک ها و سرویس های اطلاعاتی</p>
                            <p className="text-sm opacity-50 w-[310px] text-start">امکان ارتباط مستقیم با انواع مختلف بانک‌های اطلاعاتی و ذخیره یا دریافت اطلاعات از آن‌ها</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="p-5 flex flex-col items-start">
                    <div className="flex justify-start items-center md:px-10 px-5 w-full">
                        <AiOutlineForm className="w-12 h-12 p-3 rounded-full  bg-gray-300 hover:bg-[#CD2122] hover:text-white" />
                        <div className="flex flex-col items-start pr-4">
                            <p className="text-base font-bold">فرم ساز پیشرفته</p>
                            <p className="text-sm opacity-50">طراحی انواع فرم های برداشت اطلاعات</p>
                        </div>
                    </div>
                </div>
                <div className="p-5 flex flex-col items-start">
                    <div className="flex justify-start items-center md:px-10 px-5 w-full">
                        <SiDatabricks className="w-12 h-12 p-6 md:p-3 rounded-full  bg-gray-300 hover:bg-[#CD2122] hover:text-white" />
                        <div className="flex flex-col items-start pr-4">
                            <p className="text-base font-bold">اپلیکیشن مدیریت کار همراه</p>
                            <p className="text-sm opacity-50 w-[310px] text-start">ارائه شده در دو بستر اندروید و IOS با قابلیت برداشت اطلاعات میدانی بصورت آنلاین و آفلاین</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div 
                className="flex flex-col opacity-50 text-[#808080]"
                data-aos="fade-down" data-aos-offset="50" data-aos-easing="linear" data-aos-duration="500">
                <h1 className="text-3xl p-5 md:p-0 text-center font-semibold">BPMS چیست و کاربرد آن در سازمان یا کسب و کارها چگونه است؟</h1>
                <h1 className="text-3xl font-black">...</h1>
                <p className="text-sm font-semibold">نرم افزار مدیریت فرایند های کسب و کار BPMS</p>
            </div>
            <div className="flex flex-col md:flex-row justify-around items-start p-5 md:p-10">
                <div 
                    className="md:w-1/3 w-full p-5 text-start"
                    data-aos="fade-down" data-aos-offset="50" data-aos-easing="linear" data-aos-duration="1000">
                    <h1 className="text-2xl font-extrabold">تعریف <span className="text-[#CD2122]">BPMS</span></h1>
                    <div className="h-[3px] w-[50px] bg-[#ccc] my-5"></div>
                    <h2 className="text-[#535353] md:mt-14 mt-5 text-justify leading-10">BPMS یا همان سامانه مدیریت فرایندهای کسب و کار این امکان را به شما می‌دهد تا کلیه فرایندهای جاری در سازمان یا کسب و کار خود را به همراه مکاتبات و اسناد مربوط به آن، کنار گذاشته و به اهداف مقابل دست یابید :</h2>
                </div>
                <div 
                    className="md:w-2/4 w-full"
                    data-aos="fade-up" data-aos-offset="50" data-aos-easing="linear" data-aos-duration="1000">
                    <div className="flex items-start text-[#535353] mb-5">
                        <span className="text-gray-100 flex justify-center items-center w-2 h-2 px-3 py-3 md:w-5 md:h-5 md:px-6 md:py-5 mr-1 ml-2 md:ml-5 bg-[#cd2122] rounded-md">1</span>
                        <div 
                            className="flex flex-col items-start w-11/12">
                            <h3 className="md:text-sm font-semibold text-xs text-start mb-2">بهترین و منعطف ترین روش برای مکانیزه کردن و کنترل فرایندها</h3>
                            <span className="md:w-[480px] w-full border-b-2 border-[#535353] border-dashed h-0.5"></span>
                        </div>
                    </div>
                    <div className="flex items-center text-[#535353] mb-5">
                        <span className="text-gray-100 flex justify-center items-center w-2 h-2 px-3 py-3 md:w-5 md:h-5 md:px-6 md:py-5 mr-1 ml-2 md:ml-5 bg-[#cd2122] rounded-md">2</span>
                        <div className="flex flex-col items-start w-11/12">
                            <h3 className="md:text-sm font-semibold text-xs text-start mb-2">بهبود و بهینه سازی ارتباطات بین بخش های سازمان اجرای فرایندها در عرض سازمان</h3>
                            <span className="md:w-[480px] w-full border-b-2 border-[#535353] border-dashed h-0.5"></span>
                        </div>
                    </div>
                    <div className="flex items-center text-[#535353] mb-5">
                        <span className="text-gray-100 flex justify-center items-center w-2 h-2 px-3 py-3 md:w-5 md:h-5 md:px-6 md:py-5 mr-1 ml-2 md:ml-5 bg-[#cd2122] rounded-md">3</span>
                        <div className="flex flex-col items-start w-11/12">
                            <h3 className="md:text-sm font-semibold text-xs text-start mb-2">افزایش سرعت و دقت اجرای فرایندها و ایجاد قابلیت نظارت لحظه ای بر عملکرد</h3>
                            <span className="border-b-2 border-[#535353] border-dashed h-0.5 md:w-[480px] w-full"></span>
                        </div>
                    </div>
                    <div className="flex items-center text-[#535353] mb-5">
                        <span className="text-gray-100 flex justify-center items-center w-2 h-2 px-3 py-3 md:w-5 md:h-5 md:px-6 md:py-5 mr-1 ml-2 md:ml-5 bg-[#cd2122] rounded-md">4</span>
                        <div className="flex flex-col items-start w-11/12">
                            <h3 className="md:text-sm font-semibold text-xs text-start mb-2">کاهش مستقیم ریسکها هزینه ها</h3>
                            <span className="border-b-2 border-[#535353] border-dashed h-0.5 md:w-[480px] w-full"></span>
                        </div>
                    </div>
                    <div className="flex items-center text-[#535353] mb-5">
                        <span className="text-gray-100 flex justify-center items-center w-2 h-2 px-3 py-3 md:w-5 md:h-5 md:px-6 md:py-5 mr-1 ml-2 md:ml-5 bg-[#cd2122] rounded-md">5</span>
                        <div className="flex flex-col items-start w-11/12">
                            <h3 className="md:text-sm font-semibold text-xs text-start mb-2">افزایش چابکی سازمان در برابر تغییرات</h3>
                            <span className="border-b-2 border-[#535353] border-dashed h-0.5 md:w-[480px] w-full"></span>
                        </div>
                    </div>
                </div>
            </div>

            <h1 className="text-xl font-bold text-start px-5 md:text-center md:px-0 md:text-2xl md:font-extrabold">چگونه فرایندها را در <span className="text-[#cd2122]">BPMS</span> طراحی کنیم؟</h1>
            <div className="h-[3px] w-[50px] bg-[#ccc] m-auto mt-5"></div>
            <p className="text-base font-semibold p-5 md:p-0 md:text-center text-start md:mt-12 text-gray-500 md:font-semibold">ورود فرایندها به دو روش امکان پذیر است</p>
            <div className="md:flex md:justify-around md:w-2/3 w-full p-5 m-auto md:mt-8">
                <h2 className="md:w-1/3 w-full  text-justify text-[#535353] md:mt-10 mt-5 leading-10">
                    <span className="text-[#cd2122] ml-2">1)</span>
                    کارشناسان ما فرایندها را در سازمان یا کسب و کار شما شناسایی و بهینه‌سازی کرده و در سامانه BPMS پس از تایید شما طراحی می‌کنند.
                </h2>
                <h2 className="md:w-1/3 w-full text-justify text-[#535353] md:mt-10 mt-5 leading-10">
                    <span className="text-[#cd2122] ml-2">2)</span>
                    به سادگی خود شما می‌توانید با رسم نموار شماتیک فرایندهای خود با استفاده از ابزار طراحی BPMN بدون نیاز به هیچ‌گونه دانش فنی یا برنامه‌نویسی، فرایندها را در سامانه BPMS گراف وارد نمایید.
                </h2>

            </div>

    </div>
  )
}

export default MdSection;