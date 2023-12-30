import Link from "next/link";
import React from "react";
import config from "../data/config";
import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
  return (
    <>
      <div className="w-full flex flex-row items mx-auto">
        <div className="flex flex-col w-full mx-auto">
          <ul className="flex flex-row w-fit m-auto h-fit my-auto">
            <div className="pr-4">
              <ThemeToggle />
            </div>
            <div className="flex space-x-4 my-auto mx-auto w-fit">
            {config.menuLinks.map((link) => (
              <Link key={link.name} href={link.link}>
                <a
                  // href=""
                  key={link.name}
                  target={"_blank"}
                  className="flex flex-row w-fit col-span-1 text-center items-center h-6 transform transition-transform ease-in duration-25 place-items-center font-body text-gray-500 hover:text-gray-800"
                >
                  {/* <span className="inline-flex items-center justify-center h-4 w-12 text-lg text-gray-400">
                    <i className="bx bx-home"></i>
                  </span> */}
                  <span className="flex w-full items-center mx-auto text-sm text-center font-large">{link.name}</span>
                </a>
              </Link>
            ))}
            </div>
          </ul>
        </div>
      </div>
      {/* Desktop Navigation */}
    </>
  );
}
