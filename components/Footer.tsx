import React from 'react'

export default function Footer() {
  return (
    <footer className='mb-10 p-4 text-center text-gray-500 text-xs dark:text-white/50'>
      <small className='mb-2 block'>
        &copy;2030 Winter. All rights reserved.
      </small>
      <p>
        <span className='font-semibold'>About this website:</span> built with React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  )
}
