import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { FaMapMarkerAlt, FaStar, FaUniversity, FaAward } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Arrow from './Arrow';
// Dummy data array for 20 colleges (can be replaced with API data)
const colleges = [
  {
    "id": 1,
    "name": "Bennett University",
    "image": "./imgs/Bennett_University_ (1).jpg",
    "logo": "./imgs/bulogoretina.png",
    "highlights": ["Times Group Initiative", "Global Faculty", "Strong Industry Connect"],
    "location": "Greater Noida, Delhi NCR ",
    "link": "https://enquiry.careerbanao.org/?utm_source=national_website&utm_medium=Bennett_University&utm_campaign=national%20admission%20landingpage"
  },
  {
    "id": 2,
    "name": "IILM University",
    "image": "./imgs/Greater-Noida.jpg",
    "logo": "./imgs/IILM_University_Greater_Noida_logo_a24e49a29d.jpg",
    "highlights": ["30+ Years of Excellence", "Global Alumni Network", "International Collaborations"],
    "location": "Greater Noida, Delhi NCR ",
    "link": "https://enquiry.careerbanao.org/?utm_source=national_website&utm_medium=IILM_University&utm_campaign=national%20admission%20landingpage"
  },
  {
    "id": 3,
    "name": "IILM University",
    "image": "./imgs/Gurugram-scaled.jpg",
    "logo": "./imgs/IILM_University_Greater_Noida_logo_a24e49a29d.jpg",
    "highlights": ["Liberal Education", "Industry Integration", "Global Exposure"],
    "location": "Gurugram, Delhi NCR ",
    "link": "https://enquiry.careerbanao.org/?utm_source=national_website&utm_medium=IILM_University&utm_campaign=national%20admission%20landingpage"
  },
  {
    "id": 4,
    "name": "Mangalmay Group Of Institutions",
    "image": "./imgs/mc.jpg",
    "logo": "./imgs/1631350309645.jpeg",
    "highlights": ["20+ Years of Excellence", "Strong Industry Interface", "State-of-the-Art Infrastructure"],
    "location": "Greater Noida, Delhi NCR ",
    "link": "https://enquiry.careerbanao.org/?utm_source=national_website&utm_medium=Mangalmay_Group_Of_Institutions&utm_campaign=national%20admission%20landingpage"
  },
  {
    "id": 5,
    "name": "GNIOT",
    "image": "./imgs/1499333475phpY9hQNo.jpeg",
    "logo": "./imgs/GNIOT-Group-Of-Institutions.png.webp",
    "highlights": ["30+ Acres Campus", "Excellent Placement Record", "Modern Laboratories"],
    "location": "Greater Noida, Delhi NCR ",
    "link": "https://enquiry.careerbanao.org/?utm_source=national_website&utm_medium=GNIOT&utm_campaign=national%20admission%20landingpage"
  },
  {
    "id": 6,
    "name": "K.R. Mangalam University",
    "image": "./imgs/K_38-1200x675.webp",
    "logo": "./imgs/81e7754d22e0094165e78e4f091eb404.jpg",
    "highlights": ["Interdisciplinary Learning", "Global Partnerships", "Modern Campus Facilities"],
    "location": "Gurugram, Delhi NCR ",
    "link": "https://enquiry.careerbanao.org/?utm_source=national_website&utm_medium=K.R.%20Mangalam_University&utm_campaign=national%20admission%20landingpage"
  },
  {
    "id": 7,
    "name": "SRM Institute",
    "image": "./imgs/1611124191phpIL4DCF.png",
    "logo": "./imgs/925718327s.avif",
    "highlights": ["Cutting-Edge Research", "International Collaborations", "Comprehensive Curriculum"],
    "location": "Ghaziabad, Delhi NCR ",
    "link": "https://enquiry.careerbanao.org/?utm_source=national_website&utm_medium=SRM_Institute_Ghaziabad&utm_campaign=national%20admission%20landingpage"
  },
  {
    "id": 8,
    "name": "Rishihood University",
    "image": "./imgs/RU-Website-HomeBanner-1.png",
    "logo": "./imgs/images.png",
    "highlights": ["Impact-Oriented Education", "Entrepreneurial Ecosystem", "Holistic Development"],
    "location": "Sonipat, Delhi NCR ",
    "link": "https://enquiry.careerbanao.org/?utm_source=national_website&utm_medium=Rishihood_University&utm_campaign=national%20admission%20landingpage"
  },
  {
    "id": 9,
    "name": "GLA University",
    "image": "./imgs/1723545981php0txi7B.jpeg",
    "logo": "./imgs/GLA_University_logo.png",
    "highlights": ["NAAC 'A' Accredited", "Modern Infrastructure", "Strong Alumni Network"],
    "location": "Greater Noida, Delhi NCR",
    "link": "https://enquiry.careerbanao.org/?utm_source=national_website&utm_medium=GLA_University&utm_campaign=national%20admission%20landingpage"
  },

  {
    "id": 10,
    "name": "SRM University",
    "image": "./imgs/srm-university-jatheri-road-sonepat-universities-0nbbls8.avif",
    "logo": "./imgs/925718327s.avif",
    "highlights": ["Interdisciplinary Programs", "Global Exposure", "Advanced Research Facilities"],
    "location": "Sonipat, Delhi NCR",
    "link": "https://enquiry.careerbanao.org/?utm_source=national_website&utm_medium=GLA_University_Sonipat&utm_campaign=national%20admission%20landingpage"
  },
    {
      "id": 11,
      "name": "Amity University, Gurugram",
      "image": "./imgs/university.jpg",
      "logo": "./imgs/amity_university_gurgaon_logo.jpeg",
      "highlights": ["World-Class Infrastructure", "NAAC 'A+' Accreditation", "Global Industry Partnerships"],
      "location": "Gurugram, Haryana, Delhi NCR",
      "link": "https://enquiry.careerbanao.org/?utm_source=national_website&utm_medium=Amity%20University_Gurugram&utm_campaign=national%20admission%20landingpage"
    },
    {
      "id": 12,
      "name": "Geeta University",
      "image": "./imgs/geeta_university.webp",
      "logo": "./imgs/1652682958phpOptz2w.jpeg",
      "highlights": ["Futuristic Education", "Industry-Oriented Curriculum", "Global Collaborations"],
      "location": "Panipat, Haryana, Delhi NCR",
      "link": "https://enquiry.careerbanao.org/?utm_source=national_website&utm_medium=Geeta_University&utm_campaign=national%20admission%20landingpage"
    },
    {
      "id": 13,
      "name": "LPU",
      "image": "./imgs/banner.webp",
      "logo": "./imgs/33996b80-ff35-4d84-b296-230aa5ac11a5-cover.png",
      "highlights": ["Largest Private University", "International Tie-Ups", "Excellent Placement Record"],
      "location": "Phagwara, Punjab",
      "link": "https://enquiry.careerbanao.org/?utm_source=national_website&utm_medium=LPU&utm_campaign=national%20admission%20landingpage"
    },
    {
      "id": 14,
      "name": "Chandigarh University",
      "image": "./imgs/QS.2022.jpg",
      "logo": "./imgs/images (1).png",
      "highlights": ["NAAC 'A+' Accreditation", "Global Learning Environment", "Excellent Research Facilities"],
      "location": "Mohali, Punjab",
      "link": "https://enquiry.careerbanao.org/?utm_source=national_website&utm_medium=Chandigarh_University&utm_campaign=national%20admission%20landingpage"
    },
    {
      "id": 15,
      "name": "CGC Jhanjeri",
      "image": "./imgs/Use_This_Image_on_main_page_3.avif",
      "logo": "./imgs/images.jpeg",
      "highlights": ["Best Placement Record", "Modern Infrastructure", "Research-Driven Curriculum"],
      "location": "Mohali, Punjab",
      "link": "https://enquiry.careerbanao.org/?utm_source=national_website&utm_medium=CGC_Jhanjeri&utm_campaign=national%20admission%20landingpage"
    },
    {
      "id": 16,
      "name": "Chitkara University",
      "image": "./imgs/CUB4-Top-10-reasons-why-Chitkara-University-is-the-best-University-in-North-India.jpg",
      "logo": "./imgs/chitkara-university9168.jpg",
      "highlights": ["Ranked Amongst Top Universities", "Industry-Oriented Programs", "Global Collaborations"],
      "location": "Rajpura, Punjab",
      "link": "https://enquiry.careerbanao.org/?utm_source=national_website&utm_medium=Chitkara_University&utm_campaign=national%20admission%20landingpage"
    },
    {
      "id": 17,
      "name": "Amity University",
      "image": "./imgs/1.jpg",
      "logo": "./imgs/amity_university_gurgaon_logo.jpeg",
      "highlights": ["Global Recognition", "State-of-the-Art Infrastructure", "100% Placement Assistance"],
      "location": "Mohali, Punjab",
      "link": "https://enquiry.careerbanao.org/?utm_source=national_website&utm_medium=amity%20university%20mohali&utm_campaign=national%20admission%20landingpage"
    },
    {
      "id": 18,
      "name": "Shoolini University",
      "image": "./imgs/1721821924-qzz7e5z1wk271.jpg",
      "logo": "./imgs/images (2).png",
      "highlights": ["Research-Driven University", "Top-Ranked in Innovation", "International Tie-Ups"],
      "location": "Solan, Himachal Pradesh",
      "link": "https://enquiry.careerbanao.org/?utm_source=national_website&utm_medium=shoolini%20university&utm_campaign=national%20admission%20landingpage"
    },
    {
      "id": 19,
      "name": "UPES",
      "image": "./imgs/UPES.jpg",
      "logo": "./imgs/images (1).jpeg",
      "highlights": ["Industry-Oriented Programs", "NAAC 'A' Accreditation", "Global Collaborations"],
      "location": "Dehradun, Uttarakhand",
      "link": "https://enquiry.careerbanao.org/?utm_source=national_website&utm_medium=UPES&utm_campaign=national%20admission%20landingpage"
    },
    {
        "id": 20,
        "name": "Uttaranchal University",
        "image": "./imgs/gallery-1.jpg",
        "logo": "./imgs/WijdUtj0_400x400.jpg",
        "highlights": ["NAAC 'A+' Accredited", "Diverse Programs", "Excellent Placement Record"],
        "location": "Dehradun, Uttarakhand",
        "link": "https://enquiry.careerbanao.org/?utm_source=national_website&utm_medium=Uttaranchal%20University&utm_campaign=national%20admission%20landingpage"
      },
      {
        "id": 21,
        "name": "Quantum University",
        "image": "./imgs/01.jpg",
        "logo": "./imgs/28168173_183561045585476_3493559331387752147_n.pngs",
        "highlights": ["Interdisciplinary Education", "Industry-Focused Curriculum", "Modern Campus"],
        "location": "Roorkee, Uttarakhand",
        "link": "https://enquiry.careerbanao.org/?utm_source=national_website&utm_medium=Quantum_University&utm_campaign=national%20admission%20landingpage"
      },
      {
        "id": 22,
        "name": "Tulas Institute",
        "image": "./imgs/download.jpeg",
        "logo": "./imgs/schoolLogo.95f6e121.png",
        "highlights": ["Top Engineering College", "Impressive Placements", "Advanced Facilities"],
        "location": "Dehradun, Uttarakhand",
        "link": "https://enquiry.careerbanao.org/?utm_source=national_website&utm_medium=Tulas%20Institute&utm_campaign=national%20admission%20landingpage"
      },
      {
        "id": 23,
        "name": "RIT Roorkee",
        "image": "./imgs/1709814970phpnSEDD1.jpeg",
        "logo": "./imgs/Untitled-design-31.png",
        "highlights": ["Excellence in Technical Education", "Experienced Faculty", "Advanced Laboratories"],
        "location": "Roorkee, Uttarakhand",
        "link": "https://enquiry.careerbanao.org/?utm_source=national_website&utm_medium=RIT%20Roorkee&utm_campaign=national%20admission%20landingpage"
      },
      {
        "id": 24,
        "name": "Kaziranga University",
        "image": "./imgs/856c5c71-46bb-47ab-aa6b-27ea96d64392.jpg",
        "logo": "./imgs/images (3).png",
        "highlights": ["High-Quality Education", "Modern Infrastructure", "Industry Collaboration"],
        "location": "Jorhat, Assam",
        "link": "https://enquiry.careerbanao.org/?utm_source=national_website&utm_medium=Kaziranga_University&utm_campaign=national%20admission%20landingpage"
      },
      {
        "id": 25,
        "name": "GLA University",
        "image": "./imgs/Online-Admission-From-GLA-University-Mathura-UP.jpg",
        "logo": "./imgs/GLA_University_logo.png",
        "highlights": ["NAAC 'A+' Accredited", "Diverse Programs", "Excellent Placement Record"],
        "location": "Mathura, Uttar Pradesh",
        "link": "https://enquiry.careerbanao.org/?utm_source=national_website&utm_medium=GLA%20University%20Mathura&utm_campaign=national%20admission%20landingpage"
      },
      {
        "id": 26,
        "name": "Amity University",
        "image": "./imgs/lucknow.webp",
        "logo": "./imgs/amity_university_gurgaon_logo.jpeg",
        "highlights": ["World-Class Infrastructure", "Industry Partnerships", "Outstanding Research Facilities"],
        "location": "Lucknow, Uttar Pradesh",
        "link": "https://enquiry.careerbanao.org/?utm_source=national_website&utm_medium=Amity%20University%20lucknow&utm_campaign=national%20admission%20landingpage"
      },
      {
        "id": 27,
        "name": "Amity University",
        "image": "./imgs/raipur.webp",
        "logo": "./imgs/amity_university_gurgaon_logo.jpeg",
        "highlights": ["State-of-the-Art Campus", "Global Recognition", "100% Placement Assistance"],
        "location": "Raipur, Chhattisgarh",
        "link": "https://enquiry.careerbanao.org/?utm_source=national_website&utm_medium=Amity%20University%20Raipur&utm_campaign=national%20admission%20landingpage"
      },
      {
        "id": 28,
        "name": "Amity University",
        "image": "./imgs/university (1).jpg",
        "logo": "./imgs/amity_university_gurgaon_logo.jpeg",
        "highlights": ["Global Education Standards", "Industry-Oriented Programs", "Modern Facilities"],
        "location": "Mumbai, Maharashtra",
        "link": "https://enquiry.careerbanao.org/?utm_source=national_website&utm_medium=Amity%20University%20Mumbai&utm_campaign=national%20admission%20landingpage"
      },
      {
        "id": 29,
        "name": "Universal AI University",
        "image": "./imgs/Academic_Building_Right_Side_Top_View.jpg",
        "logo": "./imgs/UAi-B-G.png",
        "highlights": ["India’s First AI University", "Cutting-Edge Curriculum", "Global Collaborations"],
        "location": "Karjat, Maharashtra",
        "link": "https://enquiry.careerbanao.org/?utm_source=national_website&utm_medium=Universal%20AI%20University&utm_campaign=national%20admission%20landingpage"
      },
      {
        "id": 30,
        "name": "Sandip University",
        "image": "./imgs/1529305763phpg005s0.png",
        "logo": "./imgs/images (4).png",
        "highlights": ["Multiple Schools of Study", "Modern Campus", "Excellent Placement Support"],
        "location": "Nashik, Maharashtra",
        "link": "https://enquiry.careerbanao.org/?utm_source=national_website&utm_medium=sandip%20university%20nashik&utm_campaign=national%20admission%20landingpage"
      },
      {
        "id": 31,
        "name": "Sandip University",
        "image": "./imgs/Leading-Polytechnic-Institute-in-India.jpg",
        "logo": "./imgs/images (4).png",
        "highlights": ["High-Quality Education", "Modern Facilities", "Industry Collaborations"],
        "location": "Madhubani, Bihar",
        "link": "https://enquiry.careerbanao.org/?utm_source=national_website&utm_medium=sandip%20university%20madhubani&utm_campaign=national%20admission%20landingpage"
      },
      {
        "id": 32,
        "name": "Amity University",
        "image": "./imgs/Amity-Business-School-Gwalior08.avif",
        "logo": "./imgs/amity_university_gurgaon_logo.jpeg",
        "highlights": ["World-Class Education", "Modern Infrastructure", "Excellent Placement Support"],
        "location": "Gwalior, Madhya Pradesh",
        "link": "https://enquiry.careerbanao.org/?utm_source=national_website&utm_medium=amity%20university%20gwalior&utm_campaign=national%20admission%20landingpage"
      },
      {
        "id": 33,
        "name": "Amity University",
        "image": "./imgs/university (2).jpg",
        "logo": "./imgs/amity_university_gurgaon_logo.jpeg",
        "highlights": ["High-Quality Education", "Modern Facilities", "Excellent Placement Support"],
        "location": "Jaipur, Rajasthan",
        "link": "https://enquiry.careerbanao.org/?utm_source=national_website&utm_medium=amity%20university%20jaipur&utm_campaign=national%20admission%20landingpage"
      },
      {
        "id": 34,
        "name": "JECRC University",
        "image": "./imgs/12-2.jpg",
        "logo": "./imgs/Jecrc-University.png",
        "highlights": ["Leading Private University", "Research-Oriented Curriculum", "Strong Industry Connect"],
        "location": "Jaipur, Rajasthan",
        "link": "https://enquiry.careerbanao.org/?utm_source=national_website&utm_medium=JECRC%20university%20jaipur&utm_campaign=national%20admission%20landingpage"
      },
      {
        "id": 35,
        "name": "SR University",
        "image": "./imgs/sru.webp",
        "logo": "./imgs/images (5).png",
        "highlights": ["Innovation-Driven Education", "Top Engineering Programs", "State-of-the-Art Infrastructure"],
        "location": "Telangana, South India ",
        "link": "https://enquiry.careerbanao.org/?utm_source=national_website&utm_medium=SR%20university%20Telangana&utm_campaign=national%20admission%20landingpage"
      },
      {
        "id": 36,
        "name": "Amity University",
        "image": "./imgs/university.webp",
        "logo": "./imgs/amity_university_gurgaon_logo.jpeg",
        "highlights": ["Global Learning Environment", "Industry-Focused Education", "Modern Facilities"],
        "location": "Bangalore, Karnataka, South India ",
        "link": "https://enquiry.careerbanao.org/?utm_source=national_website&utm_medium=amity%20university%20Bangalore&utm_campaign=national%20admission%20landingpage"
      }
    ];
    
  
  

