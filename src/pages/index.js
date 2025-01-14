import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout.js";
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import Navbar from "../components/Navbar.js";

const IndexPage = () => {

  return(
    <Layout>
    <h1>Hem</h1>
   </Layout>)

  }

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
