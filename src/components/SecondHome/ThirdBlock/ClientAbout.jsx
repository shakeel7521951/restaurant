import "../styles/carousel.css";
import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { useInView } from "../hooks/useInView";

const VISIBLE_COUNT = 1;
const originalTestimonials = [
  {
    id: 1,
    text: "“ I believe in lifelong learning and kola is an great any more learn from experts. I've as recommend it all my ready to friends “",
    image:
      "https://www.radiustheme.com/demo/wordpress/themes/foodymat/wp-content/uploads/2024/11/avatar-image1.jpg",
    name: "Merrry Jiucy",
    title: "Web Designer",
  },
  {
    id: 2,
    text: "“ I believe in lifelong learning and kola is an great any more learn from experts. I've as recommend it all my ready to friends “",
    image:
      "https://www.radiustheme.com/demo/wordpress/themes/foodymat/wp-content/uploads/2024/11/avatar-image1.jpg",
    name: "Mr,Marke Josefer",
    title: "CEO, PSDBOSS",
  },
  {
    id: 3,
    text: "“ I believe in lifelong learning and kola is an great any more learn from experts. I've as recommend it all my ready to friends “",
    image:
      "https://www.radiustheme.com/demo/wordpress/themes/foodymat/wp-content/uploads/2024/11/avatar-image1.jpg",
    name: "Ronald Richards",
    title: "WordPress Developer",
  },
];

const testimonials = [
  originalTestimonials[originalTestimonials.length - 1],
  ...originalTestimonials,
  originalTestimonials[0],
];

function ClientAbout() {
  const [current, setCurrent] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [direction, setDirection] = useState("right");
  const [ref, isInView] = useInView();

  useEffect(() => {
    let timeout;

    if (current === testimonials.length - 1) {
      timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(1);
      }, 500);
    } else if (current === 0) {
      timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(testimonials.length - 2);
      }, 500);
    } else {
      setIsTransitioning(true);
    }

    return () => clearTimeout(timeout);
  }, [current]);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (!isTransitioning) return;
      setDirection("right");
      setCurrent((prev) => prev + 1);
    },
    onSwipedRight: () => {
      if (!isTransitioning) return;
      setDirection("left");
      setCurrent((prev) => prev - 1);
    },
    preventScrollOnSwipe: true,
    trackTouch: true,
    trackMouse: true,
  });

  return (
    <div
      ref={ref}
      className="w-full max-w-[1526.4px] h-auto px-4 sm:px-0 m-0 overflow-hidden"
    >
      {/* Heading */}
      <div className="flex flex-col text-center px-4 sm:px-0">
        <div
          className={`text-[24px] sm:text-[36px] pb-[15px] mx-auto w-full sm:w-[671.61px] fade-up fade-delay-hadding ${
            isInView ? "in-view" : ""
          }`}
          style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700 }}
        >
          Clients About Us
        </div>
        <div
          className={`text-[14px] sm:text-[16px] pb-[15px] mx-auto w-full sm:w-[671.61px] fade-up fade-delay-p ${
            isInView ? "in-view" : ""
          }`}
          style={{ fontFamily: "'Quicksand', sans-serif'", fontWeight: 400 }}
        >
          dolor sit amet consectetur. Massa a of est sit commodo convallis
          auctor aliquet ready works any more sem.
        </div>
      </div>

      {/* Slide Container */}
      <div
        {...handlers}
        className="w-full sm:w-[1526.4px] h-auto sm:h-[480px] pb-[50px] bg-clientAbout mt-10 flex flex-col items-center justify-center"
      >
        <div
          id="maindiv"
          className="w-full sm:w-[522.45px] overflow-hidden px-4 sm:px-0"
        >
          <div
            className={`slide-wrapper ${
              !isTransitioning ? "no-transition" : ""
            } ${direction}`}
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="slide-card w-full sm:w-[522.45px] h-auto sm:h-[320.1px] bg-white thin-left-border thin-right-border hover:border-[#E9004B] border-b-6 border-[#E5E4E2] rounded-xl p-5 sm:p-[55px] text-center relative transition-all duration-500 flex flex-col justify-end gap-[10px]"
              >
                {/* Testimonial Text */}
                <p
                  className="text-[16px] sm:text-[18px] mb-6 sm:mb-8 leading-snug text-[#02060C]"
                  style={{
                    fontFamily: "'Quicksand', sans-serif",
                    fontWeight: 500,
                  }}
                >
                  {testimonial.text}
                </p>

                {/* Person Info */}
                <div className="flex items-center justify-center">
                  <div className="flex mr-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-[45px] h-[46px] rounded-full object-cover mt-0"
                    />
                  </div>
                  <div>
                    <div
                      className="text-[18px] text-start font-semibold w-[162px] h-[35.22px] tracking-wide"
                      style={{ fontFamily: "'Quicksand', sans-serif" }}
                    >
                      {testimonial.name}
                    </div>
                    <div className="text-[15px] text-start text-[#848484] w-[152px] h-[19px]">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-6 flex space-x-2 sm:space-x-3">
          {originalTestimonials.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrent(index + 1)}
              className={`cursor-pointer transition-all duration-400 ${
                current === index + 1
                  ? "w-8 h-3 bg-[#E9004B] rounded-full"
                  : "w-3 h-3 bg-gray-400 rounded-full opacity-15"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ClientAbout;
