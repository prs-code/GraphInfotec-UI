import React from "react";
 //components
import Main from "./components/Main";
//context
import { ContextProvider } from './context/ContextProvider';

function App() {
  return (
    <ContextProvider>
      <>
      <Main />
      </>
    </ContextProvider>
  )
};

export default App;
