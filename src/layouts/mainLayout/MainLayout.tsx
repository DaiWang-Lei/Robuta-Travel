import React from "react";
import { Header, Footer } from "../../components";
import styles from "./MainLayout.module.css";

export const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles["page-content"]}>{children}</div>
      <Footer />
    </>
  );
};
