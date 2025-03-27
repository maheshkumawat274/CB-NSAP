import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa"; // Importing the icon

const Section = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-4 sm:p-10 bg-white">
      {/* Left Content */}
      <motion.div 
        className="md:w-1/2 text-left space-y-6 text-white p-2 sm:p-8"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className=" text-2xl sm:text-4xl font-bold text-purple-700 leading-tight text-center">
          National Admission Assistance Program 2025
        </h1>
        <h2 className="text-xl font-semibold text-blue-600">Helping Students Across India</h2>
        <p className="text-black text-lg">
          We provide expert counseling and admission assistance for students seeking higher education
          in top colleges and universities across India. Our team ensures a seamless admission process
          with complete guidance and support.
        </p>
        <ul className="space-y-2 text-black text-lg">
          {["Registration", "Admission Guidance", "College Selection", "Scholarship Assistance", "Education Loan Support", "Application Process Assistance", "Career Counseling"].map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" /> {/* Custom icon */}
              {item}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Right Image */}
      <motion.div 
        className="md:w-1/2 flex justify-center mt-10 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img 
          src="./imgs/drccpic.jpg" 
          alt="National Admission Assistance" 
          className="w-full md:w-[80%] h-full md:h-auto max-h-[400px] rounded-lg shadow-2xl object-contain"
        />
      </motion.div>
    </div>
  );
};

export default Section;
