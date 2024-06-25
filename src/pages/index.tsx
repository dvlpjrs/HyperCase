import Head from "next/head";
import { HeroSection } from "../components/HeroSection";
import { AboutUsSection } from "../components/HomePage/AboutUsSection";
import { FeaturedProjectsSection } from "../components/HomePage/FeaturedProjectsSection";
import { CurrentBoardSection } from "../components/HomePage/CurrentBoardSection";
import { FAQSection } from "../components/HomePage/FAQSection";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import HeroImage from "~/../public/hero.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>HyperCase</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className="min-h-screen w-screen bg-background px-8 xl:px-24">
        <Header />
        <main className="flex w-full flex-col gap-[58px]">
          <HeroSection
            title={
              <>
                Welcome
                <br /> to HyperCase
              </>
            }
            image={HeroImage}
            className="bg-decorative"
          />
          <AboutUsSection />
          <FeaturedProjectsSection />
          <CurrentBoardSection />
          <FAQSection />
          <Footer />
          <div />
        </main>
      </div>
    </>
  );
}
