import React from "react";
import { graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import Navbar from "../components/Navbar";
import Layout from "../components/layout";


export const query = graphql`
query ($slug: String!) {
  contentfulPortfolioItem(slug: { eq: $slug }) {
title
    description{description}
    sourceCodeLink
    webSiteLink
  }
}
`;
const Page = ({ data }) => {
const { title, description, sourceCodeLink, webSiteLink } = data.contentfulPortfolioItem;
const options = {};

return (
  <Layout>
<h1>{title}</h1>
<div>{description.description}</div>
<a href={sourceCodeLink}>link to gitHub</a>
<br></br>
<a href={webSiteLink}>link to live website</a>
 </Layout>
);
};

export default Page;
