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
    </footer>
  );
}
export default Footer;
