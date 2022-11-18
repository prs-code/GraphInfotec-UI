import React from "react";
 //components
import Main from "./components/Main";
import TopMove from './components/shared/MoveTop';
// import ContactUs from "./components/ContactUs";
//context
import { ContextProvider } from './context/ContextProvider';

function App() {
  return (
    <ContextProvider>
      <>
      <Main />
      <TopMove />
      {/* <ContactUs /> */}
      </>
    </ContextProvider>
  )
};

export default App;
