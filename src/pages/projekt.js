import React from "react";
import Layout from "../components/layout";
import { Link, useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";



const ProjektOverview = () => {

  const data = useStaticQuery(graphql`
        query {
          allContentfulPortfolioItem {
            nodes{
              slug
              title
               image{gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED) description}
            }
          }}
        `);

  const pages = data.allContentfulPortfolioItem.nodes;


  return (
    <Layout><h1>Projekt</h1>
      <ul style={{ listStyle: "none" }}>
        {pages.map((page) => {
          const image = getImage(page.image);
          const imageAlt = page.image.description;
          return (
            <li key={page.slug} style={{position: "relative",
              textAlign: "center"}}>
              <GatsbyImage style={{filter: "brightness(20%)"}} image={image} alt={imageAlt} />
              <Link style={{position: "absolute",
  top: "50%",
  left: "50%",
  color: "white",
  fontSize: "5vw",
  transform: "translate(-50%, -50%)"}} to={`/${page.slug}`}>{page.title}</Link>
            </li>
          )
        })}
      </ul></Layout>
  )
}

export default ProjektOverview
