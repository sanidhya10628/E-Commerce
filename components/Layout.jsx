import React from "react";
import Head from "next/head";
import NavBar from "./Navbar";
import Footer from "./Footer";

export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>E-Commerce</title>
      </Head>
      <header>
        <NavBar />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
