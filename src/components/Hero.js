import React from "react";

const Hero = () => {
  return (
    <div
      className="w-full font-gilroyblack text-white bg-no-repeat relative h-auto"
      style={{
        backgroundImage: "url('images/Indian Education and Edutech 1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative w-full h-auto z-10">
        <img
          className="w-full h-screen md:h-auto"
          src="/images/overlay.png"
          alt=""
        />
        <div className="absolute top-0 w-full z-20">
          <div className="grid md:grid-cols-2 grid-cols-1 lg:px-16 md:px-10 px-5 gap-8 md:mt-20 mt-10">
            <div className="md:mt-16">
              <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-start gap-3 font-gilroymedium">
                <img
                  className="w-[52px] h-[52px]"
                  src="/images/medal1.png"
                  alt="Medal"
                />
                <p className="text-[16px]">
                  India’s 1st University to Promote NEP2020 in Industry-led
                  Format
                </p>
              </div>
              <div className="md:max-w-[600px] space-y-5 mt-8">
                <h1 className="text-[42px] md:text-[62px] leading-[50px] md:leading-[74px] text-center md:text-start">
                  Tie Up to Skill Up and{" "}
                  <span className="text-[#FC9D00]">Scale Up</span>
                </h1>
                <p className="font-gilroysemibold text-[16px] text-center md:text-start">
                  Invest in Skills, Save on Costs with WISE
                </p>
                <ul className="font-gilroysemibold text-[15px] mt-4 space-y-3">
                  <li className="flex items-center">
                    <img
                      src="/images/clck.png"
                      className="w-[20px] h-[20px]"
                      alt="Check"
                    />
                    <span className="ml-2">
                      Get skilled manpower and reduce attrition
                    </span>
                  </li>
                  <li className="flex items-center">
                    <img
                      src="/images/clck.png"
                      className="w-[20px] h-[20px]"
                      alt="Check"
                    />
                    <span className="ml-2">
                      Financial incentives from{" "}
                      <strong className="text-[#FC9D00] font-normal leading-none">
                        Government
                      </strong>{" "}
                      of India
                    </span>
                  </li>
                  <li className="flex items-center">
                    <img
                      src="/images/clck.png"
                      className="w-[20px] h-[20px]"
                      alt="Check"
                    />
                    <span className="ml-2">
                      Avail exemptions from labour compliances
                    </span>
                  </li>
                  <li className="flex items-center">
                    <img
                      src="/images/clck.png"
                      className="w-[20px] h-[20px]"
                      alt="Check"
                    />
                    <span className="ml-2">
                      <span className="text-[#FC9D00] font-normal leading-none">
                        UGC
                      </span>{" "}
                      approved degree/diploma &{" "}
                      <span className="text-[#FC9D00] font-normal leading-none">
                        NCVET
                      </span>{" "}
                      approved certification
                    </span>
                  </li>
                </ul>
                <button className="w-full md:w-auto px-8 py-3 md:px-20 md:py-4 rounded-[12px] mt-5 bg-[#FC9D00] text-center">
                  Partner With Us
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                className="w-[300px] h-auto md:w-[488px] md:h-[564px]"
                src="/images/Group 427319359@2x.png"
                alt="Hero Image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
