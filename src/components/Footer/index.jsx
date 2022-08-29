import { h } from "preact";
import Styles from "./styles.module.scss";

function Footer() {
  return (
    <footer className={Styles.footer}>
      &copy; {new Date().getFullYear()} Mathieu Daniere
      <small className={Styles.byline}>
        Inspired by{" "}
        <a href="https://robiot.dev/" target="_blank">
          Robiot
        </a>
      </small>
      <small className={Styles.byline}>🚀 Built with Astro</small>
    </footer>
  );
}
export default Footer;
