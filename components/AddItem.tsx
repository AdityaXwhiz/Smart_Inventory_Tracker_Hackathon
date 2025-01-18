'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { addItem } from '@/app/actions'
import { useRouter } from 'next/navigation'

export default function AddItem() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [initialStock, setInitialStock] = useState('')
  const [message, setMessage] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !description || !initialStock) {
      setMessage('Please fill in all fields')
      return
    }

    const result = await addItem(name, description, parseInt(initialStock))
    setMessage(result.message)
    if (result.success) {
      setName('')
      setDescription('')
      setInitialStock('')
      router.refresh()
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add New Item</CardTitle>
        <CardDescription>Enter details for a new inventory item</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Item Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="initialStock">Initial Stock</Label>
            <Input
              id="initialStock"
              type="number"
              value={initialStock}
              onChange={(e) => setInitialStock(e.target.value)}
              required
            />
          </div>
          <Button type="submit">Add Item</Button>
        </form>
        {message && <p className="mt-4 text-sm text-muted-foreground">{message}</p>}
      </CardContent>
    </Card>
  )
}