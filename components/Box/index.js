import styles from "./box.module.css";

function Box({ children, ...props }) {
  return (
    <div className={styles.box} {...props}>
      {children}
    </div>
  );
}

export default Box;
