import React from "react";
import { graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import Navbar from "../components/Navbar";
import Layout from "../components/layout";


export const query = graphql`
query ($slug: String!) {
  contentfulPage(slug: { eq: $slug }) {
    title
    content {raw
    }
  }
}
`;
const Page = ({ data }) => {
const { title, content } = data.contentfulPage;
const options = {};

return (
  <Layout>
<h1>{title}</h1>
<div>{renderRichText(content, options)}</div>
 </Layout>
);
};

export default Page;
