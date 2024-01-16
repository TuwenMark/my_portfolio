"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/lib/actions";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-28 w-[min(100%,38rem)] scroll-mt-28 text-center sm:mb-40"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p>
        please contact me directly at{" "}
        <a className="underline" href="mailto:marktuwen2020@gmail.com">
          marktuwen2020@gmail.com
        </a>{" "}
        or through this form
      </p>
      <form className="mt-10 flex flex-col" action={sendEmail}>
        <input
          name="email"
          type="email"
          className="borderBlack h-14 rounded-lg px-4 outline-none"
          placeholder="Your email"
          required
          maxLength={500}
        />
        <textarea
          name="message"
          className="borderBlack my-3 h-52 resize-none rounded-lg p-4 outline-none"
          placeholder="Your message"
          required
          maxLength={500}
        />
        <button
          type="submit"
          className="group flex h-[3rem] w-[8rem] items-center justify-center gap-2 rounded-full bg-gray-900 text-white outline-none transition-all hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105"
        >
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />
        </button>
      </form>
    </motion.section>
  );
}
