import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1E1E20] text-white text-center py-4 w-full h-100px">
      <p className="text-lg">
        © {currentYear} Shreyansh. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;