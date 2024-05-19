import styles from "./footer.module.css";
export default function Footer({totalTodos, totalDoneTodos}) {
  return (
    <>
      <div className={styles.footer}>
        <span className={styles.footerItem}>Done: {totalDoneTodos}</span>
        <span className={styles.footerItem}>Total Todos: {totalTodos}</span>
      </div>
    </>
  );
}
