'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts"

const monthlyData = [
  { category: "Electronics", sales: 4000, profit: 2400 },
  { category: "Clothing", sales: 3000, profit: 1398 },
  { category: "Books", sales: 2000, profit: 9800 },
  { category: "Home", sales: 2780, profit: 3908 },
  { category: "Sports", sales: 1890, profit: 4800 },
]

const weeklyData = [
  { category: "Electronics", sales: 1000, profit: 600 },
  { category: "Clothing", sales: 750, profit: 350 },
  { category: "Books", sales: 500, profit: 2450 },
  { category: "Home", sales: 695, profit: 977 },
  { category: "Sports", sales: 472, profit: 1200 },
]

const yearlyData = [
  { category: "Electronics", sales: 48000, profit: 28800 },
  { category: "Clothing", sales: 36000, profit: 16776 },
  { category: "Books", sales: 24000, profit: 117600 },
  { category: "Home", sales: 33360, profit: 46896 },
  { category: "Sports", sales: 22680, profit: 57600 },
]

export default function AnalyticsPage() {
  const [timeframe, setTimeframe] = useState('month')

  const data = timeframe === 'week' ? weeklyData : timeframe === 'year' ? yearlyData : monthlyData

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Analytics</h1>
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Sales and Profit by Category</CardTitle>
              <CardDescription>Analyze your business performance</CardDescription>
            </div>
            <Select value={timeframe} onValueChange={setTimeframe}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select timeframe" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week">Last Week</SelectItem>
                <SelectItem value="month">Last Month</SelectItem>
                <SelectItem value="year">Last Year</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data}>
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="#8884d8" name="Sales" />
              <Bar dataKey="profit" fill="#82ca9d" name="Profit" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}