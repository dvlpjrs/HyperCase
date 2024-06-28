import { HeroSection } from "../../components/HeroSection";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import HeroImage from "~/../public/HyperCase Circle Icon OnWhite.png";

const HyperNetwork = () => {
  return (
    <div className="min-h-screen w-screen bg-background px-8 xl:px-24">
      <Header />
      <main className="flex w-full flex-col gap-[58px]">
        <HeroSection
          title={
            <>
              Connect with
              <br />
              HyperCase Alumni
            </>
          }
          image={HeroImage}
          className="bg-decorativeTertiary"
          subTitle="Coming Soon!"
        />
        <Footer />
        <div />
      </main>
    </div>
  );
};

export default HyperNetwork;
