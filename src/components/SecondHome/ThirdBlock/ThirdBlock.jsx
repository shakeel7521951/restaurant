import "../styles/animation.css";
import AppDetail from "./AppDetail";
import ClientAbout from "./ClientAbout";
import MenuCard from "./MenuCard";

function ThirdBlock() {
  return (
    <div className="w-full overflow-hidden">
      <div className="bg-[#f9f4f4] overflow-hidden">
        <div className="bg-[#f9f4f4] overflow-hidden">
          <MenuCard />
        </div>
        <div className="w-full bg-[#f9f4f4] overflow-hidden">
          <ClientAbout />
        </div>
      </div>
      <div className="bg-[#E9004B] overflow-hidden">
        <AppDetail />
      </div>
    </div>
  );
}

export default ThirdBlock;
