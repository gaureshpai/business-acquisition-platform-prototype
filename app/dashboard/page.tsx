"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Building2,
  Users,
  Heart,
  X,
  MessageCircle,
  Settings,
  User,
  TrendingUp,
  DollarSign,
  MapPin,
  Clock,
  Star,
  Filter,
  Bell,
  Menu,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

const buyerProfiles = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "Serial Entrepreneur",
    company: "Chen Ventures",
    avatar: "/placeholder.svg?height=100&width=100",
    location: "San Francisco, CA",
    investmentRange: "$1M - $5M",
    preferredIndustries: ["Technology", "Healthcare"],
    experience: "Experienced (3-5 deals)",
    liquidCapital: "$2M+",
    timeline: "Within 3 months",
    matchScore: 95,
    bio: "Experienced tech entrepreneur with successful exits. Looking for SaaS businesses with strong recurring revenue.",
    keyPoints: ["3 successful exits", "SaaS expertise", "Quick decision maker"],
    dealPreferences: ["Asset Purchase", "Earnout Structure"],
    verified: true,
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    title: "Investment Director",
    company: "Growth Capital Partners",
    avatar: "/placeholder.svg?height=100&width=100",
    location: "Austin, TX",
    investmentRange: "$5M - $10M",
    preferredIndustries: ["Manufacturing", "Professional Services"],
    experience: "Very experienced (5+ deals)",
    liquidCapital: "$10M+",
    timeline: "Within 6 months",
    matchScore: 88,
    bio: "Leading growth capital investments in established businesses. Focus on operational improvements and scaling.",
    keyPoints: ["PE background", "Operational expertise", "Growth focused"],
    dealPreferences: ["Stock Purchase", "Management Retention"],
    verified: true,
  },
  {
    id: 3,
    name: "Jennifer Park",
    title: "Business Owner",
    company: "Park Industries",
    avatar: "/placeholder.svg?height=100&width=100",
    location: "Chicago, IL",
    investmentRange: "$500K - $1M",
    preferredIndustries: ["Retail", "Food & Beverage"],
    experience: "Some experience (1-2 deals)",
    liquidCapital: "$1M+",
    timeline: "Within 12 months",
    matchScore: 82,
    bio: "Successful retail business owner looking to expand portfolio with complementary businesses.",
    keyPoints: ["Retail expertise", "Local market knowledge", "Strategic buyer"],
    dealPreferences: ["Asset Purchase", "Seller Financing"],
    verified: true,
  },
]

