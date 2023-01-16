import React, { useState } from "react";
import { createBrowserRouter } from "react-router-dom";
import Contact from "./componenets/Contact/Contact";
import Main from "./componenets/Main/Main";
import Projects from "./componenets/Projects/Projects";
import Sidenav from "./componenets/Sidenav";
import Works from "./componenets/Work/Works";
import SwitchThemeContextProvide from "./Context/SwitchThemeStore";


function App() {
  return (
    <SwitchThemeContextProvide>
      <div className="App">
        <Sidenav />
        <Main />
        <Works />
        
        <Projects />
        <Contact />
      </div>
    </SwitchThemeContextProvide>
  );
}

export default App;
