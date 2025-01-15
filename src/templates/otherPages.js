import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import Layout from "../components/layout";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import * as styles from './otherPages.module.css';


export const query = graphql`
query ($slug: String!) {
  contentfulPage(slug: { eq: $slug }) {
    title
    content {
      raw
      references {
        ... on ContentfulAsset {
          contentful_id
          title
          description
          gatsbyImageData(width: 500)
          __typename
        }
          publicUrl
      }
    }
  }
}
`;
const Page = ({ data }) => {
  const { title, content } = data.contentfulPage;

  const [isMobile, setIsMobile] = useState(false);

  const checkMobile = () => {
    if (window.matchMedia("(max-width: 576px)").matches) {
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

  const hasAssets = Array.isArray(content.references) && content.references.some(ref => ref.__typename === "ContentfulAsset");


  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { gatsbyImageData, title } = node.data.target
        return (
          <div >
            <GatsbyImage
              image={getImage(gatsbyImageData)}
              alt={title}
            /></div>
        )
      },
      [BLOCKS.PARAGRAPH]: (node) => {
        return (
          <div>
            {node.content.map((child, index) => {
              if (child.nodeType === 'text') {
                return child.value;
              }

              if (child.nodeType === INLINES.HYPERLINK) {
                const linkText = child.content.map((linkChild) => linkChild.value).join('');

                return (
                  <a
                    href={linkText}
                    target="_blank"
                    key={index}
                  >
                    {linkText}
                  </a>
                );
              }

              return null;
            })}
          </div>
        );
      },
    }
  };


  return (
    <Layout>
      <h1>{title}</h1>
      <div className={!isMobile && hasAssets? styles.richTextContainerWithAssetsDesktop : styles.richTextContainer}>        {renderRichText(content, options)}
      </div>
    </Layout>
  );
};

export default Page;
