import Styles from "./Styles.module.scss";
import {
  GithubSvg,
  MailSvg,
  LinkedinSvg,
  PhoneSvg,
} from "../LinkSvg/index.jsx";

export function Header() {
  return (
    <header className={Styles.header}>
      <div className={Styles.header__wrapper}>
        <h1 className={Styles.header__title}>Mathieu Daniere</h1>
        <h2 className={Styles.header__subtitle}>Developpeur fullstack</h2>
        <div className={Styles.header__socialWrapper}>
          <GithubSvg href="https://github.com/Daniere-Mathieu" />
          <MailSvg />
          <LinkedinSvg />
          <PhoneSvg />
        </div>
      </div>
    </header>
  );
}
