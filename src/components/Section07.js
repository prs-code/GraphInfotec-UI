import React from 'react';
//img
import anformatic from '../assets/images/anformatic.jpg';
import fata from '../assets/images/fata.jpg';
import daneshBonyan from '../assets/images/danesh-bonyan.jpg';
import logo from '../assets/images/logo.png';

const Section07 = () => {
  return (
    <div>
        <div 
            className="div-cliped bg-[#2D2D2D] text-gray-100 p-5 w-full mb-2"
            data-aos="flip-up" data-aos-easing="linear" data-aos-duration="1000">
            <div className="md:w-3/4 m-auto md:mt-5">
                <h3 className="text-start text-2xl font-bold pt-10 md:text-4xl md:font-semibold">دریافت نسخه آزمایشی</h3>
                <p className="text-start my-5 text-sm font-extralight md:text-sm md:font-light">برای استفاده از نسخه آزمایشی پس از ثبت درخواست و دریافت شناسه کاربری وارد سامانه شوید</p>
            </div>
            <div className="p-5 flex flex-col justify-center items-center md:flex-row md:text-center md:justify-center">
                <span className="button-cliped text-sm bg-[#cd2122] px-6 py-2 my-4 w-[200px] cursor-pointer md:mx-4">درخواست نسخه آزمایشی</span>
                <span className="button-cliped text-sm px-6 py-2 my-4 border-2 w-[200px] hover:text-[#cd2122] cursor-pointer md:mx-4">دانلود اپلیکیشن موبایل</span>
                <span className="button-cliped text-center text-sm px-6 py-2 my-4 border-2 w-[200px] hover:text-[#cd2122] cursor-pointer md:mx-4">پورتال مدیریت</span>
            </div>
        </div>

        <div>
            <h1 className="md:text-2xl md:font-extrabold text-base font-bold text-center mb-5 text-[#535353]">اخبار و اطلاعیه ها</h1>
            <div className="md:flex md:justify-center md:m-auto md:h-content mb-10">
                <div className="relative p-5 md:w-80">
                    <img 
                        src={anformatic} 
                        alt="news"
                        className="px-5 md:px-0 md:w-full" />
                    <span className="text-white text-xs bg-[#cd2122] p-1 w-content h-auto absolute top-36 right-8">مشاهده</span>
                    <span className="px-5 text-xs text-[#a6a6a6]">05 nov 2022</span>
                    <p className="text-start my-2 px-5 text-sm font-extralight md:text-sm md:font-light">کسب رتبه یک شورای انفورماتیک</p>
                    <p className="text-start mb-5 px-5 text-xs font-extralight md:text-xs md:font-thin md:text-justify">کسب رتبه یک شورای انفورماتیک</p>
                </div>
                 <div className="relative p-5 md:w-80">
                    <img 
                        src={fata} 
                        alt="news"
                        className="px-5 md:px-0" />
                    <span className="text-white text-xs bg-[#cd2122] p-1 w-content h-auto absolute top-36 right-8">مشاهده</span>
                    <span className="px-5 text-xs text-[#a6a6a6]">05 nov 2022</span>
                    <p className="text-start my-2 px-5 text-sm font-extralight md:text-sm md:font-light">کسب گواهی های امنیتی افتا و OWASP 4.0 بر زیرساخت مدیریت فرآیند های کسب و کار گرافــ</p>
                    <p className="text-start mb-5 px-5 text-xs font-extralight md:text-xs md:font-thin md:text-justify">کسب گواهی های امنیتی افتا و 10 OWASP 4.0 بالا</p>
                </div>
                <div className="relative p-5 md:w-80">
                    <img 
                        src={daneshBonyan} 
                        alt="news"
                        className="px-5 md:px-0" />
                    <span className="text-white text-xs bg-[#cd2122] p-1 w-content h-auto absolute top-36 right-8">مشاهده</span>
                    <span className="px-5 text-xs text-[#a6a6a6]">05 nov 2022</span>
                    <p className="text-start my-2 px-5 text-sm font-extralight md:text-sm md:font-light">مجوز دانش بنیان تمدید شد</p>
                    <p className="text-start mb-5 px-5 text-xs font-extralight md:text-xs md:font-thin md:text-justify">  باسلام و احترام؛ ضمن عرض تبریک، احتراما به اطلاع می رساند مجوز دانش بنیانی شرکت گسترش راهکار اندیشه فردا با شناسه ملی ۱۰۳۸۰۶۵۷۸۶۹ به مدت ۳ سال دیگر تمدید شد و با توجه به ارزیابی شرکت براساس آیین‌نامه ارزیابی شرکت‌ها و موسسات دانش‌بنیان مصوب کارگروه و بر مبنای مصوبه کارگروه، این شرکت از تیرماه</p>
                </div>
            </div>
        </div>
        <div className="bg-[#2D2D2D] text-gray-100 p-5 px-10 w-full">
            <div className="text-center hidden md:leading-10 md:flex md:justify-center md:w-3/m-4 md:m-auto items-center md:p-3 border-b-4 border-[#535353]">
                <div className="md:w-1/3">
                    <h1 className="my-2 px-5 text-start md:text-sm md:font-bold">فناوری اطلاعات گراف(گسترش راهکار اندیشه فردا)</h1>
                    <p className=" mb-5 px-5 md:text-xs md:font-thin md:text-justify"> شرکت فناوری اطلاعات گراف ، دارای رتبه 1 شورای عالی انفورماتیک در زمینه تولید نرم افزارهای به سفارش مشتری و تولیدکننده محصول" مدیریت فرآیند های کسب و کار" به عنوان کالا و خدمات دانش بنیان می باشد.</p>
                </div>
                <div className="md:w2/3 md:text-center">
                <div className="md:w-full md:px-8">
                    <h1 className="mb-2 px-5 text-start md:text-sm md:font-bold">
                        مشهد - فرامرز عباسی 32 - اولین معبر سمت راست - پلاک 5- طبقه همکف
                    </h1>
                    <p className=" mb-5 px-5 md:text-xs md:font-thin md:text-justify">
                          تلفن : 36036061-051 <br />
                        دورنما : 36011608-051 <br />
                        ایمیل : info@Graphinfotec.com
                    </p>
                </div>
                </div>
                <div>
                    <div className="md:w-full">
                        <p className="mb-5 px-5 md:leading-5 md:w-full md:text-xs md:font-thin md:text-justify">
                            معرفی شرکت <br />
                            چشم انداز و ماموریت ها <br />
                            تاییدیه ها و مجوزها <br />
                            همکاری با گراف <br />
                            اطلاعات تماس <br />
                        </p>
                    </div>
                </div>
            </div>
            <div className="md:flex md:justify-between md:items-center">
                <ul className="flex justify-center items-start text-sm font-medium">
                    <li className="p-3">صفحه اصلی</li>
                    <li className="p-3">پورتال شخصی</li>
                    <li className="p-3">درباره ما</li>
                    <li className="p-3">تماس با ما</li>
                </ul>
                <div className="flex justify-center items-center py-4">
                    <span className="text-xs font-light ml-4">© 1399 All rights reserved. GraphInfoTec</span>
                    <img 
                        src={logo} 
                        alt="logo"
                        className="w-8 h-8" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section07;