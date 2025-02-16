import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import Gallery from "@/components/Gallery";
import MusicPlayer from "@/components/MusicPlayer";
import CTA from "@/components/CTA";


export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <Gallery />
        <CTA />
        <MusicPlayer />
      </main>
    </>

  );
}
