import HeroSection from "@/components/hero-section";
import HeroSectionLayout from "@/components/hero-section-layout";
import Navbar from "@/components/navbar";


const Home = () => {
  return (
    <>
      <HeroSectionLayout>
        <Navbar />
        <HeroSection />
      </HeroSectionLayout> 
    </>
  );
};

export default Home;
