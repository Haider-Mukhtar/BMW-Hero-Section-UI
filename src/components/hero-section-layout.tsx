import { type ReactNode } from "react";

import BGImage from "../assets/img/bmw-background.jpg";

type HeroSectionLayoutProps = {
  children?: ReactNode;
};

const HeroSectionLayout = ({ children }: HeroSectionLayoutProps) => {
  return (
    <div>
      <div className='relative'>
        <img
          src={BGImage}
          alt='BMW Background'
          className='object-cover h-screen w-full'
        />
        <div className='absolute inset-0 grid grid-cols-2'>
          <div className='flex flex-row'>
            {[...Array(20)].map((_, idx) => (
              <div key={idx} className="h-screen w-12 shadow-[inset_-12px_-8px_40px_#e7000b50] border-r-1 border-red-600/40 backdrop-blur-sm flex items-center justify-center" />              
            ))}
          </div>
          <div />
        </div>
        <div className='absolute inset-0 bg-green-20 px-16'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default HeroSectionLayout;