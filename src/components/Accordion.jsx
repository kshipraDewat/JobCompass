/* eslint-disable react/prop-types */
import { useState } from "react";
import faq from '../data/faq.json'
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { Button } from "./ui/button";
const Accordion = ({question, answer}) => {
  // console.log(answer)
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className=" bg-[#020817]">
      <button 
        onClick={() => setAccordionOpen(!accordionOpen)}
        className={`flex w-full justify-between border border-white rounded py-4 pl-4 text-xl max-sm:pl-2  max-sm:text-sm  ${accordionOpen && " bg-white !border-b-0 text-black"}`}
      >
        <div className=" flex-1 text-left max-sm:flex max-sm:flex-col">
          <span className="pr-3 max-sm:p-1 ">{question}</span>
          <span
            className={`  ${accordionOpen && "!border-black "}`}
          ></span>
         {" "}
          <span
            className={` border-gray-500 rounded  ${accordionOpen && "!border-black"}`}
          ></span>
          
        </div>
        <div
          className={` px-5 p-1 border-white   ${accordionOpen && "!border-black"}`}
        >
          {accordionOpen ? <span><FaAngleUp /></span> : <span><FaAngleDown/></span>}
        </div>
      </button>
      <div
        className={`grid overflow-hidden  text-slate-600 transition-all duration-300 ease-in-out ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden ">
          <ul
            className={`  border  border-t-0 border-white rounded-b  py-4 pl-12 font-sans text-xl font-light tracking-wide text-white max-sm:pl-8 max-sm:text-sm`}
          >
            {answer}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
