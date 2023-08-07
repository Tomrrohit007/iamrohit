import Link from "next/link";
import styles from "./button.module.css";

const Button = ({ text, url }: { text: string; url: string }) => {
  return (
    <Link href={url}>
      <button className={styles.button}>{text}</button>
    </Link>
  );
};

export default Button;
