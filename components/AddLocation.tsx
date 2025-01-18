'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { addLocation } from '@/app/actions'
import { useRouter } from 'next/navigation'

export default function AddLocation() {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [message, setMessage] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !address) {
      setMessage('Please fill in all fields')
      return
    }

    const result = await addLocation(name, address)
    setMessage(result.message)
    if (result.success) {
      setName('')
      setAddress('')
      router.refresh()
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add New Location</CardTitle>
        <CardDescription>Enter details for a new warehouse or storage location</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Location Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <Button type="submit">Add Location</Button>
        </form>
        {message && <p className="mt-4 text-sm text-muted-foreground">{message}</p>}
      </CardContent>
    </Card>
  )
}

