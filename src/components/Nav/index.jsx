import Styles from "./styles.module.scss";

function Nav() {
  return (
    <nav className={Styles.nav}>
      <div className={Styles.nav__wrapper}>
        <div className={Styles.nav__left}>
          <a className={Styles.nav__logolink} href={import.meta.env.BASE_URL}>
            <div className={Styles.monogram}>MD</div>
          </a>
        </div>
        <div className={Styles.nav__right}>
          <a className={Styles.nav__link} href="#about">
            A propos
          </a>
          <a className={Styles.nav__link} href="#experience">
            Experience
          </a>
          <a className={Styles.nav__link} href="#projects">
            Projet
          </a>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
