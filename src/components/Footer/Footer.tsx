import styles from "./page.module.css";
const year = new Date(Date.now()).getFullYear();

const Footer = () => {
  return (
    <div className={styles.container}>
      <p>©{year} Rohit Tomar. All rights reserved.</p>
    </div>
  );
};

export default Footer;
