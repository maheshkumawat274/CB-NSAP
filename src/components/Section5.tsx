import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is the CareerBanao National Scholarship Admission Program 2025?",
    answer: "It is a national-level initiative by CareerBanao to help students from across India secure admission in top universities with financial support and scholarship opportunities."
  },
  {
    question: "Who is eligible to apply for the National Scholarship Admission Program 2025?",
    answer: "Any student from India who has completed 12th (for UG courses) or Graduation (for PG courses) and is seeking admission to recognized universities can apply."
  },
  {
    question: "What benefits does the National Scholarship Admission Program offer?",
    answer: "The program provides admission guidance, scholarship assistance of up to ₹25,000, and full support in securing admission to reputed universities across India."
  },
  {
    question: "Can students from any state apply for this National Program?",
    answer: "Yes, students from all states of India are eligible to apply for the CareerBanao National Scholarship Admission Program 2025."
  },
  {
    question: "How can I apply for the National Scholarship Admission Program 2025?",
    answer: "You can apply online through the CareerBanao website. After registration, our team will contact you and assist you with the admission process and scholarship application."
  },
  {
    question: "Is there any application fee for the National Scholarship Admission Program?",
    answer: "No, there is no application fee. Applying for the CareerBanao National Scholarship Admission Program is completely free."
  },
  {
    question: "Which universities are covered under the National Scholarship Admission Program?",
    answer: "The program covers multiple recognized universities across India offering UG and PG courses. You will get a list of partnered universities after registration."
  },
  {
    question: "Will CareerBanao assist in the admission process under this program?",
    answer: "Yes, CareerBanao provides complete support including university selection, document verification, scholarship processing, and admission guidance."
  },
  
  {
    question: "Will CareerBanao help me with loan approval and university admission?",
    answer: "Yes, we provide full support, including document verification, loan processing, and admission guidance."
  },
  {
    question: "How can I contact CareerBanao for more information?",
    answer: "You can reach out to us via phone or email. Email: info@careerbanao.org | Phone: 8750092628."
  }
];


const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl sm:max-w-5xl mx-auto p-6">
      <h1 className="text-3xl text-gray-700 font-bold text-center mb-6">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="border rounded-lg overflow-hidden shadow-lg"
          >
            <button
              className="w-full flex justify-between items-center p-3 sm:p-4 bg-purple-700 text-white text-lg font-medium focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="p-4 font-semibold bg-gray-100 text-gray-800"
              >
                {faq.answer}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
