import styles from "./layout.module.css";
import Link from "next/link";

function NavLinks(props) {
  return (
    <ul className={styles.navLinks} style={props.style}>
      <Link href="/">
        <a>
          <li className={props.router.pathname == "/" ? styles.active : ""}>
            Board
          </li>
        </a>
      </Link>
      <Link href="/colors">
        <a>
          <li
            className={props.router.pathname == "/colors" ? styles.active : ""}
          >
            Colors
          </li>
        </a>
      </Link>
      <Link href="/gradient">
        <a>
          <li
            className={
              props.router.pathname == "/gradient" ? styles.active : ""
            }
          >
            Gradient
          </li>
        </a>
      </Link>
      <Link href="/glass">
        <a>
          <li
            className={props.router.pathname == "/glass" ? styles.active : ""}
          >
            Glass
          </li>
        </a>
      </Link>
      {/* <Link href="/neo">
        <a>
          <li className={props.router.pathname == "/neo" ? styles.active : ""}>
            Neo
          </li>
        </a>
      </Link> */}
      <Link href="/shadow">
        <a>
          <li
            className={props.router.pathname == "/shadow" ? styles.active : ""}
          >
            Shadow
          </li>
        </a>
      </Link>
      <Link href="/about">
        <a>
          <li
            className={props.router.pathname == "/about" ? styles.active : ""}
          >
            About
          </li>
        </a>
      </Link>
    </ul>
  );
}

export default NavLinks;
