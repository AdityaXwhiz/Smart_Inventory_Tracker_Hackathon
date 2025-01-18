'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

// Mock data for real-time updates
const initialData = [
  { id: 1, name: 'Item A', quantity: 100, lastUpdated: new Date().toISOString() },
  { id: 2, name: 'Item B', quantity: 75, lastUpdated: new Date().toISOString() },
  { id: 3, name: 'Item C', quantity: 50, lastUpdated: new Date().toISOString() },
]

export default function RealtimeUpdates() {
  const [items, setItems] = useState(initialData)

  useEffect(() => {
    const interval = setInterval(() => {
      setItems(prevItems =>
        prevItems.map(item => ({
          ...item,
          quantity: Math.max(0, item.quantity + Math.floor(Math.random() * 11) - 5),
          lastUpdated: new Date().toISOString()
        }))
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Real-time Inventory Updates</CardTitle>
        <CardDescription>Live updates of inventory changes</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Item Name</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Last Updated</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map(item => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>{new Date(item.lastUpdated).toLocaleTimeString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

