import React from 'react';

const TextBaner = ({ boldText, lightText, boldText2 }) => {
  return (
    <>
        <h1 className="md:text-2xl md:font-extrabold text-base font-bold text-center mb-5">{boldText}<br />{boldText2}</h1>
        <div className="h-[1.5px] w-14 m-auto bg-[#cd2122] mb-5"></div>
        <p className="text-center text-[#535353] pb-4 text-sm font-extralight md:text-base">{lightText}</p>
    </>
  )
}

export default TextBaner;