import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDescription}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are we?</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
            laudantium, sint vero ullam reiciendis blanditiis deserunt provident
            necessitatibus quae inventore tempora corporis alias aperiam laborum
            ipsa fugiat labore. Nisi deserunt unde commodi numquam architecto
            ullam modi totam officiis, iusto soluta nam incidunt vero
            repellendus accusantium iste corrupti consequatur atque expedita?
            Numquam ea officiis tenetur est perferendis veniam aut, adipisci
            consequuntur, cumque, eligendi velit.
            <br />
            <br />A saepe minima velit pariatur inventore rem vel exercitationem
            incidunt iste qui debitis consectetur itaque repellat asperiores,
            impedit cum sapiente eveniet ab quasi aut doloribus quas! Provident,
            voluptate? Perspiciatis voluptate in voluptatum, optio officia
            accusamus nemo odit?
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What we do?</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
            laudantium, sint vero ullam reiciendis blanditiis deserunt provident
            necessitatibus quae inventore tempora corporis alias aperiam laborum
            ipsa fugiat labore. Nisi deserunt unde commodi numquam architecto
            ullam modi totam officiis, iusto soluta nam incidunt vero
            <br />
            <br /> — Dynamic Websites
            <br />
            <br /> — Fast and Handy
            <br />
            <br /> — Mobile Apps
          </p>
          <Button url="contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
