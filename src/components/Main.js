import React from 'react';
//components
import Section01 from "./Section01";
import Section02 from "./Section02";
import Section03 from "./Section03";
import Section04 from "./Section04";
import Section05 from "./Section05";
import Section06 from "./Section06";
import Section07 from "./Section07";
import TopMove from '../components/shared/MoveTop';

//context
import { ContextProvider } from '../context/ContextProvider';



const Main = () => {
  return (
    <ContextProvider>
      <div className="overflow-hidden scroll-smooth">
        <Section01 />
        <Section02 />
        <Section03 />
        <Section04 />
        <Section05 />
        <Section06 />
        <Section07 />
        <TopMove />
      </div>
    </ContextProvider>
  )
};

export default Main;