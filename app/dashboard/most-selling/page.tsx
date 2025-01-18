"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  { name: "Maggie", sales: 400 },
  { name: "Paneer", sales: 300 },
  { name: "Milk", sales: 200 },
  { name: "Chocolate", sales: 150 },
  { name: "Olive oil", sales: 100 },
];

export default function MostSellingPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Most Selling Stock</h1>
      <Card>
        <CardHeader>
          <CardTitle>Top 5 Selling Products</CardTitle>
          <CardDescription>Based on sales volume in the last 30 days</CardDescription>
        </CardHeader>
        <CardContent>
          <div style={{ width: "100%", height: 400 }}>
            <ResponsiveContainer>
              <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="sales" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
