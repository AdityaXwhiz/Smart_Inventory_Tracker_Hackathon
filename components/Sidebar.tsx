'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { BarChart3, Settings, Package, MapPin, Plus, TrendingUp, PieChartIcon as ChartPie, LineChart } from 'lucide-react'

const sidebarItems = [
  { name: 'Dashboard', href: '/dashboard', icon: BarChart3 },
  { name: 'Add/Remove Stock', href: '/dashboard/stock', icon: Package },
  { name: 'Add Locations', href: '/dashboard/locations', icon: MapPin },
  { name: 'Add Items', href: '/dashboard/items', icon: Plus },
  { name: 'Most Selling Stock', href: '/dashboard/most-selling', icon: TrendingUp },
  { name: 'Future Predictions', href: '/dashboard/predictions', icon: LineChart },
  { name: 'Stock Alerts', href: '/dashboard/alerts', icon : Package},
  { name: 'Analytics', href: '/dashboard/analytics', icon: ChartPie },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="pb-12 w-64 bg-background text-foreground border-r border-border">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Inventory Tracker</h2>
          <div className="space-y-1">
            {sidebarItems.map((item) => (
              <Button
                key={item.name}
                variant={pathname === item.href ? 'secondary' : 'ghost'}
                className="w-full justify-start"
                asChild
              >
                <Link href={item.href}>
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.name}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 left-4">
        <Button variant="ghost" className="w-full justify-start" asChild>
          <Link href="/dashboard/settings">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Link>
        </Button>
      </div>
    </div>
  )
}

