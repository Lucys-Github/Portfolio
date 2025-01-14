import * as React from "react"
import ThreeJSComponent from "./threeComponent";


import Navbar from "./Navbar"

const Header = () => {
  return (<section><div style={{ display: 'flex', alignItems: 'center' }}>
    <h1 style={{ margin: 0 }}>Portfolio</h1>
    <div style={{ display: 'flex', justifyContent: 'flex-start', marginLeft: '10px' }}>
      <ThreeJSComponent />
    </div></div>
    <div>
      <Navbar></Navbar></div></section>

  )
}

export default Header
