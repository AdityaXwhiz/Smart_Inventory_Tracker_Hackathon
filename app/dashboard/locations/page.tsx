import AddLocation from '@/components/AddLocation'
import { getLocations } from '@/app/actions'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

export default async function LocationsPage() {
  const locations = await getLocations()

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Manage Locations</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <AddLocation />
        <Card>
          <CardHeader>
            <CardTitle>Current Locations</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Address</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {locations.map((location) => (
                  <TableRow key={location.name}>
                    <TableCell>{location.name}</TableCell>
                    <TableCell>{location.address}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

