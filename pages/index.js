import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Welcome to My Portfolio</h1>
        <p className={styles.subtitle}>
          Crafting modern, scalable web applications with a passion for design and functionality.
        </p>
      </div>
    </section>
  );
}
