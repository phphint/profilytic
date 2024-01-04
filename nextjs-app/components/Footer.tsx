import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'; // Import useRouter
import Logo from './logo-horz-light.svg'; // Adjust the path to your logo.svg file

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const router = useRouter(); // Use useRouter to access the current route

  // Function to check if the link is active
  const isActive = (path) => router.pathname === path;

  return (
    <footer className="bg-footer-bg text-white py-8 flex justify-between items-center">
      <div className="flex items-center pl-10">
        <Link href="/">
          <img src={Logo} alt="Profilytic Logo" className="h-8 mr-4 cursor-pointer" />
        </Link>
        <span className="text-sm">- Empowering Talent, Transforming Recruitment</span>
      </div>
      <div className="pr-10">
        <ul className="flex space-x-4">
          <li className={`font-thin ${isActive('/terms') ? 'underline' : ''}`}>
            <Link href="/terms"><span className="cursor-pointer">Terms of Service</span></Link>
          </li>
          <li className={`font-thin ${isActive('/privacy') ? 'underline' : ''}`}>
            <Link href="/privacy"><span className="cursor-pointer">Privacy Policy</span></Link>
          </li>
        </ul>
        <p className="text-sm mt-2">© {currentYear} Profilytic. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
