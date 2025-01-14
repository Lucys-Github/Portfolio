import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPage {
        nodes{
          slug
          title
        }
      }}
    `);

  const pages = data.allContentfulPage.nodes;

  return (
    <nav>
      <ul>
        <li>  <Link to={`/`}>Hem</Link>
        </li>
        <li>  <Link to={`/projekt`}>Projekt</Link>
        </li>
        {pages.map((page) => (
          <li key={page.slug}>
            <Link to={`/${page.slug}`}>{page.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
