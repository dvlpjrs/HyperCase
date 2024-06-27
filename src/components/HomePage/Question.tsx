import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useState } from "react";
import ArrowIcon from "~/../public/arrowIcon.svg";

interface QuestionProps {
  question: string;
  answer: string;
}

export const Question = ({ question, answer }: QuestionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative flex min-h-fit cursor-pointer flex-col border-b-2 border-border px-7 py-[42px]"
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <div className="relative">
        <div className="w-9/12 font-sfProDisplay text-xl">{question}</div>
        <Image
          src={ArrowIcon as StaticImport}
          alt=""
          className={`absolute right-7 top-1/2 -translate-y-1/2 transition-all duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </div>
      {isOpen && (
        <div className="min-h-fit pt-4 font-sfProRounded text-lg text-secondary">
          {answer}
        </div>
      )}
    </div>
  );
};
