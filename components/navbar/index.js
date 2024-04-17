import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { Component } from "./index.styled";
import { motion } from "framer-motion";

const brandTextVariants = {
  visible: {
    opacity: 1,
    display: "block",
  },
  hidden: { opacity: 0 },
};
const Navbar = () => {
  const navRef = useRef(null);
  useEffect(() => {
    window.onscroll = () => {
      const section = document.querySelector("#scrollId");
      const sectionTop = section.offsetTop;

      if (navRef) {
        if (scrollY > 100) {
          navRef.current.classList.add("no-logo");
        } else {
          navRef.current.classList.remove("no-logo");
        }
        if (scrollY >= sectionTop) {
          navRef.current.classList.add("fixed");
        } else {
          navRef.current.classList.remove("fixed");
        }
      }
    };
  }, []);
  return (
    <Component ref={navRef}>
      <motion.div
        style={{ filter: "blur(0px", opacity: 1 }}
        role="banner"
        variants={brandTextVariants}
        initial={"hidden"}
        animate={"visible"}
        transition={{ ease: "easeInOut", duration: 3, delay: 6 }}
      >
        <div className="container">
          <div className="navbar-wrapper">
            <a
              href="/"
              aria-current="page"
              className="navbar-brand"
              aria-label="home"
            ></a>
            <nav role="navigation" className="nav-menu-wrapper">
              <div className="nav-menu">
                <Link href="/">
                  <img
                    src="/images/logo-white.png"
                    alt="Logo"
                    className="logo-fixed"
                  />
                </Link>
              </div>
            </nav>
            <div
              className="menu-button w-nav-button"
              style={{ WebkitUserSelect: "text" }}
              aria-label="menu"
              role="button"
              tabIndex="0"
              aria-controls="w-nav-overlay-0"
              aria-haspopup="menu"
              aria-expanded="false"
            >
              <div className="icon w-icon-nav-menu"></div>
            </div>
          </div>
        </div>
        <div
          className="w-nav-overlay"
          data-wf-ignore=""
          id="w-nav-overlay-0"
        ></div>
      </motion.div>
    </Component>
  );
};

export default Navbar;

{
  /* <nav className="navbar navbar-fixed-top container-fluid">
        <div className="navbar-rows">
          <div className="navbar-left"></div>
          <div className="navbar-center">
            <div className="logo" id="logo">
              <img
                src="/images/logo-white.png"
                alt=""
                className="logo-no-fixed"
              />
            </div>
          </div>
          <div className="navbar-right">
            <div className="navbar-links">
              <Link href="/request_access/">
                <span className="get-started-button button">
                  <div>REQUEST ACCESS</div>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav> */
}
