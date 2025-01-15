import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout.js";
import * as styles from "../components/index.module.css"
import Navbar from "../components/Navbar.js";

const IndexPage = () => {

  return (
    <Layout>
      <h1>Hem</h1>
    </Layout>)

}

export default IndexPage
