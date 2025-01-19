import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";


export const query = graphql`
query ($slug: String!) {
  contentfulPortfolioItem(slug: { eq: $slug }) {
title
    description{description}
    sourceCodeLink
    webSiteLink
    image{gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
    description
}  }
}
`;
const Page = ({ data }) => {
const { title, description, sourceCodeLink, webSiteLink } = data.contentfulPortfolioItem;
const image = getImage(data.contentfulPortfolioItem.image);
const imageAlt = data.contentfulPortfolioItem.image.description;


return (
  <Layout>
<h1>{title}</h1>
<Link to={`/projekt`}>&laquo;
 Projekt</Link>
<div>{description.description}</div>
<a href={sourceCodeLink} target="_blank" rel="noreferrer">Länk till källkod på gitHub</a>
<br></br>
{ webSiteLink && (<a  href={webSiteLink} target="_blank" rel="noreferrer">Länk till publicerad hemsida</a>)}
<GatsbyImage image={image} alt={imageAlt} />
 </Layout>
);
};

export default Page;
