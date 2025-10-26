// TrailerSection.jsx
import React, { useState } from "react";
import { dummyTrailers } from "../assets/assets";
import BlurCircle from "./BlurCircle";
import { PlayCircleIcon } from "lucide-react";

const TrailerSection = () => {
  // Remove the second trailer by filtering it out
  const filteredTrailers = dummyTrailers.filter((_, index) => index !== 1);

  const [currentTrailer, setCurrentTrailer] = useState(filteredTrailers[0]);

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden bg-black text-red-500">
      {/* Section Title */}
      <div className="max-w-[960px]">
  <p className="text-red-1000 font-big text-xl text-left">
    Trailers
  </p>
</div>


      {/* Main Player */}
      <div className="relative mt-6">
        <BlurCircle top="-100px" right="-100px" />
        <iframe
          width="100%"
          height="540px"
          src={currentTrailer.videoUrl}
          title="YouTube trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-xl"
        ></iframe>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8 mt-8 max-w-3xl mx-auto">
        {filteredTrailers.map((trailer) => (
          <div
            key={trailer.image}
            onClick={() => setCurrentTrailer(trailer)}
            className="relative cursor-pointer rounded-lg overflow-hidden transition duration-300 hover:scale-105"
          >
            <img
              src={trailer.image}
              alt="trailer"
              className={`w-full h-32 sm:h-40 md:h-48 object-cover rounded-lg brightness-75 hover:brightness-100`}
            />
            <PlayCircleIcon
              strokeWidth={1.6}
              className="absolute top-1/2 left-1/2 w-8 md:w-12 h-8 md:h-12 text-red-500 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrailerSection;
