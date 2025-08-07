import React from "react";
import { useInView } from "../hooks/useInView";

function ImageBlock() {
  const [ref, isInView] = useInView();
  return (
    <div
      ref={ref}
      className={`flex justify-self-start animate-diagonal-in ${
        isInView ? "in-view" : ""
      }`}
    >
      <img
        className="object-cover pt-10 w-[595px] flex justify-self-start  h-[581] mr-12"
        src="https://www.radiustheme.com/demo/wordpress/themes/foodymat/wp-content/uploads/2024/11/h2-img1.png"
        alt=""
      />
    </div>
  );
}

export default ImageBlock;
