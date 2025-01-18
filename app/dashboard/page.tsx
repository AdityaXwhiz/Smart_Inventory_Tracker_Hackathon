import InventoryChart from '@/components/InventoryChart'
import RealtimeUpdates from '@/components/RealtimeUpdates'

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid gap-8">
        <InventoryChart />
        <RealtimeUpdates />
      </div>
    </div>
  )
}

