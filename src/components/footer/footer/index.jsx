import React from 'react';
import FooterLogo from '../logo';
import FooterNavigation from '../nav';

const Footer = (props) => {
  return (
    <footer className="footer_area clearfix">
      <div className="container">
        <div className="row align-items-center">
          <FooterLogo />
          <FooterNavigation />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
