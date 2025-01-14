import React from "react";
import { graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";


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
<div>
<h1>{title}</h1>
<div>{renderRichText(content, options)}</div>
</div>
);
};
export default Page;
