// AuthSection.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGoogle, faMicrosoft, faApple } from '@fortawesome/free-brands-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

const AuthSection = () => {
 
  return (
    <section className="bg-white min-h-[25vh]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-4 pt-10">
          {/* Column 1 - Social Login Options */}
          <div className="p-14">
            <h3 className="font-semibold mb-2 text-2xl">Social Login</h3>
            <div className="flex space-x-4">
              <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ width: '2rem', height: 'auto' }} />
              <FontAwesomeIcon icon={faGoogle} size="2x" style={{ width: '2rem', height: 'auto' }}/>
              <FontAwesomeIcon icon={faMicrosoft} size="2x" style={{ width: '2rem', height: 'auto' }}/>
              <FontAwesomeIcon icon={faApple} size="2x" style={{ width: '2rem', height: 'auto' }}/>
            </div>
          </div>

          {/* Column 2 - Secure Login */}
          <div className="p-14 flex ">
            <FontAwesomeIcon icon={ faLock }  className="mr-2" style={{ width: '3rem', height: '3rem' }}/>
            <p>Your information is safely encrypted and secure.</p>
          </div>

          {/* Column 3 - User Support/FAQs */}
          <div className="p-14">
            <h3 className="font-semibold mb-2 text-2xl">Need Help?</h3>
            <p>Contact us for support at <a href="mailto:info@profilytic.com">info@profilytic.com</a>.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthSection;
