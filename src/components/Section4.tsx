import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaUserCircle } from "react-icons/fa";

const testimonials = [
  { id: 1, name: "Nitish Gupta", text: "CareerBanao helped me clarify my career plans. The team is supportive and professional.", img: <FaUserCircle size={50} /> },
  { id: 2, name: "Shubham Pandey", text: "I am very satisfied with CareerBanao. The advisors are experienced and provide great guidance.", img: <FaUserCircle size={50} /> },
  { id: 3, name: "Dhiraj Singh", text: "Based on my experience, CareerBanao gives the best advice, and their staff is very helpful.", img: <FaUserCircle size={50} /> },
  { id: 4, name: "Amit Sharma", text: "I really liked CareerBanao’s services. The team patiently answered all my questions.", img: <FaUserCircle size={50} /> },
  { id: 5, name: "Rohit Verma", text: "The environment here is very positive and supportive. I would definitely recommend CareerBanao.", img: <FaUserCircle size={50} /> },
  { id: 6, name: "Vikas Yadav", text: "CareerBanao’s fast and reliable process impressed me. This is an excellent service.", img: <FaUserCircle size={50} /> }
];

const TestimonialSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Desktop pe 3 dikhenge
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } }, // Tablet pe 2 dikhenge
      { breakpoint: 768, settings: { slidesToShow: 1, centerPadding: "20px" } }, // Mobile pe 1 dikhega
    ],
  };

  return (
    <section className="pt-10 relative">
      <h1 className="text-center font-poppins mb-6 text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700">
      What Students Say About Us!
      </h1>

    <div className="max-w-5xl mx-auto pb-10 px-14 sm:px-4">
      
      <Slider {...settings}>
        {testimonials.map((item) => (
          <div key={item.id} className="p-4 pt-14 pb-14">
            <div className="testimonial-card  h-auto w-1/3 sm:w-2/5 md:w-4/5 mx-auto bg-purple-700 rounded-xl p-6 shadow-xl text-center">
            {typeof item.img === "string" ? (
              <img
                src={item.img}
                alt={item.name}
                className="w-20 h-20 rounded-full mx-auto border-4 border-pink-500"
              />
            ) : (
              <div className="w-20 h-20 mx-auto flex items-center justify-center text-pink-500">
                {item.img}
              </div>
            )}
            
              <p className="text-white mt-4">{item.text}</p>
              <h1 className="text-md text-white font-bold mt-2">{item.name}</h1>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </section>
  );
};

export default TestimonialSlider;
