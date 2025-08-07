import React from "react";
import { useInView } from "../hooks/useInView";
import { UtensilsCrossed, Bike } from "lucide-react";
import "../styles/animation.css";
import {
  MapPinIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";

function Track() {
  const [ref, isInView] = useInView();
  return (
    <div ref={ref}>
      {/* Title & Description Centered */}
      <div className="flex justify-center text-center">
        <div>
          <h2
            className={`text-[24px] sm:text-[36px] pb-[15px] mx-auto w-fit fade-up fade-delay-hadding ${
              isInView ? "in-view" : ""
            }`}
            style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700 }}
          >
            How to Order?
          </h2>

          <p
            className={`text-[14px] sm:text-[16px] mb-[15px] mx-auto max-w-[591.35px] fade-up fade-delay-p ${
              isInView ? "in-view" : ""
            }`}
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            dolor sit amet consectetur. Massa a of est sit commodo convallis
            auctor aliquet ready works any more sem.
          </p>
        </div>
      </div>

      {/* Background Image Section */}
      <div className="w-full max-w-[1323px] h-auto sm:h-[337px] bg-no-repeat bg-cover relative mx-auto flex flex-col sm:flex-row items-center justify-center mt-10 space-y-20 sm:space-y-0 sm:bg-[url('https://www.radiustheme.com/demo/wordpress/themes/foodymat/wp-content/uploads/2024/10/h1-Info-shape-1.png')]">
        {/* All Blocks */}
        {/* Step 1 */}
        <div
          className={`w-full sm:pr-11 pb-4 sm:w-[315px] h-[235px] flex flex-col items-center justify-center hover-parent  fade-up fade-delay-hadding ${
            isInView ? "in-view" : ""
          }`}
        >
          <div className="relative w-[235px] h-[235px] bg-[#FEF6F7]  rounded-full flex items-center justify-center text-center">
            <a
              className="text-[18px] sm:text-[26px] px-3 w-fit hover-text"
              style={{
                fontFamily: "'Quicksand', sans-serif",
                fontWeight: 700,
              }}
            >
              Choose your location
            </a>

            <div className="absolute top-[-32px] sm:top-auto sm:bottom-[-32px] left-1/2 transform -translate-x-1/15 w-[80px] h-[80px] bg-[#FFE0E1] rounded-full text-[#E9004B] flex items-center justify-center hover-circle">
              <MapPinIcon className="w-10 h-10" strokeWidth={1} />
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div
          className={`w-full sm:pr-4 sm:w-[315px] h-[235px] flex flex-col items-center justify-center hover-parent  fade-up fade-delay-hadding ${
            isInView ? "in-view" : ""
          }`}
        >
          <div className="relative w-[235px] h-[235px] bg-[#FEF6F7] rounded-full flex items-center justify-center text-center">
            <a
              className="text-[18px] sm:text-[26px] px-3 w-fit hover-text"
              style={{
                fontFamily: "'Quicksand', sans-serif",
                fontWeight: 700,
              }}
            >
              Choose your Product
            </a>

            <div className="absolute top-[-32px] sm:top-[-32px] left-1/2 transform -translate-x-1/15 w-[80px] h-[80px] bg-[#FFE0E1] rounded-full text-[#E9004B] flex items-center justify-center hover-circle">
              <ClipboardDocumentListIcon
                className="w-10 h-10"
                strokeWidth={1}
              />
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div
          className={`w-full sm:w-[315px] h-[235px] flex flex-col items-center justify-center hover-parent  fade-up fade-delay-hadding ${
            isInView ? "in-view" : ""
          }`}
        >
          <div className="relative w-[235px] h-[235px] bg-[#FEF6F7] rounded-full flex items-center justify-center text-center">
            <a
              className="text-[18px] sm:text-[26px] px-3 w-fit hover-text"
              style={{
                fontFamily: "'Quicksand', sans-serif",
                fontWeight: 700,
              }}
            >
              Make your Order
            </a>

            <div className="absolute top-[-32px] sm:top-auto sm:bottom-[-32px] left-1/2 transform -translate-x-1/15 w-[80px] h-[80px] bg-[#FFE0E1] rounded-full text-[#E9004B] flex items-center justify-center hover-circle">
              <UtensilsCrossed className="w-10 h-10" strokeWidth={1} />
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div
          className={`w-full sm:w-[315px] sm:pl-5 h-[235px] flex flex-col items-center justify-center hover-parent  fade-up fade-delay-hadding ${
            isInView ? "in-view" : ""
          }`}
        >
          <div className="relative w-[235px] h-[235px] bg-[#FEF6F7] rounded-full flex items-center justify-center text-center">
            <a
              className="text-[18px] sm:text-[26px] px-3 w-fit hover-text"
              style={{
                fontFamily: "'Quicksand', sans-serif",
                fontWeight: 700,
              }}
            >
              Food is on the way
            </a>

            <div className="absolute top-[-32px] sm:top-[-32px] left-1/ transform -translate-x-1/15 w-[80px] h-[80px] bg-[#FFE0E1] rounded-full text-[#E9004B] flex items-center justify-center hover-circle">
              <Bike className="w-10 h-10" strokeWidth={1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Track;
