"use client";

import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsDownload, BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const {setActiveSection, setTimeOfLastClick} = useActiveSectionContext();
  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] scroll-mt-[100rem] text-center sm:mb-0"
    >
      {/* 头像部分 */}
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="/portrait.png"
              alt="Winter Portrait"
              width="192"
              height="192"
              quality={95}
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      {/* 介绍部分 */}
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m Ricardo.</span> I&apos;m a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">8 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>
      {/* 按钮部分 */}
      <motion.div
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white outline-none transition hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here <BsArrowRight className="opacity-70" />
        </Link>
        <a
          className="borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-white px-7 py-3 outline-none transition hover:scale-110 focus:scale-110 active:scale-105 dark:bg-white/10 dark:hover:text-white/100"
          href="/CV.pdf"
          download
        >
          Download CV <BsDownload />
        </a>
        <a
          className="borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-white p-4 text-gray-700 hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60 dark:hover:text-white/100"
          href="https://www.linkedin.com"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-white p-4 text-gray-700 hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60 dark:hover:text-white/100"
          href="https://github.com/TuwenMark"
          target="_blank"
        >
          <FaGithub />
        </a>
      </motion.div>
    </section>
  );
}
