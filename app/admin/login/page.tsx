"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Heart } from "lucide-react"
import { useRouter } from "next/navigation"

export default function AdminLogin() {
  const [loginData, setLoginData] = useState({ username: "", password: "" })
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock authentication - in real app, this would validate against backend
    if (loginData.username === "admin" && loginData.password === "isha2024") {
      router.push("/admin")
    } else {
      alert("Invalid credentials. Use admin/isha2024")
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-xl font-bold text-foreground">ISHA Admin</h1>
              <p className="text-xs text-muted-foreground">Content Management System</p>
            </div>
          </div>
          <CardTitle>Admin Login</CardTitle>
          <CardDescription>Enter your credentials to access the dashboard</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                required
                value={loginData.username}
                onChange={(e) => setLoginData((prev) => ({ ...prev, username: e.target.value }))}
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                value={loginData.password}
                onChange={(e) => setLoginData((prev) => ({ ...prev, password: e.target.value }))}
              />
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Login
            </Button>
            <p className="text-xs text-muted-foreground text-center">Demo credentials: admin / isha2024</p>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
