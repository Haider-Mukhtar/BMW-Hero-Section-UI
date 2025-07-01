import { ArrowRight, Facebook, Instagram, Snapchat } from "iconsax-react";
import RaceTrackPattern from "./ui/race-track-pattern";

const HeroSection = () => {
  return (
    <div className="h-screen pt-72 pb-20 flex flex-col justify-between">
      <div className="grid grid-cols-2 items-center">
        <div>
          <p className="text-white text-7xl font-semibold">
            THE HEART OF JOY - REDEFINING DRIVING PLEASURE
          </p>
          <div className="flex flex-row gap-1 items-center p-4 bg-blue-700 justify-self-start mt-10 rounded-xl">
            <p className="text-white text-2xl">Read More</p>
            <ArrowRight size="32" color="#FFFFFF" className="rotate-45" />
          </div>
        </div>
        <div className="flex flex-col gap-4 items-end">
          <Facebook size="36" color="#FFFFFF" variant="Bold" />
          <Instagram size="36" color="#FFFFFF" variant="Bold" />
          <Snapchat size="36" color="#FFFFFF" variant="Bold" />
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div>
          <RaceTrackPattern />
        </div>
        <p className="text-white text-right">
          Changing Lanes is the official podcast from BMW. In these audio series, we take you with us on new journeys through the BMW universe. Find out more about sustainability, innovation, technology, mobility and the latest trends. You can find and subscribe to Changing Lanes on all major podcast platforms, so tune in!
        </p>
      </div>
    </div>
  );
};

export default HeroSection;