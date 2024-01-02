import React from 'react';
import Link from 'next/link'; // Import the Link component
import Logo from './logo-horz-light.svg'; // Adjust the path to your logo.svg file

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className="bg-footer-bg text-white py-8 flex justify-between items-center">
      <div className="flex items-center pl-10">
        <img src={Logo} alt="Profilytic Logo" className="h-8 mr-4" /> {/* Logo */}
        <span className="text-sm">- Empowering Talent, Transforming Recruitment</span>
      </div>
      <div className="pr-10">
        <ul className="flex space-x-4">
          <li className="font-thin">
            <Link href="/terms">
              <a>Terms of Service</a>
            </Link>
          </li>
          <li className="font-thin">
            <Link href="/privacy">
              <a>Privacy Policy</a>
            </Link>
          </li>
        </ul>
        <p className="text-sm mt-2">© {currentYear} Profilytic. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
