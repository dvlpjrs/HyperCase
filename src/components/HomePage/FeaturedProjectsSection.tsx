import Image from "next/image";

const projects = [
  {
    title: "Ergonixx",
    subtitle: "Ergonomic augment for the endoscope",
    description:
      "The project focuses on addressing the ergonomic challenges faced by endoscopists, who often suffer from musculoskeletal pain and have to modify techniques due to endoscope design limitations. The innovative solution, Ergonixx Rings, is designed to be easily manipulated by a wide range of hand sizes, from the smallest 5% of females to the largest 95% of males, and aims to reduce hand strain while being quick to assemble. The target market is substantial, with a Total Addressable Market (TAM) of $32.3 billion and a fast-growing sector. The team comprises experienced professionals in medicine, engineering, and business, with a clear go-to-market strategy laid out from 2024 to 2026.",
    image: "/landing/project-featured.jpg",
  },
];

export const FeaturedProjectsSection = () => (
  <section className="rounded-[30px] border-2 border-border font-sfProDisplay">
    <div className="flex items-center justify-between border-b-2 border-border p-8 py-5 pr-[37px] text-2xl font-normal tracking-tight  lg:pl-[58px]">
      Featured Projects
      <button className="whitespace-nowrap rounded-full border-2 border-border px-5 py-[7px] text-lg lg:px-[20px] lg:text-xl">
        View All
      </button>
    </div>
    <div className="pb-8 pt-10">
      {projects.map((project) => (
        <div
          key={project.title}
          className="flex flex-col gap-5 p-8 py-5 pr-[37px] md:pb-16 lg:flex-row lg:gap-16 lg:pl-[58px] xl:gap-[108px]"
        >
          <Image
            src={project.image}
            alt={project.title}
            className="h-[200px] w-[200px] rounded-[20px] bg-imageBg lg:h-[400px] lg:min-w-[400px]"
            width={200}
            height={200}
          />
          <div className="flex max-w-[761px] flex-col gap-y-1">
            <h2 className="text-2xl font-bold tracking-normal">
              {project.title}
            </h2>
            <div className="text-xl font-bold text-secondary">
              {project.subtitle}
            </div>
            <div className="pt-4 text-xl text-secondary">
              {project.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);
