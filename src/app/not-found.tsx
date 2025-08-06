import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/common/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="relative w-full h-16 mx-auto">
          <Image src="/logo.svg" alt="Objective Labs" fill className="object-contain" priority />
        </div>
        <div className="space-y-4">
          <h1 className="text-7xl font-bold text-primary">404</h1>
          <h2 className="text-3xl font-semibold text-foreground">Page not found</h2>
          <p className="text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="default" size="lg">
            <Link href="/">Go back home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
