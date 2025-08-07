import "../styles/animation.css";
import { useInView } from "../hooks/useInView";

export default function Text() {
  const [ref, isInView] = useInView();
  return (
    <div
      ref={ref}
      className="w-full sm:w-[650px] sm:text-left text-center mx-auto px-4"
    >
      <div
        className={`w-full sm:w-[650px] animate-tilt-scale ${
          isInView ? "in-view" : ""
        }`}
      >
        <div
          className="text-[#E9004B] text-[14px] tracking-widest"
          style={{
            fontFamily: "'Quicksand', sans-serif",
            fontWeight: 700,
          }}
        >
          EASY WAY TO ORDER YOUR FOOD
        </div>
      </div>

      <div
        className={`w-full sm:w-[650px] mt-3 animate-tilt-scale ${
          isInView ? "in-view" : ""
        }`}
      >
        <h1
          className="text-[24px] sm:text-[36px] mt-0 ml-0 text-[#02060C] font-semibold leading-tight break-words"
          style={{
            fontFamily: "'Quicksand', sans-serif",
            fontWeight: 700,
          }}
        >
          Online Ordering System for Restaurants
        </h1>
      </div>
    </div>
  );
}
