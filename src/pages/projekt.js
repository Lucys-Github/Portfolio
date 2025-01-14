import React from "react";
import Layout from "../components/layout";
import { Link, useStaticQuery, graphql } from "gatsby";


const ProjektOverview = () => {

    const data = useStaticQuery(graphql`
        query {
          allContentfulPortfolioItem {
            nodes{
              slug
              title
            }
          }}
        `);

      const pages = data.allContentfulPortfolioItem.nodes;

    return(
        <Layout><h1>Projekt</h1>
        <ul>
                {pages.map((page) => (
                  <li key={page.slug}>
                    <Link to={`/${page.slug}`}>{page.title}</Link>
                  </li>
                ))}
              </ul></Layout>
    )
}

export default ProjektOverview
