'use client'
import Image from "next/image"
import { IMAGES } from "@/assets";
import React, { useEffect, useState } from "react";



function TopLeftImage() {


const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1600) {
        setIsHidden(true); // hide after 200px
      } else {
        setIsHidden(false); // show again if scrolled up
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



console.log(isHidden)
  return (
    <div>
            {/* Background image */}
      <Image
        src={IMAGES.layoutBg}
        alt="Background"
        className={`${isHidden ? "hidden" : "" } -top-18 -left-20 md:top-0 md:left-0 w-[286px] md:w-[356px] animate-wiggleSpin10s origin-top-left object-cover z-0 fixed`}
      />
    </div>
  )
}

export default TopLeftImage