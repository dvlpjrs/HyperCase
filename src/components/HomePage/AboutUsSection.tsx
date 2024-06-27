import Image from "next/image";
import team from "~/../public/landing/team.jpg";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";

export const AboutUsSection = () => (
  <section className="flex flex-col rounded-[30px] border-2 border-border lg:flex-row">
    <div className="min-h-full w-full whitespace-nowrap border-b-2 border-r-0 border-border px-8 py-7 font-sfProDisplay text-2xl tracking-normal md:pb-16 md:pr-64 lg:w-2/5 lg:border-b-0 lg:border-r-2 lg:pl-[58px]">
      About Us
    </div>
    <div className="p-8 pb-11 pt-7 text-xl  tracking-tight text-secondary md:pb-16 lg:mx-[42px]">
      HyperCase is a student-led incubator aimed at solving healthcare
      challenges through inter-professional and interdisciplinary collaboration.
      We bring together student doctors, engineers, entrepreneurs, scientists,
      lawyers, and all professionals in training who are passionate about making
      a difference in healthcare. We seek solutions that make medical devices
      better, therapeutics cheaper, healthcare more accessible, and shape the
      future of medicine. We also strive to promote a culture of innovation both
      on and beyond the campus of Case Western Reserve University by helping
      participants develop problem-solving and collaborative mindsets with
      concrete real-world outcomes.
      <div className="mt-[50px] flex justify-center">
        <Image
          src={team as StaticImport}
          alt="Team"
          className="h-auto w-full max-w-[958px] rounded-[20px]"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
    </div>
  </section>
);
