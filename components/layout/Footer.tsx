// components/layout/Footer.tsx

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-100 text-center text-sm text-gray-500 py-4 mt-10 border-t">
      <p>© {new Date().getFullYear()} DreamStay. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
