"use client";

import { sendEmail } from "@/lib/actions";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Submit from "./Submit";
import toast from "react-hot-toast";

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
      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (!data && error) {
            console.log(error)
            toast.error("Internal error, please try again later");
          } else {
            console.log(data);
            toast.success("Email sent successfully");
          }
        }}
      >
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
        <Submit />
      </form>
    </motion.section>
  );
}
