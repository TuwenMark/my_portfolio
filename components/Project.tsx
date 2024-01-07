"use client";

import React, { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  // 将卡片的起始大小从0%改成80%，这样整个变化过程会短一点，更加自然
  const scrollProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  // 将卡片的起始不透明度从0%改成60%，这样初始就能看见卡片
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scrollProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8"
    >
      <article className="relative max-w-[42rem] overflow-hidden rounded-lg border border-black/5 bg-gray-100 transition last:mb-0 hover:bg-gray-200 group-even:pl-14 sm:h-[20rem] sm:pr-8">
        <div className="flex h-full flex-col px-5 pb-7 pt-4 group-even:ml-[18rem] sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
          <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
            {tags.map((tag) => (
              <li
                className="rounded-full bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white"
                key={tag}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute -right-40 top-8 w-[28.25rem] rounded-t-lg shadow-2xl group-even:-left-40 group-even:right-[initial] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04] group-even:group-hover:translate-x-3 group-even:group-hover:rotate-2"
        />
      </article>
    </motion.div>
  );
}
