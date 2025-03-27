import { motion } from "framer-motion";

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
        <h1 className=" text-xl sm:text-3xl font-bold text-purple-700 leading-tight text-center">
          CareerBanao National Scholarship Admission Program 2025(CB-NSAP 2025)
        </h1>
        <h1 className="text-xl font-semibold text-blue-600">Helping Students Across India</h1>
        <p className="text-black text-lg">
        CB-NSAP 2025 is a national scholarship initiative by CareerBanao, offering financial support and admission guidance to deserving students. It provides scholarships, career counseling, and admission assistance to help students achieve their academic goals without financial barriers. A golden opportunity to shape your future and unlock career success.
        </p>
        
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
