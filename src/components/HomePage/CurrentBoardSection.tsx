import Image from "next/image";
import LinkedinIcon from "~/../public/icon-linkedin.svg";
import InstagramIcon from "~/../public/icon-instagram.svg";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";

const persons = [
  {
    name: "Name Name",
    position: "Position",
    img: "",
    linkedin: "",
    instagram: "",
  },
  {
    name: "Name Name",
    position: "Position",
    img: "",
    linkedin: "",
    instagram: "",
  },
  {
    name: "Name Name",
    position: "Position",
    img: "",
    linkedin: "",
    instagram: "",
  },
  {
    name: "Name Name",
    position: "Position",
    img: "",
    linkedin: "",
    instagram: "",
  },
  {
    name: "Name Name",
    position: "Position",
    img: "",
    linkedin: "",
    instagram: "",
  },
  {
    name: "Name Name",
    position: "Position",
    img: "",
    linkedin: "",
    instagram: "",
  },
];

export const CurrentBoardSection = () => (
  <section className="overflow-hidden rounded-[30px] border-2 border-border font-sfProDisplay">
    <div className="flex items-center justify-between border-b-2 border-border py-6 px-8 md:px-16 lg:pl-[52px] pr-[37px] text-2xl font-normal tracking-tight">
      Current Board
      <button className="rounded-full border-2 border-border px-5 lg:px-[34px] py-[7px] whitespace-nowrap text-lg lg:text-2xl">
        About Us
      </button>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[2px] bg-border">
      {persons.map((el, idx) => (
        <div
          key={idx}
          className="hover:bg-hover group relative flex w-full flex-col items-center bg-background py-[52px] transition-all duration-300"
        >
          <Image
            src={el.img}
            alt={el.name}
            className="mb-6 h-[150px] w-[150px] rounded-full bg-imageBg"
          ></Image>
          <h2 className="mb-2 text-2xl font-bold leading-7 tracking-wide">
            {el.name}
          </h2>
          <div className="text-secondaryForeground text-2xl font-normal leading-5">
            {el.position}
          </div>
          <div className="absolute right-[37px] top-[52px] opacity-0 transition-all duration-300 group-hover:opacity-100">
            <Image src={LinkedinIcon as StaticImport} alt="Linkedin" />
            <Image src={InstagramIcon as StaticImport} alt="Instagram" />
          </div>
        </div>
      ))}
    </div>
  </section>
);
