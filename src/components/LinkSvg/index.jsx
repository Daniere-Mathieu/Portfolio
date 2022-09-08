import Styles from "./styles.module.scss";

export function GithubSvg() {
  return (
    <a
      className={Styles.social}
      href="https://github.com/Daniere-Mathieu"
      target="_blank"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
      >
        <path d="M13.18 11.309c-.718 0-1.3.807-1.3 1.799 0 .994.582 1.801 1.3 1.801s1.3-.807 1.3-1.801c-.001-.992-.582-1.799-1.3-1.799zm4.526-4.683c.149-.365.155-2.439-.635-4.426 0 0-1.811.199-4.551 2.08-.575-.16-1.548-.238-2.519-.238-.973 0-1.945.078-2.52.238C4.74 2.399 2.929 2.2 2.929 2.2c-.789 1.987-.781 4.061-.634 4.426C1.367 7.634.8 8.845.8 10.497c0 7.186 5.963 7.301 7.467 7.301l1.734.002 1.732-.002c1.506 0 7.467-.115 7.467-7.301 0-1.652-.566-2.863-1.494-3.871zm-7.678 10.289h-.056c-3.771 0-6.709-.449-6.709-4.115 0-.879.31-1.693 1.047-2.369C5.537 9.304 7.615 9.9 9.972 9.9h.056c2.357 0 4.436-.596 5.664.531.735.676 1.045 1.49 1.045 2.369 0 3.666-2.937 4.115-6.709 4.115zm-3.207-5.606c-.718 0-1.3.807-1.3 1.799 0 .994.582 1.801 1.3 1.801.719 0 1.301-.807 1.301-1.801 0-.992-.582-1.799-1.301-1.799z"></path>
      </svg>
    </a>
  );
}
export function MailSvg() {
  return (
    <a className={Styles.social} href="mailto:contact@mathieudaniere.fr">
      {
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          enableBackground="new 0 0 490 490"
          version="1.1"
          viewBox="0 0 490 490"
          xmlSpace="preserve"
        >
          <path d="M295.2 257.8L251.4 295c-3.5 2.9-8.6 2.9-12 0l-43.8-37.1L16.7 409.1h456.6L295.2 257.8z"></path>
          <path d="M0 92.2L0 397.8 180.1 245z"></path>
          <path d="M16.7 80.9L245 274.6 473.3 80.9z"></path>
          <path d="M309.9 245L490 397.8 490 92.2z"></path>
        </svg>
      }
    </a>
  );
}
export function WebsiteSvg() {
  // ! faire en sorte que le href soit passable en props
  return (
    <a className={Styles.social} href="">
      // ! insert the svg of website here
    </a>
  );
}
