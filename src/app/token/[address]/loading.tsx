import { Skeleton } from '@/common/components/ui/skeleton';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/common/components/ui/card';

export default function Loading() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
            <Card className="@container/card">
              <CardHeader>
                <CardDescription>
                  <Skeleton className="h-4 w-24" />
                </CardDescription>
                <CardTitle className="text-2xl font-semibold @[250px]/card:text-3xl">
                  <Skeleton className="h-8 w-32" />
                </CardTitle>
                <div className="col-start-2 row-span-2 row-start-1 self-start justify-self-end">
                  <Skeleton className="h-6 w-20" />
                </div>
              </CardHeader>
              <CardFooter className="flex-col items-start gap-1.5 text-sm">
                <div className="line-clamp-1 flex gap-2 font-medium">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-4" />
                </div>
                <div className="text-muted-foreground">
                  <Skeleton className="h-4 w-28" />
                </div>
              </CardFooter>
            </Card>
            <Card className="@container/card">
              <CardHeader>
                <CardDescription>
                  <Skeleton className="h-4 w-16" />
                </CardDescription>
                <CardTitle className="text-2xl font-semibold @[250px]/card:text-3xl">
                  <Skeleton className="h-8 w-32" />
                </CardTitle>
                <div className="col-start-2 row-span-2 row-start-1 self-start justify-self-end">
                  <Skeleton className="h-6 w-16" />
                </div>
              </CardHeader>
              <CardFooter className="flex-col items-start gap-1.5 text-sm">
                <div className="line-clamp-1 flex gap-2 font-medium">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-4 w-4" />
                </div>
                <div className="text-muted-foreground">
                  <Skeleton className="h-4 w-32" />
                </div>
              </CardFooter>
            </Card>
            <Card className="@container/card">
              <CardHeader>
                <CardDescription>
                  <Skeleton className="h-4 w-16" />
                </CardDescription>
                <CardTitle className="text-2xl font-semibold @[250px]/card:text-3xl">
                  <Skeleton className="h-8 w-32" />
                </CardTitle>
                <div className="col-start-2 row-span-2 row-start-1 self-start justify-self-end">
                  <Skeleton className="h-6 w-16" />
                </div>
              </CardHeader>
              <CardFooter className="flex-col items-start gap-1.5 text-sm">
                <div className="line-clamp-1 flex gap-2 font-medium">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-4 w-4" />
                </div>
                <div className="text-muted-foreground">
                  <Skeleton className="h-4 w-28" />
                </div>
              </CardFooter>
            </Card>
            <Card className="@container/card">
              <CardHeader>
                <CardDescription>
                  <Skeleton className="h-4 w-20" />
                </CardDescription>
                <CardTitle className="text-2xl font-semibold @[250px]/card:text-3xl">
                  <Skeleton className="h-8 w-24" />
                </CardTitle>
                <div className="col-start-2 row-span-2 row-start-1 self-start justify-self-end">
                  <Skeleton className="h-6 w-16" />
                </div>
              </CardHeader>
              <CardFooter className="flex-col items-start gap-1.5 text-sm">
                <div className="line-clamp-1 flex gap-2 font-medium">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-4 w-4" />
                </div>
                <div className="text-muted-foreground">
                  <Skeleton className="h-4 w-24" />
                </div>
              </CardFooter>
            </Card>
          </div>
          <div className="px-4 lg:px-6">
            <Card className="@container/card">
              <CardHeader>
                <CardTitle>
                  <Skeleton className="h-6 w-32" />
                </CardTitle>
                <CardDescription>
                  <span className="hidden @[540px]/card:block">
                    <Skeleton className="h-4 w-28" />
                  </span>
                  <span className="@[540px]/card:hidden">
                    <Skeleton className="h-4 w-20" />
                  </span>
                </CardDescription>
                <div className="col-start-2 row-span-2 row-start-1 self-start justify-self-end">
                  <div className="hidden @[767px]/card:flex gap-1">
                    <Skeleton className="h-8 w-20" />
                    <Skeleton className="h-8 w-16" />
                    <Skeleton className="h-8 w-16" />
                  </div>
                  <div className="@[767px]/card:hidden">
                    <Skeleton className="h-8 w-40" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
                <Skeleton className="aspect-auto h-[250px] w-full" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
