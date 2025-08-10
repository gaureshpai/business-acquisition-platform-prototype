"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import {
  FileText,
  MessageCircle,
  Calendar,
  CheckCircle,
  Clock,
  Upload,
  Download,
  Bot,
  TrendingUp,
  DollarSign,
  Users,
  Shield,
  Zap,
  ArrowLeft,
} from "lucide-react"
import Link from "next/link"

export default function DealPage({ params }: { params: { id: string } }) {
  const [currentPhase, setCurrentPhase] = useState(2)
  const [aiAnalysisComplete, setAiAnalysisComplete] = useState(false)

  const dealPhases = [
    { id: 1, name: "Initial Contact", status: "completed" },
    { id: 2, name: "NDA & Preliminary Info", status: "active" },
    { id: 3, name: "Due Diligence", status: "pending" },
    { id: 4, name: "Valuation & Terms", status: "pending" },
    { id: 5, name: "Final Negotiations", status: "pending" },
    { id: 6, name: "Closing", status: "pending" },
  ]

  const documents = [
    { name: "Non-Disclosure Agreement", status: "signed", type: "legal", aiAnalyzed: true },
    { name: "Financial Statements (3 years)", status: "uploaded", type: "financial", aiAnalyzed: true },
    { name: "Tax Returns", status: "pending", type: "financial", aiAnalyzed: false },
    { name: "Customer Contracts", status: "uploaded", type: "commercial", aiAnalyzed: true },
    { name: "Employee Agreements", status: "pending", type: "hr", aiAnalyzed: false },
    { name: "Intellectual Property", status: "uploaded", type: "legal", aiAnalyzed: true },
  ]

  const aiInsights = [
    {
      type: "financial",
      title: "Revenue Growth Analysis",
      insight:
        "Strong 23% YoY growth with consistent quarterly improvements. Revenue diversification across 3 key segments reduces risk.",
      confidence: 92,
      impact: "positive",
    },
    {
      type: "risk",
      title: "Customer Concentration Risk",
      insight: "Top 3 customers represent 45% of revenue. Recommend customer diversification strategy.",
      confidence: 88,
      impact: "caution",
    },
    {
      type: "valuation",
      title: "Market Multiple Analysis",
      insight:
        "Current asking price aligns with industry multiples. Comparable transactions suggest fair valuation range.",
      confidence: 85,
      impact: "neutral",
    },
  ]

  const runAiAnalysis = () => {
    setAiAnalysisComplete(true)
    setTimeout(() => {
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/dashboard">
              <Button variant="ghost" size="sm" className="cursor-pointer">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Deal: TechFlow Solutions</h1>
              <p className="text-gray-600">Acquisition process with Sarah Chen</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              Phase {currentPhase} of 6
            </Badge>
            <Link href={`/profile`}>
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            </Link>
          </div>
        </div>
      </header>

      <div className="p-6 max-w-7xl mx-auto space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5" />
              <span>Deal Progress</span>
            </CardTitle>
            <CardDescription>Track your acquisition process step by step</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Progress value={(currentPhase / dealPhases.length) * 100} className="w-full" />
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                {dealPhases.map((phase) => (
                  <div
                    key={phase.id}
                    className={`p-3 rounded-lg text-center ${
                      phase.status === "completed"
                        ? "bg-green-100 text-green-800"
                        : phase.status === "active"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    <div className="flex items-center justify-center mb-2">
                      {phase.status === "completed" ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : phase.status === "active" ? (
                        <Clock className="w-5 h-5" />
                      ) : (
                        <div className="w-5 h-5 border-2 border-current rounded-full" />
                      )}
                    </div>
                    <p className="text-xs font-medium">{phase.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger className="cursor-pointer" value="overview">Overview</TabsTrigger>
                <TabsTrigger className="cursor-pointer" value="documents">Documents</TabsTrigger>
                <TabsTrigger className="cursor-pointer" value="ai-insights">AI Insights</TabsTrigger>
                <TabsTrigger className="cursor-pointer" value="communication">Messages</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Deal Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Business</p>
                        <p className="font-semibold">TechFlow Solutions</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Industry</p>
                        <p className="font-semibold">Technology Services</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Asking Price</p>
                        <p className="font-semibold text-green-600">$2.5M</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Annual Revenue</p>
                        <p className="font-semibold">$1.8M</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Current Phase Tasks</p>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm">NDA signed by both parties</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm">Financial statements reviewed</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-yellow-500" />
                          <span className="text-sm">Awaiting tax returns</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-yellow-500" />
                          <span className="text-sm">Schedule management meeting</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Next Steps</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                        <Calendar className="w-5 h-5 text-blue-600 mt-0.5" />
                        <div>
                          <p className="font-medium text-blue-900">Schedule Due Diligence Meeting</p>
                          <p className="text-sm text-blue-700">Coordinate with buyer for detailed business review</p>
                          <Button size="sm" className="mt-2">
                            Schedule Meeting
                          </Button>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-3 bg-amber-50 rounded-lg">
                        <FileText className="w-5 h-5 text-amber-600 mt-0.5" />
                        <div>
                          <p className="font-medium text-amber-900">Complete Document Upload</p>
                          <p className="text-sm text-amber-700">Upload remaining financial documents</p>
                          <Button size="sm" variant="outline" className="mt-2 bg-transparent">
                            Upload Documents
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="documents" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Document Checklist</span>
                      <Button size="sm">
                        <Upload className="w-4 h-4 mr-2" />
                        Upload
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {documents.map((doc, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center space-x-3">
                            <FileText className="w-5 h-5 text-gray-500" />
                            <div>
                              <p className="font-medium">{doc.name}</p>
                              <div className="flex items-center space-x-2">
                                <Badge
                                  variant={
                                    doc.status === "signed" || doc.status === "uploaded" ? "default" : "secondary"
                                  }
                                  className={
                                    doc.status === "signed" || doc.status === "uploaded"
                                      ? "bg-green-100 text-green-800"
                                      : ""
                                  }
                                >
                                  {doc.status}
                                </Badge>
                                {doc.aiAnalyzed && (
                                  <Badge variant="outline" className="bg-purple-50 text-purple-700">
                                    <Bot className="w-3 h-3 mr-1" />
                                    AI Analyzed
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            {doc.status !== "pending" && (
                              <Button size="sm" variant="outline">
                                <Download className="w-4 h-4" />
                              </Button>
                            )}
                            {doc.status === "pending" && <Button size="sm">Upload</Button>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="ai-insights" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Bot className="w-5 h-5 text-purple-600" />
                      <span>AI-Powered Deal Analysis</span>
                    </CardTitle>
                    <CardDescription>Get intelligent insights about this acquisition opportunity</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {!aiAnalysisComplete ? (
                      <div className="text-center py-8">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Bot className="w-8 h-8 text-purple-600" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Ready for AI Analysis</h3>
                        <p className="text-gray-600 mb-4">
                          Analyze uploaded documents to generate insights about risks, opportunities, and valuation
                        </p>
                        <Button onClick={runAiAnalysis} className="bg-purple-600 hover:bg-purple-700">
                          <Zap className="w-4 h-4 mr-2" />
                          Run AI Analysis
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {aiInsights.map((insight, index) => (
                          <div
                            key={index}
                            className={`p-4 rounded-lg border-l-4 ${
                              insight.impact === "positive"
                                ? "bg-green-50 border-green-500"
                                : insight.impact === "caution"
                                  ? "bg-yellow-50 border-yellow-500"
                                  : "bg-blue-50 border-blue-500"
                            }`}
                          >
                            <div className="flex items-start justify-between mb-2">
                              <h4 className="font-semibold">{insight.title}</h4>
                              <Badge variant="outline">{insight.confidence}% confidence</Badge>
                            </div>
                            <p className="text-sm text-gray-700 mb-3">{insight.insight}</p>
                            <div className="flex items-center space-x-2">
                              <Badge
                                variant="secondary"
                                className={
                                  insight.impact === "positive"
                                    ? "bg-green-100 text-green-800"
                                    : insight.impact === "caution"
                                      ? "bg-yellow-100 text-yellow-800"
                                      : "bg-blue-100 text-blue-800"
                                }
                              >
                                {insight.type}
                              </Badge>
                              <Button size="sm" variant="outline">
                                View Details
                              </Button>
                            </div>
                          </div>
                        ))}

                        <Card className="bg-gradient-to-r from-purple-50 to-blue-50">
                          <CardContent className="p-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                                <Bot className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <h4 className="font-semibold">AI Recommendation</h4>
                                <p className="text-sm text-gray-600">
                                  Based on analysis, this appears to be a solid acquisition opportunity with manageable
                                  risks. Recommend proceeding to due diligence phase.
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="communication" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Messages with Sarah Chen</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4 max-h-96 overflow-y-auto">
                      <div className="flex space-x-3">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" />
                          <AvatarFallback>SC</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="bg-gray-100 p-3 rounded-lg">
                            <p className="text-sm">
                              Hi! I'm very interested in TechFlow Solutions. The financials look strong. Can we schedule
                              a call to discuss the business model in more detail?
                            </p>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                        </div>
                      </div>

                      <div className="flex space-x-3 justify-end">
                        <div className="flex-1 max-w-xs">
                          <div className="bg-blue-600 text-white p-3 rounded-lg">
                            <p className="text-sm">
                              I'd be happy to discuss the business. How about tomorrow at 2 PM EST?
                            </p>
                          </div>
                          <p className="text-xs text-gray-500 mt-1 text-right">1 hour ago</p>
                        </div>
                        <Avatar className="w-8 h-8">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex space-x-2">
                        <Textarea placeholder="Type your message..." className="flex-1" rows={2} />
                        <Button>Send</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Buyer Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Sarah Chen</p>
                    <p className="text-sm text-gray-600">Serial Entrepreneur</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Investment Range:</span>
                    <span className="font-medium">$1M - $5M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Experience:</span>
                    <span className="font-medium">3-5 deals</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Timeline:</span>
                    <span className="font-medium">3 months</span>
                  </div>
                </div>
                <Button className="w-full" size="sm">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Deal Metrics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Asking Price</span>
                    </div>
                    <span className="font-semibold">$2.5M</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">Revenue Multiple</span>
                    </div>
                    <span className="font-semibold">1.4x</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-purple-600" />
                      <span className="text-sm">Employees</span>
                    </div>
                    <span className="font-semibold">12</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Shield className="w-4 h-4 text-orange-600" />
                      <span className="text-sm">Risk Score</span>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      Low
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full justify-start bg-transparent" variant="outline" size="sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Meeting
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline" size="sm">
                  <FileText className="w-4 h-4 mr-2" />
                  Generate Report
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline" size="sm">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Documents
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline" size="sm">
                  <Bot className="w-4 h-4 mr-2" />
                  AI Analysis
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
