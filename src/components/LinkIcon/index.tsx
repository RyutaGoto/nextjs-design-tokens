import styles from "./styles.module.css";

export const LinkIcon = () => {
  return (
    <span className={styles.wrapper}>
      <span className={styles.link_icon}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
        >
          <path d="M8.162 3.077 13.14 8l-4.978 4.923L7.239 12l3.4-3.4H2.86V7.4h7.779L7.239 4Z" />
        </svg>
      </span>
    </span>
  );
};
