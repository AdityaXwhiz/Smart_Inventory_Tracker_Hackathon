'use client'

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const data = [
  { name: 'Maggie', stock: 120 },
  { name: 'Milk', stock: 80 },
  { name: 'Paneer', stock: 150 },
  { name: 'Olive oil', stock: 90 },
  { name: 'Chocolate', stock: 110 },
]

export default function InventoryChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Inventory Levels</CardTitle>
        <CardDescription>Current stock levels for top items</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="stock" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

