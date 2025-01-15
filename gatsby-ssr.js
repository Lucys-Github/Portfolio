const React = require("react");
/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
exports.onRenderBody = async ({ setHtmlAttributes,  setHeadComponents  }) => {
  setHtmlAttributes({ lang: `sv` }),
  setHeadComponents([
    <meta key="description" name="description" content=" portfolio of a front-end developer student" />,
    <meta key="keywords" name="keywords" content="frontend, react, portfolio, ux" />,
    <meta key="charset" charSet="UTF-8" />,
    <meta key="author" name="author" content="Lucia Macakova" />,
    <title>Portfolio</title>,
    <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1.0" />,
    <link key="favicon" rel="icon" href="src/images/gatsby-icon.webp" />
  ])
}
