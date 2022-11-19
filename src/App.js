import React from "react";
import { Routes, Route } from "react-router-dom";
 //components
import Main from "./components/Main";
import ContactUs from "./components/ContactUs";


function App() {
  return (
      <div>
      <Routes>
        <Route path="/" element={ <Main /> } />
        <Route path="contact" element={ <ContactUs /> } />
      </Routes>
      </div>
  )
};

export default App;