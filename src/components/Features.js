import React, { useEffect, useState } from "react";
import Glide from "@glidejs/glide";

const Features = () => {
  const [loaderWidth, setLoaderWidth] = useState(30);

  const card = [
    {
      id: 1,
      title: "Address Workforce Skill Gap",
      des: "Bridging the gap between industry and skills through an Industry-aligned program",
      img: "/images/image1.png",
    },
    {
      id: 2,
      title: "Enhance Employee Retention",
      des: "Bolstering employee retention by promoting career development programs",
      img: "/images/smiling-business-colleagues-gesturing-while-standing-office 1.png",
    },
    {
      id: 3,
      title: "Reduce Talent Acquisition Costs",
      des: "Reduced acquisition costs due to employee education support",
      img: "/images/businessman-pulls-out-red-figure-man-from-crowd-with-magnet-increase-team-efficiency-productivity-leader-manages-business-forms-team-toxic-incompetent-worker 1.png",
    },
  ];

  const totalCards = card.length;
  const visibleCards = 3; // Adjust as per your `perView` value in Glide.js
  const cardStep = 50 / totalCards;

  useEffect(() => {
    const slider = new Glide(".glide", {
      type: "carousel",
      focusAt: "center",
      perView: visibleCards,
      slideWidth: 700,
      autoplay: 3000,
      animationDuration: 700,
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, [visibleCards]);

  const handleNextClick = () => {
    setLoaderWidth((prevWidth) =>
      prevWidth + cardStep > 100 ? 100 : prevWidth + cardStep
    );
  };

  const handleonpreviousclick = () => {
    setLoaderWidth((prevWidth) =>
      prevWidth - cardStep < 0 ? 0 : prevWidth - cardStep
    );
  };

  return (
    <div className="glide relative bg-blue-50 bg-opacity-30 p-10 ">
        <h1 className="text-center text-[40px] font-gilroyblack">Why Partner with Us?</h1>
        <p className="text-center text-[18px] font-gilroymedium ">Empowering industries with future-ready talent and tailored solutions</p>
      <div className="py-10 px-40">
        <div className="overflow-hidden rounded-xl" data-glide-el="track">
          <div className="whitespace-no-wrap items-center list-none justify-center gap-0 flex">
            {card.map((item) => (
              <li key={item.id} className="w-full h-auto">
                <div className="rounded-2xl w-[360px] bg-white border-b-4 border-b-[#0C7FAE] shadow-inner space-y-4 p-2">
                  <div className="grid place-items-center">
                    <img
                      className="rounded-xl"
                      src={item.img}
                      alt={item.title}
                    />
                  </div>
                  <div className="pl-2">
                    <h1 className="font-gilroysemibold">{item.title}</h1>
                    <h1 className="font-gilroymedium">{item.des}</h1>
                  </div>
                </div>
              </li>
            ))}
          </div>
          <div className="mt-10 flex w-full gap-10 px-2 items-center">
            <div className="bottom-0 w-full bg-[#E7EDF3] p-1 rounded-xl relative">
              <div
                className="bg-[#00435E] rounded-xl p-1 absolute top-0 left-0 z-10"
                style={{ width: `${loaderWidth}%` }}
              ></div>
            </div>
            <div className="flex" data-glide-el="controls">
              <button
                onClick={handleonpreviousclick}
                className="inline-flex h-8 w-8 items-center justify-center transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
                data-glide-dir="<"
                aria-label="prev slide"
              >
                <img className="" src="/images/arrow left.png" />
              </button>
              <button
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
                data-glide-dir=">"
                aria-label="next slide"
                onClick={handleNextClick}
              >
                <img className="rotate-180" src="/images/arrow left.png" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