export default function Dashboard() {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0)
  const [likedProfiles, setLikedProfiles] = useState<number[]>([])
  const [passedProfiles, setPassedProfiles] = useState<number[]>([])
  const [showProfileDetail, setShowProfileDetail] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const currentProfile = buyerProfiles[currentProfileIndex]

  const handleLike = () => {
    if (currentProfile) {
      setLikedProfiles([...likedProfiles, currentProfile.id])
      nextProfile()
    }
  }

  const handlePass = () => {
    if (currentProfile) {
      setPassedProfiles([...passedProfiles, currentProfile.id])
      nextProfile()
    }
  }

  const nextProfile = () => {
    if (currentProfileIndex < buyerProfiles.length - 1) {
      setCurrentProfileIndex(currentProfileIndex + 1)
    }
  }

  const Navigation = () => (
    <div className="bg-white border-r border-gray-200 w-64 min-h-[1200px] p-4">
      <div className="flex items-center space-x-2 mb-6">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
          <Building2 className="w-5 h-5 text-white" />
        </div>
        <h1 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          DealFlow
        </h1>
      </div>

      <nav className="space-y-2 mb-6">
        <Link href={"/"} className="flex items-center space-x-3 px-3 py-2 rounded-lg bg-blue-50 text-blue-700 cursor-pointer">
          <Users className="w-5 h-5" />
          <span>Discover Buyers</span>
        </Link>
        <Link href={"/profile"} className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 cursor-pointer">
          <User className="w-5 h-5" />
          <span>My Profile</span>
        </Link>
        <Link href={"/settings"} className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 cursor-pointer">
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </Link>
      </nav>

      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
        <h3 className="font-semibold text-gray-900 mb-2">This Week</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Profile Views</span>
            <span className="font-medium">24</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">New Matches</span>
            <span className="font-medium">3</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Messages</span>
            <span className="font-medium">8</span>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <div className="hidden lg:block">
        <Navigation />
      </div>

      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black opacity-50" onClick={() => setSidebarOpen(false)} />
          <div className="relative">
            <Navigation />
          </div>
        </div>
      )}

      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setSidebarOpen(true)}>
                <Menu className="w-5 h-5" />
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Discover Buyers</h1>
                <p className="text-gray-600">Find the perfect buyer for your business</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/profile" className="relative">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </Link>
            </div>
          </div>
        </header>

        <main className="flex-1 p-6">
          <Tabs defaultValue="discover" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="discover" className="cursor-pointer">Discover</TabsTrigger>
              <TabsTrigger value="matches" className="cursor-pointer">Matches ({likedProfiles.length})</TabsTrigger>
              <TabsTrigger value="analytics" className="cursor-pointer">Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="discover" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Filter className="w-5 h-5" />
                    <span>Filters</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Investment Range</label>
                      <Select>
                        <SelectTrigger className="cursor-pointer">
                          <SelectValue placeholder="Any range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem className="cursor-pointer" value="any">Any range</SelectItem>
                          <SelectItem className="cursor-pointer" value="under-1m">Under $1M</SelectItem>
                          <SelectItem className="cursor-pointer" value="1m-5m">$1M - $5M</SelectItem>
                          <SelectItem className="cursor-pointer" value="5m-plus">$5M+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Experience Level</label>
                      <Select>
                        <SelectTrigger className="cursor-pointer">
                          <SelectValue placeholder="Any experience" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem className="cursor-pointer" value="any">Any experience</SelectItem>
                          <SelectItem className="cursor-pointer" value="first-time">First-time</SelectItem>
                          <SelectItem className="cursor-pointer" value="experienced">Experienced</SelectItem>
                          <SelectItem className="cursor-pointer" value="very-experienced">Very experienced</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Timeline</label>
                      <Select>
                        <SelectTrigger className="cursor-pointer">
                          <SelectValue placeholder="Any timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem className="cursor-pointer" value="any">Any timeline</SelectItem>
                          <SelectItem className="cursor-pointer" value="immediate">Immediate</SelectItem>
                          <SelectItem className="cursor-pointer" value="3-months">3 months</SelectItem>
                          <SelectItem className="cursor-pointer" value="6-months">6 months</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Location</label>
                      <Input placeholder="Enter location" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {currentProfile && (
                <div className="mx-auto">
                  <Card className="overflow-hidden shadow-lg">
                    <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-4">
                          <Avatar className="w-16 h-16">
                            <AvatarImage src={currentProfile.avatar || "/placeholder.svg"} />
                            <AvatarFallback>
                              {currentProfile.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center space-x-2">
                              <CardTitle className="text-xl">{currentProfile.name}</CardTitle>
                              {currentProfile.verified && (
                                <Badge variant="secondary" className="bg-green-100 text-green-800">
                                  <Star className="w-3 h-3 mr-1" />
                                  Verified
                                </Badge>
                              )}
                            </div>
                            <CardDescription className="text-base">
                              {currentProfile.title} at {currentProfile.company}
                            </CardDescription>
                            <div className="flex items-center space-x-1 mt-1">
                              <MapPin className="w-4 h-4 text-gray-500" />
                              <span className="text-sm text-gray-600">{currentProfile.location}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span className="font-semibold text-lg">{currentProfile.matchScore}%</span>
                          </div>
                          <p className="text-xs text-gray-500">Match Score</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2">
                            <DollarSign className="w-4 h-4 text-green-600" />
                            <div>
                              <p className="text-sm text-gray-600">Investment Range</p>
                              <p className="font-semibold">{currentProfile.investmentRange}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-blue-600" />
                            <div>
                              <p className="text-sm text-gray-600">Timeline</p>
                              <p className="font-semibold">{currentProfile.timeline}</p>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2">
                            <TrendingUp className="w-4 h-4 text-purple-600" />
                            <div>
                              <p className="text-sm text-gray-600">Experience</p>
                              <p className="font-semibold">{currentProfile.experience}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Building2 className="w-4 h-4 text-orange-600" />
                            <div>
                              <p className="text-sm text-gray-600">Liquid Capital</p>
                              <p className="font-semibold">{currentProfile.liquidCapital}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm text-gray-600 mb-2">Preferred Industries</p>
                        <div className="flex flex-wrap gap-2">
                          {currentProfile.preferredIndustries.map((industry) => (
                            <Badge key={industry} variant="outline">
                              {industry}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-sm text-gray-600 mb-2">About</p>
                        <p className="text-gray-800">{currentProfile.bio}</p>
                      </div>

                      <div>
                        <p className="text-sm text-gray-600 mb-2">Key Strengths</p>
                        <div className="space-y-1">
                          {currentProfile.keyPoints.map((point, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full" />
                              <span className="text-sm">{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-sm text-gray-600 mb-2">Deal Preferences</p>
                        <div className="flex flex-wrap gap-2">
                          {currentProfile.dealPreferences.map((pref) => (
                            <Badge key={pref} variant="secondary">
                              {pref}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex space-x-4 pt-4">
                        <Button
                          variant="outline"
                          size="lg"
                          className="flex-1 border-red-200 cursor-pointer text-red-600 hover:bg-red-50 bg-transparent"
                          onClick={handlePass}
                        >
                          <X className="w-5 h-5 mr-2" />
                          Pass
                        </Button>
                        <Button
                          size="lg"
                          className="flex-1 bg-gradient-to-r cursor-pointer from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
                          onClick={handleLike}
                        >
                          <Heart className="w-5 h-5 mr-2" />
                          Interested
                        </Button>
                        <Button variant="outline" size="lg" className="cursor-pointer" onClick={() => setShowProfileDetail(true)}>
                          View Full Profile
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="text-center mt-4">
                    <p className="text-sm text-gray-500">
                      {currentProfileIndex + 1} of {buyerProfiles.length} profiles
                    </p>
                  </div>
                </div>
              )}

              {currentProfileIndex >= buyerProfiles.length && (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No more profiles</h3>
                  <p className="text-gray-600 mb-4">
                    You've reviewed all available buyer profiles. Check back later for new matches!
                  </p>
                  <Button onClick={() => setCurrentProfileIndex(0)}>Review Again</Button>
                </div>
              )}
            </TabsContent>

            <TabsContent value="matches" className="space-y-6">
              <div className="grid gap-6">
                {likedProfiles.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No matches yet</h3>
                    <p className="text-gray-600">Start reviewing buyer profiles to find your perfect match!</p>
                  </div>
                ) : (
                  <div className="grid gap-4">
                    {buyerProfiles
                      .filter((profile) => likedProfiles.includes(profile.id))
                      .map((profile) => (
                        <Card key={profile.id} className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <Avatar>
                                <AvatarImage src={profile.avatar || "/placeholder.svg"} />
                                <AvatarFallback>
                                  {profile.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <h3 className="font-semibold">{profile.name}</h3>
                                <p className="text-sm text-gray-600">{profile.title}</p>
                                <p className="text-sm text-gray-500">{profile.investmentRange}</p>
                              </div>
                            </div>
                            <div className="flex space-x-2">
                              <Link href={`/deals/${profile.id}`}>
                                <Button size="sm" variant="outline">
                                  Start Deal
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </Card>
                      ))}
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Profile Views</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-blue-600">127</div>
                    <p className="text-sm text-gray-600">This month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Interest Received</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-green-600">{likedProfiles.length}</div>
                    <p className="text-sm text-gray-600">Total matches</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Response Rate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-purple-600">85%</div>
                    <p className="text-sm text-gray-600">Buyer responses</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}