import { HeroSection } from "../../components/HeroSection";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import HeroImage from "~/../public/heroLight.png";
import { ApplySection } from "~/components/Chapters/ApplySection";

const StartABranch = () => {
  return (
    <div className="min-h-screen w-screen bg-background px-8 xl:px-24">
      <Header />
      <main className="flex w-full flex-col gap-[58px]">
        <HeroSection
          title={
            <>
              Start a branch
              <br />
              At you college
            </>
          }
          image={HeroImage}
          className="bg-decorativeSecondary"
          subTitle="Join the HyperCase Club"
        />
        <ApplySection />
        <Footer />
        <div />
      </main>
    </div>
  );
};

export default StartABranch;