import React from "react";
import Text from "./Text";
import Input from "./Input";
import FoodRider from "./FoodRider";
import ImageBlock from "./imageBlock";

function FirstBlock() {
  return (
    <div className="flex justify-center bg-main-block px-4 sm:py-6 py-12 overflow-hidden">
      <div className="flex flex-col-reverse lg:flex-row w-full max-w-[1344px] justify-between items-center gap-10 overflow-hidden">
        {/* Left: Text/Input/FoodRider */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8 overflow-hidden">
          <Text />
          <Input />
          <FoodRider />
        </div>

        {/* Right: ImageBlock (hidden on small screens) */}
        <div className="hidden lg:block w-full lg:w-1/2 overflow-hidden">
          <ImageBlock />
        </div>
      </div>
    </div>
  );
}

export default FirstBlock;