const CollegeCards: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
const [debouncedSearch, setDebouncedSearch] = useState("");

useEffect(() => {
  const handler = setTimeout(() => {
    setDebouncedSearch(searchTerm);
  }, 300); 

  return () => clearTimeout(handler);
}, [searchTerm]);

const uniqueColleges = Array.from(
  new Map(colleges.map((college) => [college.id, college])).values()
);

const filteredColleges = uniqueColleges.filter(
  (college) =>
    college.name?.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
    college.location?.toLowerCase().includes(debouncedSearch.toLowerCase())
);

const settings = {
  dots: false,
  infinite: filteredColleges.length > 1,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  autoplay: debouncedSearch.length === 0,
  pauseOnHover: true,
  arrows:true,
  prevArrow: <Arrow direction="left"  onClick={() => {}}/>,
  nextArrow: <Arrow direction="right" onClick={() => {}} />,
  responsive: [
    {
      breakpoint: 1370,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 870,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const handleClick = (url: string) => {
  const newTab = window.open(url, "_blank", "noopener,noreferrer");
  if (newTab) {
    newTab.opener = null;
  }
};


  
  return (
    <div className=" font-poppins px-2 sm:px-14">
  {/* 🔹 Section Heading */}
  <h1 className="text-2xl sm:text-3xl font-bold text-center text-purple-700 pt-14">
     <MdSchool className="inline-block text-primaryBtn text-5xl mr-2" />
     Nationally Recognized Universities
    </h1>

  {/* 🔹 Search Section */}
  <div className="text-center pt-6">
    {/* 🔹 Search Section */}
    <h1 className="text-md md:text-3xl font-bold text-gray-800 mb-2">
      CareerBanao National Scholarship Admission Program 2025(CB-NSAP 2025)
    </h1>
    <h1 className="text-lg md:text-xl font-bold text-purple-700">
      Your Gateway to Dream Colleges
    </h1>
    <h1 className="text-lg md:text-xl font-semibold text-pink-500">
    "Think Scholarship, Choose CareerBanao!"
    </h1>
    <p className="text-gray-600 mt-3 text-sm md:text-base">
      Secure admission in top universities across India with expert guidance and support. Apply now!
    </p>
    <p className="text-gray-500 text-sm mt-2">
      Enter your preferred <b>College Name or Location</b> to find admission details.
    </p>
    
  

    {/* 🔹 Search Input */}
    <input
      type="text"
      placeholder="Search by College name or Location..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="mt-4 p-2 w-full md:w-1/2 border rounded-md shadow-sm focus:ring focus:ring-purple-300"
    />
  </div>

  {/* 🔹 Jab search term ho, tab grid dikhaye */}
  {searchTerm.length > 0 ? (
    <div className="w-full flex overflow-x-auto whitespace-nowrap space-x-4 p-4">
    {filteredColleges.length > 0 ? (
      filteredColleges.map((college) => (
        <div key={college.id} className="bg-white min-w-[300px] shadow-lg rounded-lg overflow-hidden p-4">
          <div className="relative">
            <img src={college.image} alt={`${college.name} Campus`} className="w-full h-40 object-cover" />
            <img src={college.logo} alt={`${college.name} Logo`} className="absolute top-3 left-3 w-12 h-12 rounded-full border-2 border-white shadow-md"/>
          </div>
          <h1 className="text-md font-semibold text-purple-700 mt-2">{college.name}</h1>
          <p className="text-sm text-gray-600 flex items-center">
            <FaMapMarkerAlt className="text-red-500 mr-2" /> {college.location}
          </p>
          <ul className="text-sm text-gray-600 space-y-1 mb-3">
            {college.highlights.map((highlight, index) => (
              <li key={index} className="flex items-center">
                <FaStar className="text-yellow-500 mr-2" />
                {highlight}
              </li>
            ))}
          </ul>
          <a onClick={() => handleClick(college.link)}>
            <button className="bg-purple-700 hover:bg-pink-500 text-white py-2 px-4 rounded-lg text-sm font-medium w-full transition">
              <FaAward className="inline-block mr-2" /> Apply now
            </button>
          </a>
        </div>
      ))
    ) : (
      <p className="text-center col-span-full text-gray-600">No colleges found.</p>
    )}
  </div>
  
  ) : (
    // 🔹 Jab search term empty ho, tab slider dikhaye
    <Slider {...settings} className="mx-4">
      {filteredColleges.map((college) => (
        <div key={college.id} className="px-2 pt-5 pb-5">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105 hover:shadow-2xl">
            <div className="relative">
              <img src={college.image} alt={`${college.name} Campus`} className="w-full h-40 object-cover" />
              <img src={college.logo} alt={`${college.name} Logo`} className="absolute top-3 left-3 w-12 h-12 rounded-full border-2 border-white shadow-md" />
            </div>
            <div className="p-4">
              <h1 className="text-md font-semibold text-gray-800 mb-2 flex items-center">
                <FaUniversity className="text-purple-700 mr-2" />
                {college.name}
              </h1>
              <p className="text-sm text-gray-600 flex items-center mb-3">
                <FaMapMarkerAlt className="text-red-500 mr-2" /> {college.location}
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-3">
                {college.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center">
                    <FaStar className="text-yellow-500 mr-2" />
                    {highlight}
                  </li>
                ))}
              </ul>
              <a onClick={() => handleClick(college.link)}>
                <button className="bg-purple-700 hover:bg-pink-500 text-white py-2 px-4 rounded-lg text-sm font-medium w-full transition">
                  <FaAward className="inline-block mr-2" /> Apply now
                </button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  )}
</div>

  );
};
export default CollegeCards;

