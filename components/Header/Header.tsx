import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Component } from "react";
import config from "../../data/config";

export default function Header() {
  return (
    <>
      <div className="min-h-screen flex flex-row">
        <div className="flex flex-col w-40">
          {/* <div className="flex items-center justify-center h-20" style={{ background: "white" }}> */}
            {/* <h1 className="text-3xl uppercase text-indigo-500">Logo</h1> */}
            {/* <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter "> */}
              {/* <Link href="/">
                <a className="hover:underline">boshd</a>
              </Link> */}
              .
            {/* </h2> */}
          {/* </div> */}
          <ul className="flex flex-col pt-12">
            {config.menuLinks.map((link) => (
              <Link key={link.name} href={link.link}>
                <a
                  // href=""
                  key={link.name}
                  target={'_blank'}
                  className="flex flex-row items-center h-6 transform transition-transform ease-in duration-25 text-gray-500 hover:text-gray-800"
                //   className="flex flex-row items-center h-6 transform hover:translate-x-2 transition-transform ease-in duration-25 text-gray-500 hover:text-gray-800"

                >
                  <span
                    className="inline-flex items-center justify-center h-4 w-12 text-lg text-gray-400"
                  >
                    <i className="bx bx-home"></i>
                  </span>
                  <span className="text-sm font-large">{link.name}</span>
                </a>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      {/* Desktop Navigation */}
    </>
  );
}
