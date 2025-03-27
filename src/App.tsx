import { useRef } from "react"
import Home from "./components/home"
import Section from "./components/Section"
import Section2 from "./components/Section2"
import Section3 from "./components/Section3"
import TestimonialSlider from "./components/Section4"
import ApplyBtn from "./components/Applybtn"


const App = () => {
  const firstComponentRef = useRef<HTMLDivElement>(null);

  const handleScrollToFirstComponent = () => {
    if (firstComponentRef.current) {
      firstComponentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
     <Home ref={firstComponentRef}/>
     <Section/>
     <Section2/>
     <Section3/>
     <div className="flex items-center justify-center overflow-hidden">
      <TestimonialSlider />
      <ApplyBtn scrollToTarget={handleScrollToFirstComponent}/>
    </div>
    </>
  )
}

export default App