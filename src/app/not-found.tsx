import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/common/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md space-y-8 text-center">
        <div className="relative mx-auto h-16 w-full">
          <Image src="/logo.svg" alt="Objective Labs" fill className="object-contain" priority />
        </div>
        <div className="space-y-4">
          <h1 className="text-primary text-7xl font-bold">404</h1>
          <h2 className="text-foreground text-3xl font-semibold">Page not found</h2>
          <p className="text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button asChild variant="default" size="lg">
            <Link href="/">Go back home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
