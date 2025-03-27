import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Section3: React.FC<{ onApplyClick?: () => void }> = ({ onApplyClick = () => {} })  => {
  const cards = [
    "./imgs/drcc1.jpeg",
    "./imgs/drcc2.jpg",
    "./imgs/drcc3.jpeg",
    "./imgs/drcc4.jpeg",
    "./imgs/drcc5.jpeg",
    "./imgs/drcc6.jpeg",
    "./imgs/drcc7.jpeg",
    "./imgs/drcc8.jpeg",
    "./imgs/drcc9.jpeg",
    "./imgs/drcc10.jpeg",
    "./imgs/drcc11.jpg",
  ];

  const sliderSettings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    dots: false,
    arrows: false,
    appendDots: (dots: React.ReactNode) => (
      <div className="mt-4">
        <ul className="flex justify-center">{dots}</ul>
      </div>
    ),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section className="py-10 relative">
      <h1 className="text-center font-poppins mb-6 text-2xl sm:text-4xl font-bold text-purple-700">
      University Ranking
      </h1>
      <div className="container mx-auto px-4 sm:px-14 relative">
        <Slider {...sliderSettings}>
          {cards.map((logoUrl, index) => (
            <div key={index} className="p-5 pb-8">
              <div className="bg-white shadow-md rounded-lg overflow-hidden flex justify-center items-center cursor-pointer" style={{ height: "10rem" }} >
                <img className="max-w-full max-h-full object-contain" src={logoUrl} alt="Logo" style={{ width: "auto" }} onClick={() => {
            console.log("Image clicked! Triggering onApplyClick...");
            onApplyClick();
          }}/>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Section3;
