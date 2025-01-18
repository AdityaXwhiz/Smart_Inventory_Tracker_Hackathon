import React from 'react'
import { AlertTriangle, ArrowDownIcon, ArrowUpIcon, Package } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar'

// This interface defines the structure of a stock alert item
interface StockAlertItem {
  id: number
  name: string
  status: 'refill' | 'remove'
  quantity: number
}

// This would typically come from your backend or state management system
const fetchStockAlerts = (): StockAlertItem[] => [
  { id: 1, name: 'Widget A', status: 'refill', quantity: 50 },
  { id: 2, name: 'Gadget B', status: 'remove', quantity: 100 },
  { id: 3, name: 'Tool C', status: 'refill', quantity: 25 },
  { id: 4, name: 'Device D', status: 'remove', quantity: 75 },
]

export function StockAlerts() {
  const [stockAlerts, setStockAlerts] = React.useState<StockAlertItem[]>([])

  React.useEffect(() => {
    // In a real application, you might want to fetch this data from an API
    const alerts = fetchStockAlerts()
    setStockAlerts(alerts)
  }, [])

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Stock Alerts</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {stockAlerts.map((item) => (
            <SidebarMenuItem key={item.id}>
              <SidebarMenuButton className="justify-between">
                <span className="flex items-center">
                  <Package className="mr-2 h-4 w-4" />
                  {item.name}
                </span>
                <Badge 
                  variant={item.status === 'refill' ? 'destructive' : 'secondary'}
                  className="ml-auto"
                >
                  {item.status === 'refill' ? (
                    <ArrowUpIcon className="mr-1 h-3 w-3" />
                  ) : (
                    <ArrowDownIcon className="mr-1 h-3 w-3" />
                  )}
                  {item.quantity}
                </Badge>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

