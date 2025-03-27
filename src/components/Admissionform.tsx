import { useEffect } from "react";

const AdmissionForm: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://widgets.in6.nopaperforms.com/emwgts.js";
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  
  return (
    <div className="w-80 sm:w-100 mx-auto h-[605px] p-2 bg-white rounded-lg shadow-md" >
      <div className="npf_wgts" data-height="590px" data-w="b214bb41b7025009877617366f69b11c"></div>

    </div>
  );
};

export default AdmissionForm;






