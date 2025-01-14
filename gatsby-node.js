/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
 query{
allContentfulPage{
    nodes{
      slug
  }
}
}
  `);

  console.log(result);

  result.data.allContentfulPage.nodes.forEach((node) => {
    createPage({
      path: `/${node.slug}`,
      component: require.resolve("./src/templates/portfolio-item.js"),
      context: {
        slug: node.slug,
      },
    });
  });
};
