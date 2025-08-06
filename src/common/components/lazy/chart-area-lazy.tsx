'use client'

import dynamic from 'next/dynamic'
import {
  Skeleton,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/common/components/ui'

export const ChartAreaInteractive = dynamic(
  () => import('@/common/components').then((mod) => mod.ChartAreaInteractive),
  {
    loading: () => <ChartLoadingSkeleton />,
    ssr: false,
  }
)

function ChartLoadingSkeleton() {
  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>
          <Skeleton className="h-5 w-32" />
        </CardTitle>
        <CardDescription className="grid grid-cols-2 gap-1">
          <span className="flex items-baseline gap-1 text-2xl leading-none font-bold tabular-nums">
            <Skeleton className="h-8 w-24" />
            <span className="text-muted-foreground text-sm font-normal">
              <Skeleton className="h-4 w-12" />
            </span>
          </span>
        </CardDescription>
        <div className="col-start-2 row-span-2 row-start-1 self-start justify-self-end">
          <div className="hidden gap-1 @[767px]/card:flex">
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
  )
}
