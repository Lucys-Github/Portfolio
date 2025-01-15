import React from "react";
import { graphql, Link } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import Navbar from "../components/Navbar";
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
}
    imageAlt
  }
}
`;
const Page = ({ data }) => {
const { title, description, sourceCodeLink, webSiteLink, imageAlt } = data.contentfulPortfolioItem;
const image = getImage(data.contentfulPortfolioItem.image);


return (
  <Layout>
<h1>{title}</h1>
<Link to={`/projekt`}>&laquo;
 Projekt</Link>
<div>{description.description}</div>
<a href={sourceCodeLink} target="_blank">link to gitHub</a>
<br></br>
{ webSiteLink && (<a  href={webSiteLink} target="_blank">link to live website</a>)}
<GatsbyImage image={image} alt={imageAlt} />
 </Layout>
);
};

export default Page;
