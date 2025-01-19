import React, { useState, useEffect } from "react";
import Layout from "../components/layout.js";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export const query = graphql`
  query {
    contentfulHero {
      bigText
      underText
      heroImage {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        description
      }
    }
  }
`

const IndexPage = ({ data }) => {

   const [isMobile, setIsMobile] = useState(false);

      const checkMobile = () => {
        if (window.matchMedia("(max-width: 1024px)").matches) {
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

  const { bigText, underText, heroImage } = data.contentfulHero
  const image = getImage(heroImage)
  const imageAlt = data.contentfulHero.heroImage.description

  return (
    <Layout>
      <div style={{display: "flex",  flexDirection: isMobile ? "column":"row", alignItems: isMobile ?"flex-end" : "center",  height:"70vh"}}>
        <div style={{ width: isMobile ? "100%" : "50%"}}>
      <h1>{bigText}</h1>
      <p>{underText}</p>
      </div>

      <GatsbyImage style={{ width: isMobile ? "100%" : "50%", marginInlineStart:"10%", height:"100%", borderRadius: isMobile ? "20px" : "0", border:"4px solid  #00fe6a ", padding:"6px", outline:"2px solid black",}} image={image} alt={imageAlt} />
      </div>
    </Layout>)

}

export default IndexPage
