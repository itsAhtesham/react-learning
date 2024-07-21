import React from "react";
import IMAGES from "../Images/Images";

function Logo({ width = "100px" }) {
  return (
    <div>
      <img src={IMAGES.Logo} alt={"Logo"} className="rounded-full" width={width} />
    </div>
  );
}

export default Logo;
