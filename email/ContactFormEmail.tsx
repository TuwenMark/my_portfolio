import { Body, Container, Head, Heading, Hr, Html, Preview, Section, Tailwind, Text } from '@react-email/components'
import React from 'react'

export default function ContactFormEmail({message, email}: Readonly<{
  message: string;
  email: string;
}>) {
  return (
    <Html>
      <Head />
      <Preview>Email From Your Portfolio Site</Preview>
      <Tailwind>
        <Body className='"bg-gray-100 text-black"'>
          <Container>
            <Section className="borderBlack my-10 rounded-md bg-white px-10 py-4">
              <Heading className="leading-tight">
                You have received the following message from Contact Form
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The sender's email is: {email}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
