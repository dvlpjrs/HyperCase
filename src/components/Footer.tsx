import InstagramIcon from "~/../public/icon-instagram.svg";
import TwitterIcon from "~/../public/icon-x.svg";
import LinkedInIcon from "~/../public/icon-linkedin.svg";
import ArrowIcon from "~/../public/arrowPixelIcon.svg";
import Image from "next/image";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import HyperCaseLogo from "~/../public/HyperCaseLogo.svg";

export const Footer = () => (
  <footer className="rounded-[30px] bg-footerBg font-sfProDisplay text-background">
    <div className="flex flex-col justify-between gap-6 px-8 py-10 md:px-10 lg:flex-row lg:gap-12">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
        <div className="flex flex-col gap-2 text-lg leading-5">
          <div>General Inquiries</div>
          <div>hyper@case.edu</div>
        </div>
        <div className="hidden h-1/2 border-2 border-dashed border-footerDivider lg:visible" />

        <div className="hidden h-1/2 border-2 border-dashed border-footerDivider lg:visible" />
        <div className="flex gap-1">
          <Image
            src={InstagramIcon as StaticImport}
            alt="Instagram Icon"
            className="h-12 w-12 rounded-full border border-footerDivider p-1"
          />
          <Image
            src={TwitterIcon as StaticImport}
            alt="Instagram Icon"
            className="h-12 w-12 rounded-full border border-footerDivider p-1"
          />
          <Image
            src={LinkedInIcon as StaticImport}
            alt="Instagram Icon"
            className="h-12 w-12 rounded-full border border-footerDivider p-1"
          />
        </div>
      </div>
      <button className="flex gap-[6px] rounded-full border border-border bg-none px-9 py-[17px]">
        Contact Us <Image src={ArrowIcon as StaticImport} alt="" />
      </button>
    </div>
    <div className="w-full border border-footerDivider" />
    <div className="flex justify-between px-10 py-10">
      <div className="flex items-center gap-8">
        <Image src={HyperCaseLogo as StaticImport} alt="HyperCase Logo" />
      </div>
    </div>
  </footer>
);
