"use client"

import { useState } from "react"
import { TrendingUp } from "lucide-react"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"
import { Pagination } from "@/components/ui/pagination"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData1 = [
  { month: "Arrays & Strings", desktop: 186, mobile: 80 },
  { month: "Stacks & Queues", desktop: 305, mobile: 200 },
  { month: "Linked Lists", desktop: 237, mobile: 120 },
  { month: "Trees", desktop: 73, mobile: 190 },
  { month: "Hash Tables", desktop: 209, mobile: 130 },
  { month: "Graphs", desktop: 214, mobile: 140 },
]

const chartData2 = [
  { month: "Two Pointers", desktop: 150, mobile: 90 },
  { month: "Binary Search", desktop: 220, mobile: 180 },
  { month: "Dynamic Programming", desktop: 300, mobile: 160 },
  { month: "Greedy", desktop: 250, mobile: 140 },
  { month: "Backtracking", desktop: 200, mobile: 120 },
  { month: "DFS/BFS", desktop: 180, mobile: 100 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function RadarChartCard() {
  const [currentPage, setCurrentPage] = useState(1)

  const chartData = currentPage === 1 ? chartData1 : chartData2

  return (
    <Card>
      <CardHeader className="items-center pb-4">
        <CardTitle>Proficiency Chart</CardTitle>
        <CardDescription>
          Based on problems you've solved in the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-w-[250px]"
        >
          <RadarChart
            data={chartData}
            margin={{
              top: -40,
              bottom: -10,
            }}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <PolarAngleAxis dataKey="month" />
            <PolarGrid />
            <Radar
              dataKey="desktop"
              fill="var(--color-desktop)"
              fillOpacity={0.6}
            />
            <Radar dataKey="mobile" fill="var(--color-mobile)" />
            <ChartLegend className="mt-8" content={<ChartLegendContent />} />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 pt-4 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="flex items-center gap-2 leading-none text-muted-foreground">
          January - June 2024
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={2}
          onPageChange={setCurrentPage}
          className="mt-4"
        />
      </CardFooter>
    </Card>
  )
}