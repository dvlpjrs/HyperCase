import { HeroSection } from "../../components/HeroSection";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import HeroImage from "~/../public/heroPink.svg";

const HyperDatabase = () => {
  return (
    <div className="min-h-screen w-screen bg-background px-8 xl:px-24">
      <Header />
      <main className="flex w-full flex-col gap-[58px]">
        <HeroSection
          title={
            <>
              Explore All Projects
              <br />
              At HyperCase
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

export default HyperDatabase;
