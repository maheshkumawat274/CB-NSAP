const steps = [
  {
    title: "Registration",
    description: "Complete your registration process with expert assistance.",
    icon: "📝",
    gradient: "bg-gradient-to-r from-green-500 to-blue-500",
  },
  {
    title: "Admission Guidance",
    description: "Get expert guidance throughout your admission process.",
    icon: "🎯",
    gradient: "bg-gradient-to-r from-blue-500 to-indigo-500",
  },
  {
    title: "College Selection",
    description: "Choose the best college based on your goals and preferences.",
    icon: "🏛️",
    gradient: "bg-gradient-to-r from-indigo-500 to-purple-500",
  },
  {
    title: "Scholarship Assistance",
    description: "Receive help in finding and applying for scholarships.",
    icon: "🎓",
    gradient: "bg-gradient-to-r from-pink-500 to-orange-500",
  },
  {
    title: "Education Loan Support",
    description: "Get support in securing an education loan easily.",
    icon: "🏦",
    gradient: "bg-gradient-to-r from-orange-500 to-yellow-500",
  },
  {
    title: "Career Counseling",
    description: "Plan your future with professional career counseling.",
    icon: "💼",
    gradient: "bg-gradient-to-r from-yellow-500 to-green-500",
  }
];


const Process = () => {
  return (
    <div className="mt-10">
      <h1 className="text-center font-poppins mb-6 text-2xl sm:text-4xl font-bold text-gray-700">
      How CB-NSAP 2025 Helps You?
      </h1>
    <div className="flex flex-col items-center md:flex-row md:justify-center gap-8 p-6">
      {steps.map((step, index) => (
        <div key={index} className="relative flex flex-col items-center md:flex-1">
          {/* Gradient Circle with Icon */}
          <div className={`w-16 h-16 flex items-center justify-center rounded-full text-white text-2xl ${step.gradient}`}>
            {step.icon}
          </div>

          {/* Vertical Line for Mobile */}
          {index < steps.length - 1 && <div className="md:hidden h-16 w-1 bg-gray-300"></div>}

          {/* Title and Description */}
          <div className="text-center mt-4">
            <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{step.description}</p>
          </div>

          {/* Horizontal Line for Desktop */}
          {index < steps.length - 1 && <div className="hidden md:block absolute top-8 left-full h-1 w-8 bg-gray-300"></div>}
        </div>
      ))}
    </div>
    
    </div>
  );
};

export default Process;
