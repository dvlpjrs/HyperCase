import { Question } from "./Question";

const faqData = [
  {
    question: "Can I create a branch of HyperCase at my school?",
    answer:
      "Absolutely! We have many of the resources necessary to help accelerate the development of your incubator. Send us an email from the “contact us” page and we can discuss possible opportunities.",
  },
  {
    question: "What is the typical timeline for projects?",
    answer:
      "Our Hyper Projects run for 1 academic year. If your project is successful, you may continue with your team, and we will continue to provide the tools necessary for the growth of your start up. We are currently developing the year 2 curriculum!",
  },
  {
    question:
      "Can you provide examples of projects HyperCase has incubated that were successful?",
    answer:
      "Absolutely. We have had a total of 9 project teams come through our program, and they have raised over $15,000. Those teams have won numerous pitch competitions and several have continued for multiple years and are filing for incorporation.",
  },
  {
    question: "How can I be involved?",
    answer:
      "Applications to be a project lead open in late July. Applications to be a project member open in early August. Both are ways to be involved.",
  },
  {
    question: " I already have a project idea, can I still join?",
    answer:
      "Absolutely! We highly encourage this. Please apply to be a project lead in late July and include your pitch deck if you have one.",
  },
];

export const FAQSection = () => (
  <section className="flex w-full flex-col rounded-[30px] border-2 border-border font-sfProDisplay lg:flex-row">
    <div className="min-h-full w-full border-b-2 border-r-0 border-border px-8 py-7 text-2xl tracking-tight md:px-16 lg:w-1/2 lg:border-b-0 lg:border-r-2 lg:pl-[58px]">
      Frequently Asked Questions
    </div>
    <div className="min-h-fit w-full lg:w-1/2">
      {faqData.map(({ question, answer }, idx) => (
        <Question key={idx} question={question} answer={answer} />
      ))}
    </div>
  </section>
);
