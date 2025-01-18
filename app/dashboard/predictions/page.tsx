"use client"; // Required for Next.js components using Recharts

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts";

type ProductDataType = {
  [key: string]: { month: string; actual: number; predicted: number }[];
};

const productData: ProductDataType = {
  Maggie: [
    { month: "Jan", actual: 400, predicted: 370 },
    { month: "Feb", actual: 500, predicted: 400 },
    { month: "Mar", actual: 280, predicted: 380 },
    { month: "Apr", actual: 540, predicted: 210 },
    { month: "May", actual: 300, predicted: 340 },
    { month: "Jun", actual: 570, predicted: 320 },
  ],
  Paneer: [
    { month: "Jan", actual: 250, predicted: 200 },
    { month: "Feb", actual: 280, predicted: 300 },
    { month: "Mar", actual: 210, predicted: 180 },
    { month: "Apr", actual: 310, predicted: 260 },
    { month: "May", actual: 220, predicted: 240 },
    { month: "Jun", actual: 200, predicted: 260 },
  ],
  Milk: [
    { month: "Jan", actual: 200, predicted: 220 },
    { month: "Feb", actual: 177, predicted: 210 },
    { month: "Mar", actual: 180, predicted: 200 },
    { month: "Apr", actual: 175, predicted: 190 },
    { month: "May", actual: 160, predicted: 180 },
    { month: "Jun", actual: 144, predicted: 170 },
  ],
  Chocolate: [
    { month: "Jan", actual: 278, predicted: 290 },
    { month: "Feb", actual: 268, predicted: 280 },
    { month: "Mar", actual: 258, predicted: 290 },
    { month: "Apr", actual: 248, predicted: 260 },
    { month: "May", actual: 238, predicted: 250 },
    { month: "Jun", actual: 228, predicted: 300 },
  ],
  "Olive Oil": [
    { month: "Jan", actual: 189, predicted: 150 },
    { month: "Feb", actual: 179, predicted: 190 },
    { month: "Mar", actual: 169, predicted: 180 },
    { month: "Apr", actual: 159, predicted: 190 },
    { month: "May", actual: 149, predicted: 170 },
    { month: "Jun", actual: 139, predicted: 150 },
  ],
};

export default function PredictionsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Future Predictions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.keys(productData).map((product) => (
          <Card key={product}>
            <CardHeader>
              <CardTitle>{product} - Stock Usage Predictions</CardTitle>
              <CardDescription>Actual vs Predicted stock usage for the next 6 months</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={productData[product]}>
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
        ))}
      </div>
    </div>
  );
}
