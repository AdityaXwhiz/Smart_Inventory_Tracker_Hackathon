"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function SettingsPage() {
  const [language, setLanguage] = useState("English");
  const [brightness, setBrightness] = useState(50);
  const [helpLine, setHelpLine] = useState("123-456-7890");

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-4">Settings</h1>
      <p>This page allows you to manage your account and application settings.</p>

      <Card>
        <CardHeader>
          <CardTitle>General Settings</CardTitle>
          <CardDescription>Manage your app's general preferences.</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Language Selection */}
          <div className="mb-4">
            <label className="block text-lg mb-2">Language</label>
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="English">English</SelectItem>
                <SelectItem value="Spanish">Spanish</SelectItem>
                <SelectItem value="French">French</SelectItem>
                <SelectItem value="German">German</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Brightness Control */}
          <div className="mb-4">
            <label className="block text-lg mb-2">Brightness</label>
            <input
              type="range"
              min="0"
              max="100"
              value={brightness}
              onChange={(e) => setBrightness(Number(e.target.value))}
              className="w-full"
            />
            <div className="text-right">{brightness}%</div>
          </div>

          {/* Customer Help Line */}
          <div className="mb-4">
            <label className="block text-lg mb-2">Customer Help Line</label>
            <input
              type="text"
              value={helpLine}
              onChange={(e) => setHelpLine(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter help line number"
            />
          </div>

          {/* Stock Management */}
          <div className="mb-4">
            <label className="block text-lg mb-2">Manage Stock Updates</label>
            <Select value="enabled" onValueChange={(value) => console.log(value)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Stock Updates" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="enabled">Enabled</SelectItem>
                <SelectItem value="disabled">Disabled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Additional Settings (Optional) */}
      <Card>
        <CardHeader>
          <CardTitle>Advanced Settings</CardTitle>
          <CardDescription>Customize app behavior and notifications.</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Notification Settings */}
          <div className="mb-4">
            <label className="block text-lg mb-2">Enable Notifications</label>
            <Select value="enabled" onValueChange={(value) => console.log(value)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Notifications" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="enabled">Enabled</SelectItem>
                <SelectItem value="disabled">Disabled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
