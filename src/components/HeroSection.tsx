import Image from "next/image";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import type { ReactNode } from "react";

interface HeroSectionProps {
  title: ReactNode | ReactNode[];
  className?: string;
  image: StaticImport;
  subTitle: string;
}

export const HeroSection = ({
  className,
  title,
  image,
  subTitle,
}: HeroSectionProps) => (
  <section
    className={`relative flex flex-col-reverse justify-between rounded-[30px] p-8 px-8 pt-[120px] font-sfProDisplay md:pb-16 lg:flex-row lg:pb-[155px] xl:px-[60px] ${className}`}
  >
    <div className="mt-[71px] text-lg text-black">
      <div className="flex gap-3 text-foreground">A Multidisciplinary Club</div>
      <h2 className="text-3xl font-bold tracking-wide md:text-6xl lg:text-[80px] lg:leading-[93px]">
        {title}
      </h2>
      <h4 className="mt-2 text-xl tracking-[-0.03rem] xl:text-4xl">
        {subTitle}
      </h4>
    </div>
    <div className="w-[200px] md:w-[400px] xl:min-w-[601px]">
      <Image src={image} alt="Hero Image" className="mr-16 w-full" />
    </div>
  </section>
);
