"use client";

import Link from "next/link";
import styles from "./page.module.css";
import Darkmode from "../Darkmode/Darkmode";
import { motion as m } from "framer-motion";
import { useEffect, useState } from "react";

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

const Navbar = () => {
  const [mount, setMount] = useState(false);
  const [activeTab, setActiveTab] = useState("/");

  useEffect(() => {
    setMount(true);
    setActiveTab(window.location.pathname);
  }, []);

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
        {mount ? <Darkmode /> : null}
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            className={styles.link}
            onClick={() => setActiveTab(link.url)}
          >
            {mount ? (
              activeTab === link.url ? (
                <m.div layoutId="pill" className={styles.pill} />
              ) : null
            ) : null}
            {link.title}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
