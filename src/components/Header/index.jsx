import Styles from "./Styles.module.scss";
import { GithubSvg, MailSvg } from "../LinkSvg/index.jsx";

export function Header() {
  return (
    <header className={Styles.header}>
      <div className={Styles.header__wrapper}>
        <h1 className={Styles.header__title}>Salut, c'est Mathieu Daniere</h1>
        <h2 className={Styles.header__subtitle}>Developpeur fullstack</h2>
        <div className={Styles.header__socialWrapper}>
          <GithubSvg />
          <MailSvg />
        </div>
      </div>
    </header>
  );
}
