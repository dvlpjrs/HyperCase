import { Question } from "./Question";

const faqData = [
  {
    question: "What is the typical timeline for projects?",
    answer: "Testing Testing",
  },
  {
    question: "How do you measure the success of a project?",
    answer: "",
  },
  {
    question: "Can you provide examples of successful campaigns or projects?",
    answer: "",
  }
];

export const FAQSection = () => (
  <section className="flex w-full flex-col rounded-[30px] border-2 border-border font-sfProDisplay lg:flex-row">
    <div className="min-h-full w-full border-b-2 border-r-0 border-border px-8 py-7 text-2xl tracking-tight md:px-16 lg:w-1/2 lg:border-b-0 lg:border-r-2 lg:pl-[58px]">
      Frequently Asked Questions
    </div>
    <div className="min-h-fit w-full lg:w-1/2">
      {faqData.map(({ question, answer }, idx) => (
        <Question
          key={idx}
          question={question}
          answer={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
        />
      ))}
    </div>
  </section>
);
