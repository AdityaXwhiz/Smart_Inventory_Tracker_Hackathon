import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts"

const data = [
  { month: "Jan", actual: 400, predicted: 420 },
  { month: "Feb", actual: 300, predicted: 350 },
  { month: "Mar", actual: 200, predicted: 220 },
  { month: "Apr", actual: 278, predicted: 290 },
  { month: "May", actual: 189, predicted: 200 },
  { month: "Jun", actual: 239, predicted: 250 },
]

export default function PredictionsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Future Predictions</h1>
      <Card>
        <CardHeader>
          <CardTitle>Stock Usage Predictions</CardTitle>
          <CardDescription>Actual vs Predicted stock usage for the next 6 months</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="actual" stroke="#8884d8" name="Actual" />
              <Line type="monotone" dataKey="predicted" stroke="#82ca9d" name="Predicted" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}

