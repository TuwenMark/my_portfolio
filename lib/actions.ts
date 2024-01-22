"use server";

import { Resend } from "resend";
import React from "react";
import { z } from "zod";
import { getErrorMessage, validateContactFormData } from "./utils";
import ContactFormEmail from "@/email/ContactFormEmail";

export async function sendEmail(formData: FormData) {
  const FormSchema = z.object({
    email: z
      .string()
      .email({
        message: "Invalid email address",
      })
      .max(50),
    message: z
      .string({
        required_error: "Message is required",
      })
      .max(500),
  });
  const validatedFields = FormSchema.safeParse({
    email: formData.get("email"),
    message: formData.get("message"),
  });
  if (!validatedFields.success) {
    return {
      error: validatedFields.error.message,
    };
  }
  const { email, message } = validatedFields.data;
  const resend = new Resend(process.env.RESEND_API_KEY);
  let data;
  try {
    data = await resend.emails.send({
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
    return { error: getErrorMessage(error) };
  }
  return { data };
}
