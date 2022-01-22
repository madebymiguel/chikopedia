import githubLogo from "../assets/github-logo.png";
import "../scss/Footer.scss";

export default function Credits() {
  return (
    <footer id="footer">
      <a
        className="link-formatter"
        href="https://github.com/madebymiguel/chikopedia"
        target="_blank"
        rel="noopener"
      >
        Chikopedia
        <img className="github-logo" src={githubLogo} alt="github-logo" />
      </a>

      <span> Created by: </span>

      <a
        className="link-formatter"
        href="https://github.com/madebymiguel"
        target="_blank"
        rel="noopener"
      >
        Miguel Mayorga,{" "}
      </a>

      <a
        className="link-formatter"
        href="http://github.com/warandstar"
        target="_blank"
        rel="noopener"
      >
        Jong Tai Kim
      </a>
    </footer>
  );
}
