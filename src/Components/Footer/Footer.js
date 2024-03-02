import Logo from "../NavBar/Logo";
import "./Footer.css";
import SocialMediaIcons from "./SocialMediaIcons";
import SourceCodeLink from "./SourceCodeLink";

function Footer() {
  return (
    <footer className="footer">
      <SocialMediaIcons />
      <Logo />
      <SourceCodeLink />
    </footer>
  );
}

export default Footer;
