import React from "react";

const Navbar = () => {
  return (
    <div className="shadow-xl px-4 lg:px-16 md:px-36 py-5 grid grid-cols-2 grid-flow-col items-center">
      {/* Logo Section */}
      <div className="w-full">
        <img
          className="w-[100px] h-[40px] md:w-[151px] md:h-[64px]"
          src="/images/wise (2) 2.png"
          alt="Logo"
        />
      </div>

      {/* Right Section */}
      <div className="flex justify-end gap-5 md:gap-10 items-center">
        {/* Phone Number - Hidden on small screens */}
        <div className="hidden md:flex items-center gap-3">
          <img
            className="w-[20px] h-[20px] md:w-[30px] md:h-[30px]"
            src="/images/phoneimage.png"
            alt="Phone Icon"
          />
          <span className="text-sm md:text-base">+91 8264 272061</span>
        </div>

        {/* Download Brochure */}
        <div className="flex border border-black items-center gap-3 md:gap-4 rounded-md px-3 py-2 md:px-5 md:py-3">
          <img
            className="w-[20px] h-[20px] md:w-[30px] md:h-[30px]"
            src="/images/documnet pdf.jpg"
            alt="Download Brochure"
          />
          <span className="text-sm md:text-base">Download Brochure</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
