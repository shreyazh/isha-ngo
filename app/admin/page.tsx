"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  Users,
  DollarSign,
  FileText,
  Settings,
  BarChart3,
  UserCheck,
  MessageSquare,
  Plus,
  Edit,
  Trash2,
  Eye,
} from "lucide-react"
import Link from "next/link"

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loginData, setLoginData] = useState({ username: "", password: "" })

  // Mock data for demonstration
  const dashboardStats = {
    totalDonations: "₹2,50,000",
    monthlyDonations: "₹45,000",
    totalVolunteers: 127,
    pendingApplications: 23,
    impactStories: 15,
    beneficiaries: 542,
  }

  const recentDonations = [
    { id: 1, donor: "Rajesh Kumar", amount: "₹5,000", cause: "Education", date: "2024-12-28" },
    { id: 2, donor: "Priya Sharma", amount: "₹2,500", cause: "Women's Health", date: "2024-12-27" },
    { id: 3, donor: "Anonymous", amount: "₹10,000", cause: "Homeless Support", date: "2024-12-27" },
    { id: 4, donor: "Amit Patel", amount: "₹1,000", cause: "Journalism", date: "2024-12-26" },
  ]

  const volunteerApplications = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah@email.com",
      interests: ["Education", "Women's Health"],
      status: "pending",
    },
    { id: 2, name: "Michael Chen", email: "michael@email.com", interests: ["Homeless Support"], status: "approved" },
    { id: 3, name: "Anita Desai", email: "anita@email.com", interests: ["Journalism"], status: "pending" },
    { id: 4, name: "David Wilson", email: "david@email.com", interests: ["Education"], status: "pending" },
  ]

  const impactStories = [
    { id: 1, title: "From Homeless to Homeowner", author: "Rajesh", status: "published", views: 1250 },
    { id: 2, title: "Education Changed My Life", author: "Priya", status: "draft", views: 0 },
    { id: 3, title: "Supporting Women's Health", author: "Sunita", status: "published", views: 890 },
    { id: 4, title: "Local Journalism Matters", author: "Amit", status: "review", views: 0 },
  ]

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock authentication - in real app, this would validate against backend
    if (loginData.username === "admin" && loginData.password === "isha2024") {
      setIsAuthenticated(true)
    } else {
      alert("Invalid credentials. Use admin/isha2024")
    }
  }

  if (!isAuthenticated) {
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

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-xl font-bold text-foreground">ISHA Admin</h1>
                <p className="text-xs text-muted-foreground">Content Management Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                View Website
              </Link>
              <Button
                variant="outline"
                onClick={() => setIsAuthenticated(false)}
                className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard Overview */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Dashboard Overview</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Donations</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">{dashboardStats.totalDonations}</div>
                <p className="text-xs text-muted-foreground">This month: {dashboardStats.monthlyDonations}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Volunteers</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-accent">{dashboardStats.totalVolunteers}</div>
                <p className="text-xs text-muted-foreground">Pending: {dashboardStats.pendingApplications}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Lives Impacted</CardTitle>
                <Heart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">{dashboardStats.beneficiaries}</div>
                <p className="text-xs text-muted-foreground">Stories: {dashboardStats.impactStories}</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="donations" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="donations" className="flex items-center space-x-2">
              <DollarSign className="h-4 w-4" />
              <span>Donations</span>
            </TabsTrigger>
            <TabsTrigger value="volunteers" className="flex items-center space-x-2">
              <UserCheck className="h-4 w-4" />
              <span>Volunteers</span>
            </TabsTrigger>
            <TabsTrigger value="stories" className="flex items-center space-x-2">
              <MessageSquare className="h-4 w-4" />
              <span>Stories</span>
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center space-x-2">
              <BarChart3 className="h-4 w-4" />
              <span>Analytics</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center space-x-2">
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </TabsTrigger>
          </TabsList>

          {/* Donations Tab */}
          <TabsContent value="donations" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Recent Donations</h3>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Plus className="h-4 w-4 mr-2" />
                Export Report
              </Button>
            </div>
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b border-border">
                      <tr className="text-left">
                        <th className="p-4 font-medium">Donor</th>
                        <th className="p-4 font-medium">Amount</th>
                        <th className="p-4 font-medium">Cause</th>
                        <th className="p-4 font-medium">Date</th>
                        <th className="p-4 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentDonations.map((donation) => (
                        <tr key={donation.id} className="border-b border-border">
                          <td className="p-4">{donation.donor}</td>
                          <td className="p-4 font-semibold text-primary">{donation.amount}</td>
                          <td className="p-4">
                            <Badge variant="secondary">{donation.cause}</Badge>
                          </td>
                          <td className="p-4 text-muted-foreground">{donation.date}</td>
                          <td className="p-4">
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Volunteers Tab */}
          <TabsContent value="volunteers" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Volunteer Applications</h3>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Plus className="h-4 w-4 mr-2" />
                Add Volunteer
              </Button>
            </div>
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b border-border">
                      <tr className="text-left">
                        <th className="p-4 font-medium">Name</th>
                        <th className="p-4 font-medium">Email</th>
                        <th className="p-4 font-medium">Interests</th>
                        <th className="p-4 font-medium">Status</th>
                        <th className="p-4 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {volunteerApplications.map((volunteer) => (
                        <tr key={volunteer.id} className="border-b border-border">
                          <td className="p-4 font-medium">{volunteer.name}</td>
                          <td className="p-4 text-muted-foreground">{volunteer.email}</td>
                          <td className="p-4">
                            <div className="flex flex-wrap gap-1">
                              {volunteer.interests.map((interest, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {interest}
                                </Badge>
                              ))}
                            </div>
                          </td>
                          <td className="p-4">
                            <Badge
                              variant={volunteer.status === "approved" ? "default" : "secondary"}
                              className={volunteer.status === "approved" ? "bg-green-500" : ""}
                            >
                              {volunteer.status}
                            </Badge>
                          </td>
                          <td className="p-4">
                            <div className="flex space-x-2">
                              <Button variant="ghost" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Edit className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Stories Tab */}
          <TabsContent value="stories" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Impact Stories</h3>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Plus className="h-4 w-4 mr-2" />
                Add Story
              </Button>
            </div>
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b border-border">
                      <tr className="text-left">
                        <th className="p-4 font-medium">Title</th>
                        <th className="p-4 font-medium">Author</th>
                        <th className="p-4 font-medium">Status</th>
                        <th className="p-4 font-medium">Views</th>
                        <th className="p-4 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {impactStories.map((story) => (
                        <tr key={story.id} className="border-b border-border">
                          <td className="p-4 font-medium">{story.title}</td>
                          <td className="p-4 text-muted-foreground">{story.author}</td>
                          <td className="p-4">
                            <Badge
                              variant={story.status === "published" ? "default" : "secondary"}
                              className={
                                story.status === "published"
                                  ? "bg-green-500"
                                  : story.status === "review"
                                    ? "bg-yellow-500"
                                    : ""
                              }
                            >
                              {story.status}
                            </Badge>
                          </td>
                          <td className="p-4 text-muted-foreground">{story.views}</td>
                          <td className="p-4">
                            <div className="flex space-x-2">
                              <Button variant="ghost" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <h3 className="text-xl font-semibold">Analytics & Reports</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Donation Trends</CardTitle>
                  <CardDescription>Monthly donation patterns</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-muted-foreground">
                    [Chart placeholder - Donation trends over time]
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cause Distribution</CardTitle>
                  <CardDescription>Donations by cause area</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Education</span>
                      <span className="font-semibold">35%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Homeless Support</span>
                      <span className="font-semibold">28%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Women's Health</span>
                      <span className="font-semibold">22%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Local Journalism</span>
                      <span className="font-semibold">15%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Volunteer Engagement</CardTitle>
                  <CardDescription>Active volunteers by program</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-muted-foreground">
                    [Chart placeholder - Volunteer engagement metrics]
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Website Traffic</CardTitle>
                  <CardDescription>Visitor analytics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Monthly Visitors</span>
                      <span className="font-semibold">12,450</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Page Views</span>
                      <span className="font-semibold">28,920</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Avg. Session Duration</span>
                      <span className="font-semibold">3m 24s</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Bounce Rate</span>
                      <span className="font-semibold">42%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <h3 className="text-xl font-semibold">System Settings</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Website Content</CardTitle>
                  <CardDescription>Manage homepage and page content</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <FileText className="h-4 w-4 mr-2" />
                    Edit Homepage Content
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <FileText className="h-4 w-4 mr-2" />
                    Manage Cause Pages
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <FileText className="h-4 w-4 mr-2" />
                    Update Contact Information
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>User Management</CardTitle>
                  <CardDescription>Manage admin users and permissions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Users className="h-4 w-4 mr-2" />
                    Manage Admin Users
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Settings className="h-4 w-4 mr-2" />
                    Role Permissions
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Settings className="h-4 w-4 mr-2" />
                    System Configuration
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Email & Notifications</CardTitle>
                  <CardDescription>Configure automated emails and alerts</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Email Templates
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Settings className="h-4 w-4 mr-2" />
                    Notification Settings
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Data & Backup</CardTitle>
                  <CardDescription>Export data and manage backups</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Export All Data
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Settings className="h-4 w-4 mr-2" />
                    Backup Settings
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
