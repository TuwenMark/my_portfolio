"use client";

import { motion } from "framer-motion";
import React from "react";
import { links } from "@/lib/data";
import Link from "next/link";

export default function Header() {
  return (
    <header className="relative z-[999]">
      <motion.div
        className="fixed left-1/2 top-0 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.05rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className="top-[0.15rem] sm:top-[1.7rem] sm:h-[initial] fixed left-1/2 flex h-12 -translate-x-1/2 py-2 sm:py-0">
        <ul className="w-[22rem] text-[0.9rem] sm:w-[initial] flex flex-wrap items-center justify-center gap-y-1 font-medium text-gray-500 sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="flex h-3/4 items-center justify-center"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className="hover:text-gray-950 flex w-full items-center justify-center px-3 py-3 transition"
                href={link.hash}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
