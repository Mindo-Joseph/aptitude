import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white w-full py-6 mt-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-full md:w-auto mb-4 md:mb-0 text-center">
            <h3 className="font-bold text-xl mb-2">Testing Platform</h3>
            <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
