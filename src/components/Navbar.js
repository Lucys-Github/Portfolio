
import React, { useState, useEffect } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPage {
        nodes {
          slug
          title
        }
      }
    }
  `);

  const pages = data.allContentfulPage.nodes;

   const [isMobile, setIsMobile] = useState(false);

    const checkMobile = () => {
      if (window.matchMedia("(max-width: 768px)").matches) {
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

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleHamburger = () => {
    setIsExpanded(!isExpanded);
  };

  const closeSidebar = () => {
    setIsExpanded(false);
  };

  if(isMobile){
  return (
    <div style={{display:"flex", alignItems:"center"}}>
      <button
        onClick={toggleHamburger}
        style={{
          border: "none",
          background: "none",
          padding: 0,
          width: "50px",
          height: "50px",
        }}
      >
        <StaticImage
          src="../images/hamburger.webp"
          alt="Hamburger Icon"
          placeholder="blurred"
          layout="constrained"
          style={{
            transform: isExpanded ? "rotate(90deg)" : "none",
            transition: "transform 0.3s ease",
          }}
        />
      </button>

      {isExpanded && (
        <div
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            width: "250px",
            backgroundColor: "#333",
            color: "#fff",
            zIndex: 1000,
            transition: "transform 0.3s ease-in-out",
            transform: isExpanded ? "translateX(0)" : "translateX(100%)",
          }}
        >
          <div
            style={{
              padding: "20px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#fff",
                }}
              >
                Portfolio
              </div>

              <button
                onClick={closeSidebar}
                style={{
                  background: "none",
                  border: "none",
                  color: "#fff",
                  fontSize: "24px",
                  cursor: "pointer",
                  padding: 0,
                }}
              >
                X
              </button>
            </div>

            <nav>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                <li>
                  <Link to={`/`} style={{ color: "#fff", textDecoration: "none" }}>
                    Hem
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/projekt`}
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    Projekt
                  </Link>
                </li>
                {pages.map((page) => (
                  <li key={page.slug}>
                    <Link
                      to={`/${page.slug}`}
                      style={{ color: "#fff", textDecoration: "none" }}
                    >
                      {page.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );}


  else{return (<nav style={{width:"100%",}}>
    <ul style={{ listStyleType: "none", padding: 0, display:"flex", justifyContent:"space-around", margin:"0", height:"100%", alignItems:"center"}}>
      <li>
        <Link to={`/`} style={{ color: "black",}}>
          Hem
        </Link>
      </li>
      <li>
        <Link
          to={`/projekt`}
          style={{ color: "black",}}
        >
          Projekt
        </Link>
      </li>
      {pages.map((page) => (
        <li key={page.slug}>
          <Link
            to={`/${page.slug}`}
            style={{ color: "black",}}
          >
            {page.title}
          </Link>
        </li>
      ))}
    </ul>
  </nav>)}
};


export default Navbar;
