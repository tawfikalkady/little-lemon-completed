import { createElement } from 'react';
import { Logo, Heading, SocialMediaWidget } from '../../components';
import { Link } from 'react-router-dom';
import navigation from '../../settings/cms/navigation.json';
import './Footer.css';

export const Footer = () => {
  return (
    <footer role="region" aria-label="Footer Section">
      <Logo
        className="LL-FooterLogo"
        src="https://ik.imagekit.io/zenius/Coursera/html-css/Asset_14_4x_d1Yk7QBPiW.png?ik-sdk-version=javascript-1.4.3&updatedAt=1674426270880"
        height="70px"
      />

      <section className="LL-FooterMenu">
        <Heading tag="h4" size="base">
          Menu
        </Heading>
        <nav className="LL-Navigation LL-FooterNavigation">
          <ul>
            {navigation.map(({ id, name, title, link, url, state }) => {
              const Element = link === 'internal' ? Link : 'a';
              const linkProps =
                Element === 'a' ? { href: url } : { to: url, state };
              return createElement(
                'li',
                { key: id, name, role: 'menuitem' },
                <Element title={title} {...linkProps}>
                  {title}
                </Element>
              );
            })}
          </ul>
        </nav>
      </section>

      <section className="LL-FooterContact">
        <Heading tag="h4" size="base">
          Contact Us
        </Heading>
        <article>
          <p>320 Otostrad Street, 15 May, Cairo - 14531</p>
          <p>+20-1271-7271-91</p>
          <p>contact-us@littlelemon.com</p>
        </article>
      </section>

      <section className="LL-FooterSocial">
        <Heading tag="h4" size="base">
          Social
        </Heading>
        <nav className="LL-Navigation LL-FooterNavigation">
          <SocialMediaWidget />
        </nav>
      </section>
    </footer>
  );
};
