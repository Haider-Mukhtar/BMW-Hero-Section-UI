import { ArrowRight, Facebook, Instagram, Snapchat } from "iconsax-react";
import RaceTrackPattern from "./ui/race-track-pattern";

const HeroSection = () => {
  return (
    <div className="min-h-screen pt-32 sm:pt-48 md:pt-60 lg:pt-72 pb-10 sm:pb-12 md:pb-16 lg:pb-20 flex flex-col justify-between">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-0">
        <div className="text-center md:text-left">
          <p className="text-white text-4xl sm:text-5xl lg:text-7xl font-semibold">
            THE HEART OF JOY - REDEFINING DRIVING PLEASURE
          </p>
          <div className="flex flex-row gap-1 items-center p-3 sm:p-4 bg-blue-700 justify-self-start mt-6 md:mt-10 rounded-xl mx-auto md:mx-0 w-fit">
            <p className="text-white text-lg sm:text-xl lg:text-2xl">Read More</p>
            <ArrowRight
              size="24"
              color="#FFFFFF"
              className="rotate-45 sm:size-28 lg:size-32"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center md:items-end mt-8 md:mt-0">
          <Facebook
            size="28"
            color="#FFFFFF"
            variant="Bold"
            className="sm:size-32 lg:size-36"
          />
          <Instagram
            size="28"
            color="#FFFFFF"
            variant="Bold"
            className="sm:size-32 lg:size-36"
          />
          <Snapchat
            size="28"
            color="#FFFFFF"
            variant="Bold"
            className="sm:size-32 lg:size-36"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 mt-12 md:mt-0 items-center">
        <div className="mx-auto md:mx-0">
          <RaceTrackPattern />
        </div>
        <p className="text-white text-center md:text-right text-sm sm:text-base">
          Changing Lanes is the official podcast from BMW. In these audio series, we take you with us on new journeys through the BMW universe. Find out more about sustainability, innovation, technology, mobility and the latest trends. You can find and subscribe to Changing Lanes on all major podcast platforms, so tune in!
        </p>
      </div>
    </div>
  );
};

export default HeroSection;