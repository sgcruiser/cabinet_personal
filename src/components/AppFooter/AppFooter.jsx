import styles from './AppFooter.module.scss';

export default function AppFooter() {
  return (
    <footer className={styles.footer}>
      <small className={styles.text}>
        &copy; {new Date().getFullYear()} Developed by
        <a
          href="https://github.com/sgcruiser"
          target="_blank"
          rel="noopener noreferrer"
          title="Developer's Github"
          aria-label="Developer's Github"
          className={styles.link}
        >
          <span className={styles.developer}>sgcruiser</span>
        </a>
      </small>
    </footer>
  );
}
