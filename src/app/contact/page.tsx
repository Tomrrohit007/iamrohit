import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";

const Contact = () => {
  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.title}>Let&apos;s Keep in Touch</h1>
        <div className={styles.content}>
          <div className={styles.imgContainer}>
            <Image
              src="/contact.webp"
              alt=""
              height={400}
              width={400}
              className={styles.image}
            />
          </div>
          <form action="" className={styles.form}>
            <input type="text" placeholder="name" className={styles.input} />
            <input type="email" placeholder="email" className={styles.input} />
            <textarea
              className={styles.textArea}
              placeholder="message"
              cols={30}
              rows={10}
            ></textarea>
            <Button url="#" text="Send" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
