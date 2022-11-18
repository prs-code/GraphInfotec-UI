import React, { useState } from 'react';
//icons
import { MdOutlineAlternateEmail, MdOutlinePhoneInTalk } from 'react-icons/md';
import { FaFax } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';
//API
import { postData } from '../services/api';

const Conection = ({ title, subject, icon }) => (
   <div className="flex items-center md:my-10 m-0">
      <div className="flex items-center md:p-0 p-1">
         { icon }
         <h1 className="md:font-bold md:text-start text-sm md:ml-2 mr-2">{ title }</h1>
      </div>
      <p className="md:text-sm text-xs font-normal text-center w-3/4">{ subject }</p>
   </div>
);

   const styleContainer = {
      position: "absolute", 
      inset: "40px",
      border: "1px solid rgb(204, 204, 204)", 
      overflow: "auto", 
      borderRadius: "4px", 
      outline: "none", 
      padding: "20px",
   }

const ContactUs = () => {
   const [connect, setConect] = useState({
      FirstName: "",
      lastName: "",
      Email: "",
      Message: "",
      Details: "",
   });

   const changeHandler = (e) => {
      setConect({ ...connect, [e.target.name]: e.target.value })
   };

   const clickHandler = async () => {
      await postData(connect);

      console.log(postData(connect));
   }


  return (
   <div
   className="relative h-full md:h-screen w-screen bg-center bg-repeat md:bg-no-repeat md:bg-cover bg-contain bg-Baner"
   // isOpen={true}
   // // onRequestClose={false}
   // ariaHideApp={false}
   // appElement={document.getElementById("root")}
   >
      <div
         // style={styleContainer}
         className="flex flex-col absolute inset-10 border-[1px] border-[rgb(204, 204, 204)] md:overflow-hidden md:justify-center rounded outline-0 p-5"
      >
            <div className="items-center w-screen md:w-3/4 m-auto shadow-xl md:flex md:justify-center">
               <div className="bg-[rgba(53,53,53,0.75)] text-gray-200 md:p-5 p-2 md:w-1/3 w-3/4 m-auto my-5 md:my-5 md:m-0">
                  <h1 className="md:text-2xl md:font-bold w-3/4">راه های ارتباطی</h1>
                  <p className="my-6 text-base font-semibold">شرکت گسترش راهکار اندیشه فردا - <span className="text-[#cd2122] text-xl font-semibold">گراف</span></p>
                  <Conection 
                     title="ایمیل"
                     subject="info@Graphinfotec.com"
                     icon={ <MdOutlineAlternateEmail /> } />
                     
                  <Conection 
                     title="تلفن"
                     subject="36036061-051"
                     icon={ <MdOutlinePhoneInTalk /> } /> 
                     
                  <Conection 
                     title="دورنما"
                     subject="36011608-051"
                     icon={ <FaFax /> } />

                  <Conection
                     title="آدرس"
                     subject="مشهد - فرامرز عباسی 32 - اولین معبر سمت راست - پلاک 5- طبقه همکف"
                     icon={ <GoLocation /> } />
               </div>   
               <div className=" w-3/4 p-5 border-[1px] border-gray-300 bg-[rgba(220,38,38,0.70)]">
                  <h1 className="pb-5 text-start mb-14 border-b-2 border-gary-500 md:text-2xl md:font-bold text-gray-200">ارتباط با ما</h1>
                  <div className=" mb-5">
                     <div className="flex items-start justify-evenly w-full">
                        <div className="w-1/2 p-2">
                           <label className="block mb-2 text-sm font-medium text-gray-200 dark:text-white">نام</label>
                           <input 
                              type="text"
                              value={connect.FirstName} 
                              name="FirstName" 
                              className= "inputContact" 
                              placeholder="نام" 
                              required
                              onChange={changeHandler} />
                        </div>
                        <div className="w-1/2 p-2">
                           <label className="block mb-2 text-sm font-medium text-gray-200 dark:text-white">نام خانوادگی</label>
                           <input 
                              type="text" 
                              value={connect.lastName}
                              name="lastName"
                              className= "inputContact" 
                              placeholder="نام خانوادگی" 
                              required
                              onChange={changeHandler} />
                        </div>
                     </div>
                     <div className="flex items-center justify-evenly w-full">
                        <div className="w-1/2 p-2">
                           <label className="block mb-2 text-sm font-medium text-gray-200 dark:text-white">ایمیل</label>
                           <input 
                              type="text" 
                              value={connect.Email}
                              name="Email" 
                              className= "inputContact" 
                              placeholder="ایمیل" 
                              required
                              onChange={changeHandler} />
                        </div>
                        <div className="w-1/2 p-2">
                           <label className="block mb-2 text-sm font-medium text-gray-200 dark:text-white">پیام</label>
                           <input 
                              type="text"
                              value={connect.Message} 
                              name="Message" 
                              className= "inputContact" 
                              placeholder="پیام" 
                              required
                              onChange={changeHandler} />
                        </div>
                     </div>
                        <div className="flex items-center md:my-5 px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
                           <label className="sr-only">جزئیات بیشتر</label>
                           <button 
                              type="submit" 
                              className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
                              onClick={ clickHandler }>
                              <svg aria-hidden="true" className="w-7 h-7 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
                              <span className="sr-only">Send message</span>
                           </button>
                           <textarea
                              name="Details" 
                              rows="1" 
                              className= "inputContact" 
                              placeholder="جزئیات بیشتر ..."
                              onChange={changeHandler} />
                        </div>
                  </div>
               </div>
            </div>
      </div>
   </div>
  )
}

export default ContactUs;