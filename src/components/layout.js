import * as React from "react"

import Header from "./header"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>

      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >  <Header />
        <main>
          {children}</main>
        <footer
          style={{
            fontSize: `var(--font-sm)`,
          }}
        >
          © {new Date().getFullYear()} &middot; Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
