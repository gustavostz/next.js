'use client'

import { cookies } from 'next/headers'

export default function Page() {
  // This should throw an error.
  cookies()

  return null
}