import { Metadata } from "next";
import styles from "./page.module.css";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Portfolio",
};

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h1 className={styles.mainTitle}>Our work</h1>
      {children}
    </div>
  );
};

export default Layout;
