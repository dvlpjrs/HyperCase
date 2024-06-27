import { useEffect, useState } from "react";
import Image from "next/image";
import HyperCaseLogo from "~/../public/HyperCaseLogo.svg";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import { useRouter } from "next/router";

const pages = [
  "Home",
  "HyperDatabase",
  "Events",
  "HyperNetwork",
  "Start a Branch",
] as const;

export const Header = () => {
  const [currentPage, setCurrentPage] = useState<(typeof pages)[number]>();

  const [isOpened, setIsOpened] = useState(false);

  const router = useRouter();

  useEffect(() => {
    switch (router.pathname) {
      case "/":
        setCurrentPage("Home");
        break;
      case "/start-a-branch":
        setCurrentPage("Start a Branch");
        break;
      default:
        break;
    }
  }, [router]);

  const changePage = (newPage: (typeof pages)[number]) => {
    switch (newPage) {
      case "Home":
        void router.push("/");
        break;
      case "Start a Branch":
        void router.push("/start-a-branch");
        break;
      default:
        break;
    }
  };

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between gap-12 bg-background pb-2 pt-[18px] font-sfProRounded">
      <h1 className="z-20 min-w-[203px]">
        <Image
          src={HyperCaseLogo as StaticImport}
          alt="HyperCase Logo"
          className="w-full"
        />
      </h1>
      <nav className="absolute left-1/2 hidden w-1/2 -translate-x-1/2 items-center justify-between gap-5 xl:flex">
        {pages.map((page) => (
          <button
            key={page}
            className="relative w-fit min-w-[90px] whitespace-nowrap"
            onClick={() => {
              changePage(page);
            }}
          >
            {page}
            {page === currentPage && (
              <div className="absolute -bottom-[18px] left-0 h-1 w-full rounded-full bg-black" />
            )}
          </button>
        ))}
      </nav>
      <button className="hidden rounded-full bg-secondary px-8 py-2 text-xl text-background xl:block">
        Login
      </button>
      <button
        className="z-20 flex h-5 w-7 flex-col justify-between xl:hidden"
        onClick={() => setIsOpened(!isOpened)}
      >
        <div
          className={`h-1 w-full origin-left rounded-full bg-black transition-all duration-300 ${isOpened ? "rotate-[35deg]" : ""}`}
        />
        <div
          className={`h-1 w-full rounded-full bg-black transition-all duration-300 ${isOpened ? "opacity-0" : "opacity-100"}`}
        />
        <div
          className={`h-1 w-full origin-left rounded-full bg-black transition-all duration-300 ${isOpened ? "-rotate-[35deg]" : ""}`}
        />
      </button>
      <div
        className={`visible fixed left-0 top-0 h-fit w-screen backdrop-blur-md transition-all duration-300 xl:hidden ${isOpened ? "" : "-translate-y-full"}`}
      >
        <nav className="flex flex-col items-start justify-between gap-5 px-16 py-24">
          {pages.map((page) => (
            <button
              key={page}
              className="relative w-fit whitespace-nowrap"
              onClick={() => {
                changePage(page);
              }}
            >
              {page}
            </button>
          ))}
          <button className="rounded-full bg-secondary px-8 py-2 text-xl text-background">
            Login
          </button>
        </nav>
      </div>
    </header>
  );
};
