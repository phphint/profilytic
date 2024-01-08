import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Logo from './logo-horz-light.svg'; // Adjust the path to your logo.svg file

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const router = useRouter();

  const isActive = (path) => router.pathname === path;

  return (
    <footer className="bg-footer-bg text-white py-8 md:flex md:justify-between md:items-center">
      <div className="flex items-center justify-center flex-col md:flex-row md:pl-10 text-center md:text-left mb-4 md:mb-0">
    <Link href="/">
      <img src={Logo} alt="Profilytic Logo" className="h-8 mb-2 md:mb-0 md:mr-4 cursor-pointer md:pl-4" />
    </Link>
    <span className="text-sm">- Accelerating Candidate Evaluation with AI</span>
  </div>
      <div className="text-center md:text-right md:pr-10">
        <ul className="flex justify-center space-x-4 mb-2 md:mb-0">
          <li className={`font-thin ${isActive('/terms') ? 'underline' : ''}`}>
            <Link href="/terms"><span className="cursor-pointer">Terms of Service</span></Link>
          </li>
          <li className={`font-thin ${isActive('/privacy') ? 'underline' : ''}`}>
            <Link href="/privacy"><span className="cursor-pointer">Privacy Policy</span></Link>
          </li>
        </ul>
        <p className="text-sm">© {currentYear} Profilytic. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
