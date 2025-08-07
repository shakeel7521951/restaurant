import CarouselOne from "./CarouselOne";
import Deals from "./Deals";
import MegaDeal from "./MegaDeal";
import Track from "./Track";
import "../styles/animation.css";

function SecondBlock() {
  return (
    <div>
      <div className="overflow-hidden">
        <CarouselOne />
      </div>

      <div className="w-full max-w-[1344px] mx-auto mt-0 pt-[90px] bg-track overflow-hidden">
        <Track />
      </div>

      <div className="w-full max-w-[1344px] mx-auto mt-0 pt-[90px] overflow-hidden">
        <Deals />
      </div>

      <div className="bg-[#E9004B] bg-mega-deal overflow-hidden">
        <div className="w-full max-w-[1344px] mx-auto pt-[25px] pb-[25px] overflow-hidden">
          <MegaDeal />
        </div>
      </div>
    </div>
  );
}

export default SecondBlock;
