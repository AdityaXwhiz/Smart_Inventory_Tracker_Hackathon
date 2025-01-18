'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { addStock, removeStock } from '@/app/actions'
import { useRouter } from 'next/navigation'

export default function StockManagement() {
  const [itemName, setItemName] = useState('')
  const [quantity, setQuantity] = useState('')
  const [message, setMessage] = useState('')
  const router = useRouter()

  const handleStock = async (action: 'add' | 'remove') => {
    if (!itemName || !quantity) {
      setMessage('Please fill in all fields')
      return
    }

    const result = action === 'add' 
      ? await addStock(itemName, parseInt(quantity))
      : await removeStock(itemName, parseInt(quantity))

    setMessage(result.message)
    if (result.success) {
      setItemName('')
      setQuantity('')
      router.refresh()
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Manage Stock</CardTitle>
        <CardDescription>Add or remove stock from inventory</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="itemName">Item Name</Label>
            <Input
              id="itemName"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="quantity">Quantity</Label>
            <Input
              id="quantity"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
          </div>
          <div className="flex space-x-2">
            <Button type="button" onClick={() => handleStock('add')}>Add Stock</Button>
            <Button type="button" onClick={() => handleStock('remove')} variant="outline">Remove Stock</Button>
          </div>
        </form>
        {message && <p className="mt-4 text-sm text-muted-foreground">{message}</p>}
      </CardContent>
    </Card>
  )
}

