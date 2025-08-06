'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/common/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="relative w-full h-16 mx-auto">
          <Image src="/logo.svg" alt="Objective Labs" fill className="object-contain" priority />
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Something went wrong!</h1>
          <p className="text-muted-foreground">
            An unexpected error has occurred. Please try again or contact support if the problem
            persists.
          </p>
          {error.digest && (
            <p className="text-xs text-muted-foreground font-mono">Error ID: {error.digest}</p>
          )}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => reset()} variant="default" size="lg">
            Try again
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/">Go home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
