import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
//icons
import { MdOutlineAlternateEmail, MdOutlinePhoneInTalk } from "react-icons/md";
import { FaFax } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
//API
import { postData } from "../services/api";

const Conection = ({ title, subject, icon }) => (
  <div className="flex items-center md:my-10 m-0">
    <div className="flex items-center md:p-0 p-1">
      {icon}
      <h1 className="md:font-bold md:text-start text-sm md:ml-2 mr-2">
        {title}
      </h1>
    </div>
    <p className="md:text-sm text-xs font-normal text-center w-3/4">
      {subject}
    </p>
  </div>
);

const ContactUs = () => {
  const [FirstName, setFirstName] = useState("");
  const [lastName, setlasName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const [Details, setDetails] = useState("");
  const navigate = useNavigate();

  const data = JSON.stringify([
    { Name: "FirstName", Value:  FirstName  },
    { Name: "lastName", Value:  lastName  },
    { Name: "Email", Value:  Email  },
    { Name: "Message", Value:  Message  },
    { Name: "Details", Value:  Details  },
  ]);

  const clickHandler = () => {
    postData(data);
    console.log(postData(data));
    navigate("/");
  };

  return (
    <div className="fixed left-0 right-0 h-full md:h-screen w-screen bg-center bg-repeat md:bg-no-repeat md:bg-cover bg-contain bg-Baner">
      <div className="flex flex-col absolute inset-10 border-[1px] border-[rgb(204, 204, 204)] md:overflow-hidden md:justify-center rounded outline-0 p-5">
        <div className="items-center w-screen md:w-3/4 m-auto shadow-xl md:flex md:justify-center">
          <div className="bg-[rgba(53,53,53,0.75)] text-gray-200 md:p-5 p-2 md:w-1/3 w-3/4 m-auto my-5 md:my-5 md:m-0">
            <h1 className="md:text-2xl md:font-bold w-3/4">راه های ارتباطی</h1>
            <p className="my-6 text-base font-semibold">
              شرکت گسترش راهکار اندیشه فردا -{" "}
              <span className="text-[#cd2122] text-xl font-semibold">گراف</span>
            </p>
            <Conection
              title="ایمیل"
              subject="info@Graphinfotec.com"
              icon={<MdOutlineAlternateEmail />}
            />

            <Conection
              title="تلفن"
              subject="36036061-051"
              icon={<MdOutlinePhoneInTalk />}
            />

            <Conection title="دورنما" subject="36011608-051" icon={<FaFax />} />

            <Conection
              title="آدرس"
              subject="مشهد - فرامرز عباسی 32 - اولین معبر سمت راست - پلاک 5- طبقه همکف"
              icon={<GoLocation />}
            />
          </div>

          <div className=" w-3/4 p-5 border-[1px] border-gray-300 bg-[rgba(220,38,38,0.70)]">
            <h1 className="pb-5 text-start mb-14 border-b-2 border-gary-500 md:text-2xl md:font-bold text-gray-200">
              ارتباط با ما
            </h1>
            <div className=" mb-5">
              <div className="flex items-start justify-evenly w-full">
                <div className="w-1/2 p-2">
                  <label className="block mb-2 text-sm font-medium text-gray-200 dark:text-white">
                    نام
                  </label>
                  <input
                    type="text"
                    value={FirstName}
                    name="FirstName"
                    className="inputContact"
                    placeholder="نام"
                    required
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="w-1/2 p-2">
                  <label className="block mb-2 text-sm font-medium text-gray-200 dark:text-white">
                    نام خانوادگی
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    name="lastName"
                    className="inputContact"
                    placeholder="نام خانوادگی"
                    required
                    onChange={(e) => setlasName(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex items-center justify-evenly w-full">
                <div className="w-1/2 p-2">
                  <label className="block mb-2 text-sm font-medium text-gray-200 dark:text-white">
                    ایمیل
                  </label>
                  <input
                    type="text"
                    value={Email}
                    name="Email"
                    className="inputContact"
                    placeholder="ایمیل"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="w-1/2 p-2">
                  <label className="block mb-2 text-sm font-medium text-gray-200 dark:text-white">
                    پیام
                  </label>
                  <input
                    type="text"
                    value={Message}
                    name="Message"
                    className="inputContact"
                    placeholder="پیام"
                    required
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex items-center md:my-5 px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
                <label className="sr-only">جزئیات بیشتر</label>
                <textarea
                  name="Details"
                  rows="1"
                  value={Details}
                  className="inputContact"
                  placeholder="جزئیات بیشتر ..."
                  onChange={(e) => setDetails(e.target.value)}
                />
                <button
                  type="submit"
                  className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
                  onClick={clickHandler}>
                  <svg
                    aria-hidden="true"
                    className="w-7 h-7 mr-3 -rotate-90"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                  </svg>
                  <span className="sr-only">Send message</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
        <button type="button" class="m-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <Link to="/">
            <svg aria-hidden="true" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </Link>
        </button>
    </div>
  );
};

export default ContactUs;
