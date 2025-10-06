"use client";
import dynamic from "next/dynamic";
import type { FC } from "react";

const HTMLFlipBook = dynamic(
  () => import("react-pageflip").then((mod) => mod.default as FC<any>), 
  { ssr: false }
);
export default function FlipBook() {
  return (
    <div className="flex overflow-hidden justify-center items-center min-h-screen bg-gradient-to-br from-[#fff8f0] via-[#fefcf8] to-[#f8efe7] p-4">
      <HTMLFlipBook
        width={280}
        height={400}
        size="stretch"
        minWidth={220}
        maxWidth={420}
        minHeight={320}
        maxHeight={600}
        drawShadow={false}
        flippingTime={900}
        className="rounded-sm"
  
      >
        {/* --- COVER PAGE --- */}
        <div className="flex justify-center items-center bg-gradient-to-br from-[#e3a35e] to-[#d1803a] text-white p-0 overflow-hidden">
          <img
            src="/CoverPhoto.png"
            alt="Teachers Day Cover"
            className="w-full h-full object-cover"
          />
        </div>

        {/* --- PAGE 1: MRS. AVILA --- */}
        <div className="relative bg-gradient-to-br from-[#fff5e7] to-[#f9e6cf] flex items-center justify-center text-center p-8 min-h-[400px]">
          <div className="flex flex-col items-center justify-center lg:mt-20">
            <h1 className="text-2xl font-bold text-[#b85c1d] mb-3">
              Happy Teacher’s Day!
            </h1>
            <h2 className="text-xl font-semibold text-[#b85c1d] mb-2">
              Mrs. Shinie Kie Avila
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-[240px] text-justify">
             Our very first college adviser and the heart of our programming journey.  
                Thank you, Ma’am Avila, for guiding us through every code, logic, and lesson  
                with patience and care. Your dedication doesn’t just build our skills  
                it builds our confidence to face every challenge ahead.
            </p>
          </div>
        </div>

        {/* --- PAGE 2: BLOCK A --- */}
        <div className="flex flex-col justify-between bg-gradient-to-br from-[#fff5e7] to-[#f9e6cf] p-6 h-full">
          <div className="text-center flex-1 flex flex-col justify-center">
            <h2 className="text-xl font-bold text-[#b85c1d] mb-2">
              Block A Message
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-[240px] mx-auto text-justify">
             Thank you for guiding us through every code and challenge, Ma’am
              Avila. Your patience and passion made programming meaningful for us all.
              <br />
              <span className="block mt-2 text-start">— From Block A </span>
            </p>
          </div>

          <div className="w-full mt-4">
            <img
              src="/blockA.jpg"
              alt="Block A Tribute"
              className="w-full max-h-40 sm:max-h-44 object-cover shadow-md border-t-4 border-[#e3b983]"
            />
          </div>
        </div>

        {/* --- PAGE 3: BLOCK B --- */}
        <div className="flex flex-col justify-between bg-gradient-to-br from-[#fff5e7] to-[#f9e6cf] p-6 h-full">
          <div className="text-center flex-1 flex flex-col justify-center">
            <h2 className="text-xl font-bold text-[#b85c1d] mb-2">
              Block B Message
            </h2>
           <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-[240px] mx-auto text-justify">
             Thank you for teaching us to think deeply and code with confidence, Ma’am Avila.  
             Your guidance turned every challenge into a step toward growth.
            <br />
                <span className="block mt-2 text-start">— With love, Block B</span>
            </p>
          </div>

          <div className="w-full mt-4">
            <img
              src="/blockB.jpg"
              alt="Block B Tribute"
              className="w-full max-h-40 sm:max-h-44 object-cover shadow-md border-t-4 border-[#e3b983]"
            />
          </div>
        </div>

 <div className="relative bg-gradient-to-br from-[#d1803a] to-[#b85c1d] text-white h-screen w-full flex justify-center items-center overflow-hidden">
  {/* Background GIF */}
  <img
    src="/ThankYou.gif"
    alt="Thank You"
    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
  />

</div>

      </HTMLFlipBook>
    </div>
  );
}
