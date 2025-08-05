import React, { useState } from "react";
import { FaBug } from "react-icons/fa";
import { Link } from "react-router-dom";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Branding is simply a more efficient way to sell things?",
      answer:
        "Massa a of est sit commodo convallis auctor as aliquet ready to ready works any more sem. Massa a of est sit commodo any convallis. Massa a of est sit commodo convallis auctor as aliquet ready to ready works any more sem. Massa a of est sit commodo any convallis.Massa a of est sit commodo convallis auctor as aliquet ready to ready works any more sem. Massa a of est sit commodo any convallis.",
    },
    {
      question: "It’s better to be first in the mind than marketplace?",
      answer:
        "Massa a of est sit commodo convallis auctor as aliquet ready to ready works any more sem. Massa a of est sit commodo any convallis. Massa a of est sit commodo convallis auctor as aliquet ready to ready works any more sem. Massa a of est sit commodo any convallis.Massa a of est sit commodo convallis auctor as aliquet ready to ready works any more sem. Massa a of est sit commodo any convallis.",
    },
    {
      question: "Marketing is a company’s ultimate objective?",
      answer:
        "Massa a of est sit commodo convallis auctor as aliquet ready to ready works any more sem. Massa a of est sit commodo any convallis. Massa a of est sit commodo convallis auctor as aliquet ready to ready works any more sem. Massa a of est sit commodo any convallis.Massa a of est sit commodo convallis auctor as aliquet ready to ready works any more sem. Massa a of est sit commodo any convallis.",
    },
    {
      question: "Positioning is what you do to the mind of the prospect?",
      answer:
        "Massa a of est sit commodo convallis auctor as aliquet ready to ready works any more sem. Massa a of est sit commodo any convallis. Massa a of est sit commodo convallis auctor as aliquet ready to ready works any more sem. Massa a of est sit commodo any convallis.Massa a of est sit commodo convallis auctor as aliquet ready to ready works any more sem. Massa a of est sit commodo any convallis.",
    },
    {
      question: "Branding is simply a more efficient way to sell things?",
      answer:
        "Massa a of est sit commodo convallis auctor as aliquet ready to ready works any more sem. Massa a of est sit commodo any convallis. Massa a of est sit commodo convallis auctor as aliquet ready to ready works any more sem. Massa a of est sit commodo any convallis.Massa a of est sit commodo convallis auctor as aliquet ready to ready works any more sem. Massa a of est sit commodo any convallis.",
    },
    {
      question: "What does it take become an author?",
      answer:
        "Massa a of est sit commodo convallis auctor as aliquet ready to ready works any more sem. Massa a of est sit commodo any convallis. Massa a of est sit commodo convallis auctor as aliquet ready to ready works any more sem. Massa a of est sit commodo any convallis.Massa a of est sit commodo convallis auctor as aliquet ready to ready works any more sem. Massa a of est sit commodo any convallis.",
    },
    {
      question: "How long it take to create a video course?",
      answer:
        "Massa a of est sit commodo convallis auctor as aliquet ready to ready works any more sem. Massa a of est sit commodo any convallis. Massa a of est sit commodo convallis auctor as aliquet ready to ready works any more sem. Massa a of est sit commodo any convallis.Massa a of est sit commodo convallis auctor as aliquet ready to ready works any more sem. Massa a of est sit commodo any convallis.",
    },
    {
      question: "What kind of support does Course log provide?",
      answer:
        "Massa a of est sit commodo convallis auctor as aliquet ready to ready works any more sem. Massa a of est sit commodo any convallis. Massa a of est sit commodo convallis auctor as aliquet ready to ready works any more sem. Massa a of est sit commodo any convallis.Massa a of est sit commodo convallis auctor as aliquet ready to ready works any more sem. Massa a of est sit commodo any convallis.",
    },
  ];

  return (
<div className="bg-[#FDFDFD]">
{/* Hero section */}
         <section className="relative w-full h-[300px] md:h-[350px]">
              <img
                src="./menu/bread_banner-scaled.jpg"
                alt="Bread on a wooden table - Menu banner"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-16">
                <h1 className="text-3xl md:text-6xl font-bold mb-2">FAQ</h1>
                <nav className="text-xl">
                  <Link to="/" className="hover:underline hover:text-[#E9004B] transition-colors">Home</Link>
                  <span className="mx-2">/</span>
                  <span className="text-[#E9004B] font-medium">FAQ</span>
                </nav>
              </div>
            </section>

{/* Fqq section */}
<div className=" py-12 px-4 sm:px-6 lg:px-8 mt-15 mb-15">
      <section className="max-w-8xl mx-auto">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className={`flex w-full items-center justify-between p-6 text-left focus:outline-none
    ${activeIndex === index
                    ? "bg-[#E9004B] text-white"
                    : ""
                  }`}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                <h3 className={`text-xl font-semibold ${activeIndex === index ? "text-white" : "text-black"}`}>
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 transform transition-transform duration-300 ${activeIndex === index ? "text-white" : "text-black"
                    } ${activeIndex === index ? "rotate-180" : ""}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06 0L10 10.91l3.71-3.7a.75.75 0 011.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>

              </button>
              <div
                id={`faq-content-${index}`}
                className={`transition-all duration-300 ease-in-out overflow-hidden ${activeIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
              >
                <div className="px-6 pb-6 text-gray-600 text-base">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
    </div>
  );
};

export default Faq;
