import React from "react";
 //components
// import Main from "./components/Main";
import ContactUs from "./components/ContactUs";
//context
import { ContextProvider } from './context/ContextProvider';

function App() {
  return (
    <ContextProvider>
      <>
      {/* <Main /> */}
      <ContactUs />
      </>
    </ContextProvider>
  )
};

export default App;
