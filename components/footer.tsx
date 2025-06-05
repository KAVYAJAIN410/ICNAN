import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a2240] text-white p-2">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Left side - Logo and Title */}
        <div className="flex items-center space-x-4">
          <Image src="/Logo.png" alt="ICNAN Logo" width={100} height={100} />
          <div>
            <h3 className="text-4xl font-bold leading-snug">ICNAN-25</h3>
            <p className="text-base text-gray-300 leading-snug">
              International Conference on Nanoscience & Nanotechnology
            </p>
          </div>
        </div>

        {/* Right side - Contact Info */}
        <div className="md:text-right text-center">
          <p className="">Centre for Nanotechnology Research</p>
          <p className="">Vellore Institute of Technology, Vellore, TN, India</p>
          <p className="">December 16–19, 2025</p>
          <p className="">cnricnan@vit.ac.in</p>
          <p className="">📞 +91 9994882510</p>
          <p>📞 +91 9791322311</p>
        </div>
      </div>

      {/* Bottom note */}
      <div className=" border-t border-gray-700 pt-4 text-center text-xs text-gray-400">
        <p>© 2025 ICNAN. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
