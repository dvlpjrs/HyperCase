const phases = [
  {
    name: "Phase 1: Needs Assessment",
    description:
      "Literature search to establish the clinical background. Refine the clinical problem. Perform root cause analysis on the presented clinical problem. Understand the Stakeholders involved. Write a Needs Statement. Establish Needs Criteria. Understand the competitive landscape. Validate the need through stakeholder interviews. Understand the market value of a solution to this need.",
  },
  {
    name: "Phase 2: Ideation",
    description:
      "Continue Phase 1: Needs Assessment and revise Phase 1 deliverables. Perform literature search on competitive landscape. Brainstorm many solution concepts that specifically address the clinical need. Evaluate solution concepts (feasibility, efficacy, regulatory pathway, competitors, risks). Elicit feedback from advisors and stakeholders. Iterate process and narrow down to a top solution concept.",
  },
  {
    name: "Phase 3: Development and Prototyping",
    description:
      "Continue Phase 1: Needs Assessment and revise Phase 1 deliverables. Continue Phase 2: Ideation and revise/add-to Phase 2 deliverables. Refine top solution concept. Create prototyping and testing plan. Decide necessary materials and equipment. Manufacture 'works-like' and/or 'looks-like' prototypes. Evaluate efficacy of prototype. Iterate on designs for improvement. Consult stakeholders on key design requirements.",
  },
  {
    name: "Phase 4: Verification and Validation",
    description:
      "Continue Phase 1: Needs Assessment and revise Phase 1 deliverables. Continue Phase 2: Ideation and revise/add-to Phase 2 deliverables. Continue Phase 3: Solution Development and Prototyping and add-to Phase 3  deliverables. Improve prototype. Understand regulatory pathway and requirements. Design Verification and Validation tests. Verification: prototype meets the design requirements and needs criteria set by the team. Validation: prototype meets the expectations of stakeholders and addresses the clinical problem. Prove the efficacy of the design. Utilize the scientific method.",
  },
];

export const PhasesSection = () => (
  <section className="flex flex-col rounded-[30px] border-2 border-border">
    <div className="flex items-center justify-between border-b-2 border-border px-8 py-6 pr-[37px] text-2xl font-normal tracking-tight md:px-16 lg:pl-[52px]">
      Four phases to innovation
    </div>
    {phases.map((phase, index) => (
      <div
        key={index}
        className={`grid w-full grid-cols-1 lg:grid-cols-[2fr_3fr] ${index !== phases.length - 1 ? "border-b-2" : ""} border-border`}
      >
        <div className="min-h-full w-full px-8 py-7 font-sfProDisplay text-2xl tracking-normal md:pb-16 lg:border-r-2 lg:pl-[58px]">
          {phase.name}
        </div>
        <div className="p-8 pb-11 pt-7 text-xl tracking-tight text-secondary md:pb-16 lg:ml-[42px]">
          {phase.description}
        </div>
      </div>
    ))}
  </section>
);
