import Link from "next/link";
import React from "react";
import config from "../data/config";
import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
  return (
    <>
      <div className="min-h-screen flex flex-row">
        <div className="flex flex-col w-40">
          <ul className="flex flex-col pt-12">
            <div className="pl-9">
              <ThemeToggle />
            </div>
            <div className="mt-4">
            {config.menuLinks.map((link) => (
              <Link key={link.name} href={link.link}>
                <a
                  // href=""
                  key={link.name}
                  target={"_blank"}
                  className="flex flex-row items-center h-6 transform transition-transform ease-in duration-25 font-body text-gray-500 hover:text-gray-800"
                >
                  <span className="inline-flex items-center justify-center h-4 w-12 text-lg text-gray-400">
                    <i className="bx bx-home"></i>
                  </span>
                  <span className="text-sm font-large">{link.name}</span>
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
