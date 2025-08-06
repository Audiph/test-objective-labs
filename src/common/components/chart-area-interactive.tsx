'use client'

import * as React from 'react'
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts'
import {
  TIMESTAMP_TO_MS_MULTIPLIER,
  CHART_Y_AXIS_PADDING_RATIO,
  CHART_FILTER_LAST_THREE,
  CHART_FILTER_LAST_FIVE,
} from '@/common/constants'

import { useIsMobile } from '@/common/hooks'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  ToggleGroup,
  ToggleGroupItem,
} from '@/common/components/ui'
import type { ChartAreaInteractiveProps } from '@/common/models/components'

export const description = 'An interactive price chart'

const chartConfig = {
  price: {
    label: 'Price',
    color: 'var(--primary)',
  },
} satisfies ChartConfig

export function ChartAreaInteractive({ token, priceData }: ChartAreaInteractiveProps = {}) {
  const isMobile = useIsMobile()
  const [timeRange, setTimeRange] = React.useState('all')

  React.useEffect(() => {
    if (isMobile) {
      setTimeRange('all')
    }
  }, [isMobile])

  const chartData = React.useMemo(() => {
    // Use passed priceData or fall back to empty array for backwards compatibility
    const prices = priceData || []
    return prices.map((item, index) => ({
      date: new Date(item.timestamp * TIMESTAMP_TO_MS_MULTIPLIER).toISOString(),
      price: item.price,
      index: index,
    }))
  }, [priceData])

  const filteredData = React.useMemo(() => {
    if (timeRange === 'all') {
      return chartData
    }

    const dataPoints =
      timeRange === '3'
        ? CHART_FILTER_LAST_THREE
        : timeRange === '5'
          ? CHART_FILTER_LAST_FIVE
          : chartData.length
    return chartData.slice(-dataPoints)
  }, [chartData, timeRange])

  const minPrice = Math.min(...filteredData.map((d) => d.price))
  const maxPrice = Math.max(...filteredData.map((d) => d.price))
  const priceRange = maxPrice - minPrice
  const yAxisDomain = [
    minPrice - priceRange * CHART_Y_AXIS_PADDING_RATIO,
    maxPrice + priceRange * CHART_Y_AXIS_PADDING_RATIO,
  ]

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>{token ? `${token.symbol} Price History` : 'Price History'}</CardTitle>
        <CardDescription>
          <span className="hidden @[540px]/card:block">Historical price data</span>
          <span className="@[540px]/card:hidden">Price data</span>
        </CardDescription>
        <CardAction>
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="hidden *:data-[slot=toggle-group-item]:!px-4 @[767px]/card:flex"
          >
            <ToggleGroupItem value="all">All data</ToggleGroupItem>
            <ToggleGroupItem value="5">Last 5</ToggleGroupItem>
            <ToggleGroupItem value="3">Last 3</ToggleGroupItem>
          </ToggleGroup>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="flex w-40 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate @[767px]/card:hidden"
              size="sm"
              aria-label="Select a value"
            >
              <SelectValue placeholder="All data" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="all" className="rounded-lg">
                All data
              </SelectItem>
              <SelectItem value="5" className="rounded-lg">
                Last 5
              </SelectItem>
              <SelectItem value="3" className="rounded-lg">
                Last 3
              </SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer config={chartConfig} className="aspect-auto h-[250px] w-full">
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-price)" stopOpacity={1.0} />
                <stop offset="95%" stopColor="var(--color-price)" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="index"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => {
                const item = filteredData[value]
                if (!item) return ''
                const date = new Date(item.date)
                return date.toLocaleTimeString('en-US', {
                  hour: '2-digit',
                  minute: '2-digit',
                })
              }}
            />
            <YAxis
              domain={yAxisDomain}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => `$${value.toFixed(0)}`}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    const item = filteredData.find((d) => d.index === value)
                    if (!item) return ''
                    return new Date(item.date).toLocaleString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })
                  }}
                  formatter={(value) => `$${Number(value).toFixed(2)}`}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="price"
              type="monotone"
              fill="url(#fillPrice)"
              stroke="var(--color-price)"
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
