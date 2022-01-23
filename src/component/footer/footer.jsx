import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  SocialIconLink,
} from "./footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">Marvelous Pizza </SocialLogo>
            <SocialIcon>
              <SocialIconLink
                href="https://facebook.com"
                target="_blank"
                aria-label="facebook"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="https://twitter.com"
                target="_blank"
                aria-label="twiter"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href="https://instagram.com"
                target="_blank"
                aria-label="instagram"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="https://youtube.com"
                target="_blank"
                aria-label="youtube"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </SocialIconLink>
            </SocialIcon>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
