import React,{ useEffect } from 'react';
//logo
import logo from '../../assets/images/logo.png';
import { FiMenu } from 'react-icons/fi';
import { GrClose } from 'react-icons/gr';
//context
import { useStateContext } from '../../context/ContextProvider';


const Nvabar = () => {
  const { activeMenu, setActiveMenu, screenSize, setScreenSize } = useStateContext();

  useEffect(() => {
      const resizeHandler = (e) => setScreenSize(window.innerWidth);//for give screen size(responsive mode)
      window.addEventListener("resize", resizeHandler);//after change screen size setScreenSize
      resizeHandler();//get initial size
      return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  useEffect(() => {
    if (screenSize <= 768) {
      setActiveMenu(true);
    } else {
      setActiveMenu(false);
    }
  }, [screenSize]);

  console.log(activeMenu, screenSize);

  return (
    <div>
    <div className="flex md:items-start md:justify-start justify-between w-[90%] m-auto md:py-2">
        <img 
            src={logo} 
            alt="graph-logo"
            className={`p-1 md:w-16 md:h-16 w-12 h-12 ${!activeMenu ? "mt-4" : "mt-2"} rounded-lg cursor-pointer`} />
            {
              activeMenu ? (
                <FiMenu 
                  className="text-2xl m-1"
                  onClick={() => setActiveMenu(!activeMenu)}/>
              ) : (
          <div>
            <ul className="flex flex-col md:flex-row md:justify-between md:p-5 p-4 md:mr-5 text-start text-gray-200">
              <li className="ml-5 md:p-2 text-xs md:text-base rounded-md cursor-pointer duration-200 hover:bg-[#CD2122] mb-4 md:mb-0">BPMS گراف</li>
              <li className="ml-5 md:p-2 text-xs md:text-base rounded-md cursor-pointer duration-200 hover:bg-[#CD2122] mb-4 md:mb-0">محصولات</li>
              <li className="ml-5 md:p-2 text-xs md:text-base rounded-md cursor-pointer duration-200 hover:bg-[#CD2122] mb-4 md:mb-0">راهکارها</li>
              <li className="md:p-2 text-xs md:text-base rounded-md cursor-pointer duration-200 hover:bg-[#CD2122] md:mb-0">درباره گراف</li>
            </ul>
                <button 
                  className="md:hidden bg-[#cd2122] text-white text-[8px] m-auto flex justify-around items-center rounded w-14 h-4 p-0.5 mb-2"
                  onClick={() => setActiveMenu(!activeMenu)} 
                  >
                  بستن
                <GrClose color='#fff' />
                </button>
          </div>
              )
            }
    </div>
    </div>
  )
};

export default Nvabar;