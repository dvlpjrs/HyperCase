import Image from "next/image";
import team from "~/../public/landing/team.jpg";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";

export const AboutUsSection = () => (
  <section className="flex flex-col rounded-[30px] border-2 border-border lg:flex-row">
    <div className="min-h-full w-full whitespace-nowrap border-b-2 border-r-0 border-border px-8 py-7 font-sfProDisplay text-2xl tracking-tight md:pb-16 md:pr-64 lg:w-2/5 lg:border-b-0 lg:border-r-2 lg:pl-[58px]">
      About Us
    </div>
    <div className="p-8 pb-11 pt-7 leading-5 tracking-tight md:pb-16 lg:mx-[42px]">
      Fugiat fugiat eiusmod dolor. Et mollit nostrud aliqua sint incididunt
      ullamco aliquip. Proident nostrud reprehenderit ut dolor proident quis
      fugiat et consectetur veniam magna incididunt mollit. Deserunt Lorem Lorem
      do. Nulla consectetur sunt aute do tempor anim ex.
      <Image
        src={team as StaticImport}
        alt=""
        className="mt-[50px] h-[525px] max-w-[958px] rounded-[20px] bg-imageBg"
        width={958}
        height={525}
        style={{ objectFit: "fill" }}
      />
    </div>
  </section>
);
