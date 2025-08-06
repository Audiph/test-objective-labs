import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"

import { Badge } from "@/common/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/common/components/ui/card"
import mockPriceData from "@/mockPriceData.json"

export function SectionCards() {
  const prices = mockPriceData.prices.map(p => p.price)
  const currentPrice = prices[prices.length - 1]
  const previousPrice = prices[prices.length - 2]
  const priceChange = ((currentPrice - previousPrice) / previousPrice) * 100
  const isUp = priceChange >= 0
  
  const highPrice = Math.max(...prices)
  const lowPrice = Math.min(...prices)
  const avgPrice = prices.reduce((a, b) => a + b, 0) / prices.length
  const volatility = ((highPrice - lowPrice) / avgPrice) * 100

  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Current Price</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            ${currentPrice.toFixed(2)}
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              {isUp ? <IconTrendingUp /> : <IconTrendingDown />}
              {priceChange >= 0 ? '+' : ''}{priceChange.toFixed(2)}%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            {isUp ? 'Trending up' : 'Trending down'} {isUp ? <IconTrendingUp className="size-4" /> : <IconTrendingDown className="size-4" />}
          </div>
          <div className="text-muted-foreground">
            Previous: ${previousPrice.toFixed(2)}
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>24h High</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            ${highPrice.toFixed(2)}
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              Peak
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Session high <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            {((highPrice - currentPrice) / currentPrice * 100).toFixed(2)}% above current
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>24h Low</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            ${lowPrice.toFixed(2)}
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingDown />
              Floor
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Session low <IconTrendingDown className="size-4" />
          </div>
          <div className="text-muted-foreground">
            {((currentPrice - lowPrice) / lowPrice * 100).toFixed(2)}% above floor
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Volatility</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {volatility.toFixed(2)}%
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              {volatility > 5 ? <IconTrendingUp /> : <IconTrendingDown />}
              {volatility > 5 ? 'High' : 'Low'}
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Price range variance {volatility > 5 ? <IconTrendingUp className="size-4" /> : <IconTrendingDown className="size-4" />}
          </div>
          <div className="text-muted-foreground">Avg: ${avgPrice.toFixed(2)}</div>
        </CardFooter>
      </Card>
    </div>
  )
}