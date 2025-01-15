import React, { useState, useEffect } from "react";
import ThreeJSComponent from "./threeComponent";


import Navbar from "./Navbar"

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  const checkMobile = () => {
    if (window.matchMedia("(max-width: 768px)").matches) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (<section>

    {isMobile ? (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-start', }}>
        <ThreeJSComponent />
      </div><Navbar></Navbar></div>) : (<div style={{ display: "flex" }}> <ThreeJSComponent />    <Navbar>
      </Navbar><ThreeJSComponent /> </div>)}</section>

  )
}

export default Header
