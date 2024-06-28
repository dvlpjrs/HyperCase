import Image from "next/image";
import LinkedinIcon from "~/../public/icon-linkedin.svg";
import InstagramIcon from "~/../public/icon-instagram.svg";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";

const persons = [
  {
    name: "Kayla Klatt",
    position: "President",
    img: "/landing/board/President - Kayla Klatt.jpg",
    linkedin: "",
    instagram: "",
  },
  {
    name: "Andrew Qi",
    position: "President",
    img: "/landing/board/President - Andrew Qi.jpg",
    linkedin: "",
    instagram: "",
  },
  {
    name: "Oscar Ose",
    position: "Executive Management",
    img: "/landing/board/Executive Management - Oscar Ose.jpg",
    linkedin: "",
    instagram: "",
  },
  {
    name: "Heather Simons",
    position: "Strategy",
    img: "/landing/board/Heather Simons - VP of Strategy.jpg",
    linkedin: "",
    instagram: "",
  },
  {
    name: "Sajan Patel",
    position: "Curriculum",
    img: "/landing/board/Curriculum - Sajan Patel.jpg",
    linkedin: "",
    instagram: "",
  },
  {
    name: "Joshua Bruce",
    position: "Curriculum",
    img: "/landing/board/Curriculum Officer_Joshua Bruce.jpg",
    linkedin: "",
    instagram: "",
  },
  {
    name: "Salsabeel Salem",
    position: "Marketing",
    img: "/landing/board/VP of Marketing_ Salsabeel Salem.jpg",
    linkedin: "",
    instagram: "",
  },
  {
    name: "Jordan Su",
    position: "Outreach",
    img: "/landing/board/Outreach - Jordan Su.jpg",
    linkedin: "",
    instagram: "",
  },
  {
    name: "Tanya Singh",
    position: "Outreach",
    img: "/landing/board/Outreach - Tanya Singh.jpg",
    linkedin: "",
    instagram: "",
  },
  {
    name: "Olivia Asimakis",
    position: "Faculty and Stakeholder",
    img: "/landing/board/VP of Faculty and Stakeholder - Olivia Asimakis.jpg",
    linkedin: "",
    instagram: "",
  },
  {
    name: "Sai Charmitha Yelampalli",
    position: "Faculty and Stakeholder",
    img: "/icon-user.png",
    linkedin: "",
    instagram: "",
  },
  {
    name: "Jyoti Ranjan Swain",
    position: "Technology",
    img: "/landing/board/Technology Officer - Jyoti Ranjan Swain.jpg",
    linkedin: "",
    instagram: "",
  },
  {
    name: "Atharva Gupta",
    position: "Technology",
    img: "/landing/board/Technology Officer - Atharva Gupta.jpg",
    linkedin: "",
    instagram: "",
  },
  {
    name: "Dev Gupta",
    position: "Finance",
    img: "/landing/board/VP of Finance - Dev Gupta.jpeg",
    linkedin: "",
    instagram: "",
  },
  {
    name: "Ridaa Ali",
    position: "Finance",
    img: "/icon-user.png",
    linkedin: "",
    instagram: "",
  },
];

export const CurrentBoardSection = () => (
  <section className="overflow-hidden rounded-[30px] border-2 border-border font-sfProDisplay">
    <div className="flex items-center justify-between border-b-2 border-border px-8 py-6 pr-[37px] text-2xl font-normal tracking-tight md:px-16 lg:pl-[52px]">
      Current Board
    </div>
    <div className="grid grid-cols-1 gap-[2px] bg-border lg:grid-cols-2 xl:grid-cols-3">
      {persons.map((el, idx) => (
        <div
          key={idx}
          className="group relative flex w-full flex-col items-center bg-background py-[52px] transition-all duration-300 hover:bg-hover"
        >
          <Image
            src={el.img}
            alt={el.name}
            className="mb-6 h-[100px] w-[100px] rounded-full bg-imageBg"
            width={100}
            height={100}
          ></Image>
          <h2 className="mb-2 text-xl font-bold  tracking-wide">{el.name}</h2>
          <div className="text-xl font-normal leading-5 text-secondaryForeground">
            {el.position}
          </div>
          {/* <div className="absolute right-[37px] top-[52px] opacity-0 transition-all duration-300 group-hover:opacity-100">
            <Image src={LinkedinIcon as StaticImport} alt="Linkedin" />
            <Image src={InstagramIcon as StaticImport} alt="Instagram" />
          </div> */}
        </div>
      ))}
    </div>
  </section>
);
