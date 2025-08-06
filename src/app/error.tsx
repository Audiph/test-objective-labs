'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/common/components/ui'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md space-y-8 text-center">
        <div className="relative mx-auto h-16 w-full">
          <Image src="/logo.svg" alt="Objective Labs" fill className="object-contain" priority />
        </div>
        <div className="space-y-4">
          <h1 className="text-foreground text-4xl font-bold">Something went wrong!</h1>
          <p className="text-muted-foreground">
            An unexpected error has occurred. Please try again or contact support if the problem
            persists.
          </p>
          {error.digest && (
            <p className="text-muted-foreground font-mono text-xs">Error ID: {error.digest}</p>
          )}
        </div>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button onClick={() => reset()} variant="default" size="lg">
            Try again
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/">Go home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
