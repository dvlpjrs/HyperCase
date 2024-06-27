import InstagramIcon from "~/../public/icon-instagram.svg";
import XIcon from "~/../public/icon-x.svg";
import LinkedInIcon from "~/../public/icon-linkedin.svg";
import CaseIcon from "~/../public/icon-case.svg";
import ArrowIcon from "~/../public/arrowPixelIcon.svg";
import Image from "next/image";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import HyperCaseLogo from "~/../public/HyperCaseLogo.svg";
import Link from "next/link";

export const Footer = () => (
  <footer className="rounded-[30px] bg-footerBg font-sfProDisplay text-background">
    <div className="flex flex-col justify-between gap-6 px-8 py-10 md:px-10 lg:flex-row lg:gap-12">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
        <div className="flex flex-col gap-2 text-lg">
          <div>General Inquiries</div>
          <div>hyper@case.edu</div>
        </div>
        <div className="hidden h-1/2 border-2 border-dashed border-footerDivider lg:visible" />

        <div className="hidden h-1/2 border-2 border-dashed border-footerDivider lg:visible" />
        <div className="flex gap-1">
          <Link href="https://www.instagram.com/hypercase_cwru" target="_blank">
            <Image
              src={InstagramIcon as StaticImport}
              alt="Instagram Icon"
              className="h-12 w-12 rounded-full border border-footerDivider p-1"
            />
          </Link>
          <Link href="https://twitter.com/HyperCase_CWRU" target="_blank">
            <Image
              src={XIcon as StaticImport}
              alt="X Icon"
              className="h-12 w-12 rounded-full border border-footerDivider p-1"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/company/hypercase-cwru"
            target="_blank"
          >
            <Image
              src={LinkedInIcon as StaticImport}
              alt="LinkedIn Icon"
              className="h-12 w-12 rounded-full border border-footerDivider p-1"
            />
          </Link>
        </div>
      </div>
      <Link href="mailto:hyper@case.edu">
        <button className="flex gap-[6px] rounded-full border border-border bg-none px-9 py-[17px]">
          Contact Us <Image src={ArrowIcon as StaticImport} alt="" />
        </button>
      </Link>
    </div>
    <div className="w-full border border-footerDivider" />
    <div className="flex justify-between px-10 py-10">
      <div className="flex items-center gap-8">
        <Image
          src={HyperCaseLogo as StaticImport}
          alt="HyperCase Logo"
          height={50}
        />
      </div>
      <div className="flex items-center gap-8">
        <Image
          src={CaseIcon as StaticImport}
          alt="Case Western Reserve University Logo"
          height={35}
        />
      </div>
    </div>
  </footer>
);
