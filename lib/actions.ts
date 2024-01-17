"use server";

import { Resend } from "resend";
import { getErrorMessage, validateContactFormData } from "./utils";
import React from "react";
import ContactFormEmail from "@/email/ContactFormEmail";

export async function sendEmail(formData: FormData) {
  const email = formData.get("email");
  const message = formData.get("message");
  const resend = new Resend(process.env.RESEND_API_KEY);
  if (
    !validateContactFormData(email, 500) ||
    !validateContactFormData(message, 5000)
  ) {
    return { error: "Invalid email or message" };
  }
  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "marktuwen2020@gmail.com",
      subject: "New message from contact form",
      // text: message as string,
      reply_to: email as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        email: email as string,
      }),
    });
  } catch (error: unknown) {
    return getErrorMessage(error);
  }
};
