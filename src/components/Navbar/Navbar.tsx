"use client";

import Link from "next/link";
import styles from "./page.module.css";
import Darkmode from "../Darkmode/Darkmode";
import { motion as m } from "framer-motion";
import { useState } from "react";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
];

const currentRoute = window.location.pathname;

const Navbar = () => {
  const [activeTab, setActiveTab] = useState(currentRoute);

  return (
    <nav className={styles.container}>
      <Link
        href="/"
        className={styles.logo}
        onClick={() => setActiveTab(links[0].url)}
      >
        Iamrohit
      </Link>
      <ul className={styles.links}>
        <Darkmode />
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            className={styles.link}
            onClick={() => setActiveTab(link.url)}
          >
            {activeTab === link.url ? (
              <m.div layoutId="pill" className={styles.pill} />
            ) : null}
            {link.title}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
