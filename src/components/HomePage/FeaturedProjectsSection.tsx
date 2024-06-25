import Image from "next/image";

const projects = [
  {
    title: "Project 1",
    subtitle: "Fugiat fugiat eiusmod dolor. Et mollit nostrud aliqua sint",
    description:
      "Fugiat fugiat eiusmod dolor. Et mollit nostrud aliqua sint incididunt ullamco aliquip. Proident nostrud reprehenderit ut dolor proident quis fugiat et consectetur veniam magna incididunt mollit. Deserunt Lorem Lorem do. Nulla consectetur sunt aute do tempor anim ex.",
    image: "",
  },
];

export const FeaturedProjectsSection = () => (
  <section className="rounded-[30px] border-2 border-border font-sfProDisplay">
    <div className="flex items-center justify-between border-b-2 border-border p-8 py-5 pr-[37px] text-2xl font-normal tracking-tight md:pb-16 lg:pl-[58px]">
      Featured Projects
      <button className="whitespace-nowrap rounded-full border-2 border-border px-5 py-[7px] text-lg lg:px-[34px] lg:text-2xl">
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
          />
          <div className="flex max-w-[761px] flex-col gap-y-5">
            <h2 className="text-2xl font-bold leading-7 tracking-wide">
              {project.title}
            </h2>
            <div className="text-base font-normal leading-5">
              {project.subtitle}
            </div>
            <div className="text-base font-normal leading-5">
              {project.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);
