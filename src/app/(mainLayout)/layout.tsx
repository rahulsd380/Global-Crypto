import { IMAGES } from "@/assets";
import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import Image from "next/image";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SmoothScroll>
    <div className="relative bg-secondary-10 min-h-screen overflow-hidden">
      {/* Background image */}
      <Image
        src={IMAGES.layoutBg}
        alt="Background"
        className="-top-18 -left-20 md:top-0 md:left-0 w-[286px] md:w-[356px] object-cover z-0 fixed"
      />

      {/* Content above the background */}
      <div className="relative z-10">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
      </SmoothScroll>
  );
};

export default MainLayout;
