import React, { useState } from 'react';
import Modal from 'react-modal';
//icons
import { MdOutlineAlternateEmail, MdOutlinePhoneInTalk } from 'react-icons/md';
import { FaFax } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';
//API
import { postData } from '../services/api';

const Conection = ({ title, subject, icon }) => {
   <div>
      <div className="flex items-center">
         { icon }
         <h1>{ title }</h1>
      </div>
      <p>{ subject }</p>
   </div>
};

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
   className="relative h-screen w-screen bg-Baner bg-no-repeat bg-center bg-cover"
   // isOpen={true}
   // // onRequestClose={false}
   // ariaHideApp={false}
   // appElement={document.getElementById("root")}
   >
      <div
         style={styleContainer}
      >
            <div className="items-center w-3/4 m-auto shadow-xl md:flex md:justify-center">
               <div className="bg-[#535353] text-gray-200 p-5 w-1/3">
                  <h1 className="md:text-2xl md:font-bold">راه های ارتباطی</h1>
                  <p className="my-6 text-base font-semibold">شرکت گسترش راهکار اندیشه فردا - <span className="text-[#cd2122]">گراف</span></p>
                  <Conection 
                     title={"ایمیل"}
                     subject="info@Graphinfotec.com"
                     icon={ <MdOutlineAlternateEmail /> } />
                     
                  <Conection 
                     title="تلفن :"
                     subject="36036061-051"
                     icon={ <MdOutlinePhoneInTalk /> } /> 
                     
                  <Conection 
                     title="دورنما :"
                     subject="36011608-051"
                     icon={ <FaFax /> } />

                  <Conection
                     title="آدرس :"
                     subject="مشهد - فرامرز عباسی 32 - اولین معبر سمت راست - پلاک 5- طبقه همکف"
                     icon={ <GoLocation /> } />
               </div>   
               <div className=" w-3/4 p-5 border-[1px] border-gray-300">
                  <h1 className="pb-5 mb-5 border-b-2 border-gary-500 md:text-2xl md:font-bold">ارتباط با ما</h1>
                  <div>
                     <div className="flex items-start justify-evenly w-full">
                        <div className="w-1/2 p-2">
                           <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">نام</label>
                           <input 
                              type="text"
                              value={connect.FirstName} 
                              name="FirstName" 
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                              placeholder="نام" 
                              required
                              onChange={changeHandler} />
                        </div>
                        <div className="w-1/2 p-2">
                           <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">نام خانوادگی</label>
                           <input 
                              type="text" 
                              value={connect.lastName}
                              name="lastName" 
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                              placeholder="نام خانوادگی" 
                              required
                              onChange={changeHandler} />
                        </div>
                     </div>
                     <div className="flex items-center justify-evenly w-full">
                        <div className="w-1/2 p-2">
                           <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ایمیل</label>
                           <input 
                              type="text" 
                              value={connect.Email}
                              name="Email" 
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                              placeholder="ایمیل" 
                              required
                              onChange={changeHandler} />
                        </div>
                        <div className="w-1/2 p-2">
                           <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">پیام</label>
                           <input 
                              type="text"
                              value={connect.Message} 
                              name="Message" 
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                              placeholder="پیام" 
                              required
                              onChange={changeHandler} />
                        </div>
                     </div>
                        <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
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
                              className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
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