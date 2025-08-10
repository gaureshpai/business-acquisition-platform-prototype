"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import {
    ArrowLeft,
    Edit3,
    Save,
    Star,
    MapPin,
    Building2,
    DollarSign,
    Users,
    TrendingUp,
    Award,
    CheckCircle,
    Eye,
    EyeOff,
    Camera,
    Verified,
} from "lucide-react"
import Link from "next/link"

export default function ProfilePage() {
    const [isEditing, setIsEditing] = useState(false)
    const [profileVisibility, setProfileVisibility] = useState(true)
    const [profileData, setProfileData] = useState({
        // Personal Info
        firstName: "John",
        lastName: "Doe",
        title: "CEO & Founder",
        company: "TechFlow Solutions",
        email: "john@techflow.com",
        phone: "+1 (555) 123-4567",
        location: "San Francisco, CA",
        bio: "Experienced tech entrepreneur with 15+ years building and scaling SaaS companies. Successfully exited two previous ventures and now looking to sell TechFlow Solutions to focus on new opportunities in AI/ML space.",

        // Business Info
        businessName: "TechFlow Solutions",
        industry: "Technology",
        yearEstablished: "2018",
        employees: "11-25",
        businessModel: "B2B SaaS",
        annualRevenue: "$1.8M",
        profitMargin: "25%",
        growthRate: "23% YoY",
        askingPrice: "$2.5M",

        // Preferences
        preferredBuyerType: "Strategic Buyer",
        timeline: "Within 6 months",
        dealStructure: ["Asset Sale", "Earnout"],
        minimumCash: "75%",

        // Additional
        keyAssets: ["Technology Platform", "Customer Database", "Brand & IP"],
        reasonForSelling: "New venture opportunity",
    })

    const profileCompleteness = 85
    const profileViews = 127
    const matchesThisMonth = 8

    const industries = [
        "Technology",
        "Healthcare",
        "Manufacturing",
        "Retail",
        "Food & Beverage",
        "Professional Services",
        "Real Estate",
        "Construction",
        "Transportation",
        "Education",
        "Entertainment",
        "Financial Services",
    ]

    const keyAssets = [
        "Real Estate",
        "Equipment & Machinery",
        "Inventory",
        "Intellectual Property",
        "Customer Database",
        "Brand & Trademarks",
        "Contracts & Agreements",
        "Technology Platform",
    ]

    const dealStructures = [
        "Asset Sale",
        "Stock Sale",
        "Earnout",
        "Seller Financing",
        "Management Retention",
        "Gradual Transition",
    ]

    const handleSave = () => {
        setIsEditing(false)
        // Here you would typically save to your backend
        console.log("Profile saved:", profileData)
    }

    const handleInputChange = (field: string, value: any) => {
        setProfileData((prev) => ({ ...prev, [field]: value }))
    }

    const handleArrayChange = (field: string, item: string, checked: boolean) => {
        setProfileData((prev) => ({
            ...prev,
            [field]: checked
                ? [...(prev[field as keyof typeof prev] as string[]), item]
                : (prev[field as keyof typeof prev] as string[]).filter((i) => i !== item),
        }))
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-200 px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <Link href="/dashboard">
                            <Button variant="ghost" size="sm">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Back to Dashboard
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>
                            <p className="text-gray-600">Manage your business profile and preferences</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Button
                            variant="outline"
                            onClick={() => setProfileVisibility(!profileVisibility)}
                            className="flex items-center space-x-2"
                        >
                            {profileVisibility ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                            <span>{profileVisibility ? "Public" : "Private"}</span>
                        </Button>
                        {isEditing ? (
                            <div className="flex space-x-2">
                                <Button variant="outline" onClick={() => setIsEditing(false)}>
                                    Cancel
                                </Button>
                                <Button onClick={handleSave}>
                                    <Save className="w-4 h-4 mr-2" />
                                    Save Changes
                                </Button>
                            </div>
                        ) : (
                            <Button onClick={() => setIsEditing(true)}>
                                <Edit3 className="w-4 h-4 mr-2" />
                                Edit Profile
                            </Button>
                        )}
                    </div>
                </div>
            </header>

            <div className="p-6 max-w-6xl mx-auto space-y-6">
                {/* Profile Header Card */}
                <Card className="overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-32"></div>
                    <CardContent className="relative pt-0 pb-6">
                        <div className="flex flex-col md:flex-row md:items-end md:space-x-6 -mt-16">
                            {/* Avatar */}
                            <div className="relative">
                                <Avatar className="w-32 h-32 border-4 border-white shadow-lg">
                                    <AvatarImage src="/placeholder.svg?height=128&width=128" />
                                    <AvatarFallback className="text-2xl">
                                        {profileData.firstName[0]}
                                        {profileData.lastName[0]}
                                    </AvatarFallback>
                                </Avatar>
                                {isEditing && (
                                    <Button size="sm" className="absolute bottom-0 right-0 rounded-full w-8 h-8 p-0">
                                        <Camera className="w-4 h-4" />
                                    </Button>
                                )}
                            </div>

                            {/* Profile Info */}
                            <div className="flex-1 mt-4 md:mt-0">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                    <div>
                                        <div className="flex items-center space-x-2">
                                            <h2 className="text-2xl font-bold text-gray-900">
                                                {profileData.firstName} {profileData.lastName}
                                            </h2>
                                            <Badge variant="secondary" className="bg-green-100 text-green-800">
                                                <Verified className="w-3 h-3 mr-1" />
                                                Verified
                                            </Badge>
                                        </div>
                                        <p className="text-lg text-gray-600">{profileData.title}</p>
                                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                                            <div className="flex items-center space-x-1">
                                                <Building2 className="w-4 h-4" />
                                                <span>{profileData.company}</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <MapPin className="w-4 h-4" />
                                                <span>{profileData.location}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Profile Stats */}
                                    <div className="flex space-x-6 mt-4 md:mt-0">
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-blue-600">{profileViews}</div>
                                            <div className="text-xs text-gray-500">Profile Views</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-green-600">{matchesThisMonth}</div>
                                            <div className="text-xs text-gray-500">Matches</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-purple-600">4.9</div>
                                            <div className="text-xs text-gray-500">Rating</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Profile Completeness */}
                <Card>
                    <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="font-semibold">Profile Completeness</h3>
                                <p className="text-sm text-gray-600">Complete your profile to attract more buyers</p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Progress value={profileCompleteness} className="w-32" />
                                <span className="text-sm font-medium">{profileCompleteness}%</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Main Content */}
                <Tabs defaultValue="overview" className="w-full">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="business">Business Details</TabsTrigger>
                        <TabsTrigger value="preferences">Sale Preferences</TabsTrigger>
                        <TabsTrigger value="activity">Activity</TabsTrigger>
                    </TabsList>

                    <TabsContent value="overview" className="space-y-6">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Personal Information */}
                            <div className="lg:col-span-2 space-y-6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Personal Information</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        {isEditing ? (
                                            <>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="space-y-2">
                                                        <Label htmlFor="firstName">First Name</Label>
                                                        <Input
                                                            id="firstName"
                                                            value={profileData.firstName}
                                                            onChange={(e) => handleInputChange("firstName", e.target.value)}
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Label htmlFor="lastName">Last Name</Label>
                                                        <Input
                                                            id="lastName"
                                                            value={profileData.lastName}
                                                            onChange={(e) => handleInputChange("lastName", e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="title">Professional Title</Label>
                                                    <Input
                                                        id="title"
                                                        value={profileData.title}
                                                        onChange={(e) => handleInputChange("title", e.target.value)}
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="email">Email</Label>
                                                    <Input
                                                        id="email"
                                                        type="email"
                                                        value={profileData.email}
                                                        onChange={(e) => handleInputChange("email", e.target.value)}
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="phone">Phone</Label>
                                                    <Input
                                                        id="phone"
                                                        value={profileData.phone}
                                                        onChange={(e) => handleInputChange("phone", e.target.value)}
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="location">Location</Label>
                                                    <Input
                                                        id="location"
                                                        value={profileData.location}
                                                        onChange={(e) => handleInputChange("location", e.target.value)}
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="bio">Bio</Label>
                                                    <Textarea
                                                        id="bio"
                                                        value={profileData.bio}
                                                        onChange={(e) => handleInputChange("bio", e.target.value)}
                                                        rows={4}
                                                    />
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div>
                                                        <Label className="text-sm text-gray-600">Email</Label>
                                                        <p className="font-medium">{profileData.email}</p>
                                                    </div>
                                                    <div>
                                                        <Label className="text-sm text-gray-600">Phone</Label>
                                                        <p className="font-medium">{profileData.phone}</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <Label className="text-sm text-gray-600">About</Label>
                                                    <p className="mt-1 text-gray-800">{profileData.bio}</p>
                                                </div>
                                            </>
                                        )}
                                    </CardContent>
                                </Card>

                                {/* Quick Business Overview */}
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Business Overview</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid grid-cols-2 gap-6">
                                            <div className="space-y-4">
                                                <div className="flex items-center space-x-3">
                                                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                                        <Building2 className="w-5 h-5 text-blue-600" />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm text-gray-600">Business</p>
                                                        <p className="font-semibold">{profileData.businessName}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center space-x-3">
                                                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                                        <DollarSign className="w-5 h-5 text-green-600" />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm text-gray-600">Annual Revenue</p>
                                                        <p className="font-semibold">{profileData.annualRevenue}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="space-y-4">
                                                <div className="flex items-center space-x-3">
                                                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                                        <TrendingUp className="w-5 h-5 text-purple-600" />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm text-gray-600">Growth Rate</p>
                                                        <p className="font-semibold">{profileData.growthRate}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center space-x-3">
                                                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                                                        <Users className="w-5 h-5 text-orange-600" />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm text-gray-600">Employees</p>
                                                        <p className="font-semibold">{profileData.employees}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Sidebar */}
                            <div className="space-y-6">
                                {/* Key Metrics */}
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-lg">Key Metrics</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm text-gray-600">Asking Price</span>
                                            <span className="font-semibold text-green-600">{profileData.askingPrice}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm text-gray-600">Profit Margin</span>
                                            <span className="font-semibold">{profileData.profitMargin}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm text-gray-600">Est. Founded</span>
                                            <span className="font-semibold">{profileData.yearEstablished}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm text-gray-600">Industry</span>
                                            <Badge variant="outline">{profileData.industry}</Badge>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Achievements */}
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-lg flex items-center space-x-2">
                                            <Award className="w-5 h-5" />
                                            <span>Achievements</span>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-3">
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span className="text-sm">Profile Verified</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span className="text-sm">Financial Docs Uploaded</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span className="text-sm">5+ Buyer Matches</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Star className="w-4 h-4 text-yellow-500" />
                                            <span className="text-sm">Top Rated Seller</span>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Recent Activity */}
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-lg">Recent Activity</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-3">
                                        <div className="text-sm">
                                            <p className="font-medium">New buyer match</p>
                                            <p className="text-gray-600">2 hours ago</p>
                                        </div>
                                        <div className="text-sm">
                                            <p className="font-medium">Profile viewed</p>
                                            <p className="text-gray-600">5 hours ago</p>
                                        </div>
                                        <div className="text-sm">
                                            <p className="font-medium">Message received</p>
                                            <p className="text-gray-600">1 day ago</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="business" className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Business Information</CardTitle>
                                <CardDescription>Detailed information about your business</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {isEditing ? (
                                    <>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="businessName">Business Name</Label>
                                                <Input
                                                    id="businessName"
                                                    value={profileData.businessName}
                                                    onChange={(e) => handleInputChange("businessName", e.target.value)}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label>Industry</Label>
                                                <Select
                                                    value={profileData.industry}
                                                    onValueChange={(value) => handleInputChange("industry", value)}
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {industries.map((industry) => (
                                                            <SelectItem key={industry} value={industry}>
                                                                {industry}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-3 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="yearEstablished">Year Established</Label>
                                                <Input
                                                    id="yearEstablished"
                                                    value={profileData.yearEstablished}
                                                    onChange={(e) => handleInputChange("yearEstablished", e.target.value)}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label>Employees</Label>
                                                <Select
                                                    value={profileData.employees}
                                                    onValueChange={(value) => handleInputChange("employees", value)}
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="1-5">1-5</SelectItem>
                                                        <SelectItem value="6-10">6-10</SelectItem>
                                                        <SelectItem value="11-25">11-25</SelectItem>
                                                        <SelectItem value="26-50">26-50</SelectItem>
                                                        <SelectItem value="51-100">51-100</SelectItem>
                                                        <SelectItem value="100+">100+</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="space-y-2">
                                                <Label>Business Model</Label>
                                                <Select
                                                    value={profileData.businessModel}
                                                    onValueChange={(value) => handleInputChange("businessModel", value)}
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="B2B">B2B</SelectItem>
                                                        <SelectItem value="B2C">B2C</SelectItem>
                                                        <SelectItem value="B2B SaaS">B2B SaaS</SelectItem>
                                                        <SelectItem value="Marketplace">Marketplace</SelectItem>
                                                        <SelectItem value="Subscription">Subscription</SelectItem>
                                                        <SelectItem value="Franchise">Franchise</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="annualRevenue">Annual Revenue</Label>
                                                <Input
                                                    id="annualRevenue"
                                                    value={profileData.annualRevenue}
                                                    onChange={(e) => handleInputChange("annualRevenue", e.target.value)}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="askingPrice">Asking Price</Label>
                                                <Input
                                                    id="askingPrice"
                                                    value={profileData.askingPrice}
                                                    onChange={(e) => handleInputChange("askingPrice", e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <Label>Key Business Assets</Label>
                                            <div className="grid grid-cols-2 gap-3">
                                                {keyAssets.map((asset) => (
                                                    <div key={asset} className="flex items-center space-x-2">
                                                        <Checkbox
                                                            id={asset}
                                                            checked={profileData.keyAssets.includes(asset)}
                                                            onCheckedChange={(checked) => handleArrayChange("keyAssets", asset, checked as boolean)}
                                                        />
                                                        <Label htmlFor={asset} className="text-sm">
                                                            {asset}
                                                        </Label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                            <div>
                                                <Label className="text-sm text-gray-600">Business Name</Label>
                                                <p className="font-semibold">{profileData.businessName}</p>
                                            </div>
                                            <div>
                                                <Label className="text-sm text-gray-600">Industry</Label>
                                                <p className="font-semibold">{profileData.industry}</p>
                                            </div>
                                            <div>
                                                <Label className="text-sm text-gray-600">Established</Label>
                                                <p className="font-semibold">{profileData.yearEstablished}</p>
                                            </div>
                                            <div>
                                                <Label className="text-sm text-gray-600">Employees</Label>
                                                <p className="font-semibold">{profileData.employees}</p>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                            <div>
                                                <Label className="text-sm text-gray-600">Annual Revenue</Label>
                                                <p className="font-semibold text-green-600">{profileData.annualRevenue}</p>
                                            </div>
                                            <div>
                                                <Label className="text-sm text-gray-600">Profit Margin</Label>
                                                <p className="font-semibold">{profileData.profitMargin}</p>
                                            </div>
                                            <div>
                                                <Label className="text-sm text-gray-600">Growth Rate</Label>
                                                <p className="font-semibold text-blue-600">{profileData.growthRate}</p>
                                            </div>
                                            <div>
                                                <Label className="text-sm text-gray-600">Asking Price</Label>
                                                <p className="font-semibold text-purple-600">{profileData.askingPrice}</p>
                                            </div>
                                        </div>

                                        <div>
                                            <Label className="text-sm text-gray-600">Key Business Assets</Label>
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                {profileData.keyAssets.map((asset) => (
                                                    <Badge key={asset} variant="outline">
                                                        {asset}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                )}
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="preferences" className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Sale Preferences</CardTitle>
                                <CardDescription>Your preferences for the sale process</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {isEditing ? (
                                    <>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label>Preferred Buyer Type</Label>
                                                <Select
                                                    value={profileData.preferredBuyerType}
                                                    onValueChange={(value) => handleInputChange("preferredBuyerType", value)}
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="Individual Investor">Individual Investor</SelectItem>
                                                        <SelectItem value="Strategic Buyer">Strategic Buyer</SelectItem>
                                                        <SelectItem value="Financial Buyer">Financial Buyer</SelectItem>
                                                        <SelectItem value="Management Team">Management Team</SelectItem>
                                                        <SelectItem value="No Preference">No Preference</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="space-y-2">
                                                <Label>Sale Timeline</Label>
                                                <Select
                                                    value={profileData.timeline}
                                                    onValueChange={(value) => handleInputChange("timeline", value)}
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="Immediately">Immediately</SelectItem>
                                                        <SelectItem value="Within 3 months">Within 3 months</SelectItem>
                                                        <SelectItem value="Within 6 months">Within 6 months</SelectItem>
                                                        <SelectItem value="Within 12 months">Within 12 months</SelectItem>
                                                        <SelectItem value="Flexible timing">Flexible timing</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <Label>Acceptable Deal Structures</Label>
                                            <div className="grid grid-cols-2 gap-3">
                                                {dealStructures.map((structure) => (
                                                    <div key={structure} className="flex items-center space-x-2">
                                                        <Checkbox
                                                            id={structure}
                                                            checked={profileData.dealStructure.includes(structure)}
                                                            onCheckedChange={(checked) =>
                                                                handleArrayChange("dealStructure", structure, checked as boolean)
                                                            }
                                                        />
                                                        <Label htmlFor={structure} className="text-sm">
                                                            {structure}
                                                        </Label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label>Minimum Cash at Closing</Label>
                                            <Select
                                                value={profileData.minimumCash}
                                                onValueChange={(value) => handleInputChange("minimumCash", value)}
                                            >
                                                <SelectTrigger>
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="100%">100% (All cash)</SelectItem>
                                                    <SelectItem value="75%">75%</SelectItem>
                                                    <SelectItem value="50%">50%</SelectItem>
                                                    <SelectItem value="25%">25%</SelectItem>
                                                    <SelectItem value="Negotiable">Negotiable</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="grid grid-cols-2 gap-6">
                                            <div>
                                                <Label className="text-sm text-gray-600">Preferred Buyer Type</Label>
                                                <p className="font-semibold">{profileData.preferredBuyerType}</p>
                                            </div>
                                            <div>
                                                <Label className="text-sm text-gray-600">Sale Timeline</Label>
                                                <p className="font-semibold">{profileData.timeline}</p>
                                            </div>
                                        </div>

                                        <div>
                                            <Label className="text-sm text-gray-600">Deal Structure Preferences</Label>
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                {profileData.dealStructure.map((structure) => (
                                                    <Badge key={structure} variant="outline">
                                                        {structure}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <Label className="text-sm text-gray-600">Minimum Cash at Closing</Label>
                                            <p className="font-semibold">{profileData.minimumCash}</p>
                                        </div>

                                        <div>
                                            <Label className="text-sm text-gray-600">Reason for Selling</Label>
                                            <p className="font-semibold">{profileData.reasonForSelling}</p>
                                        </div>
                                    </>
                                )}
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="activity" className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">Profile Views</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-3xl font-bold text-blue-600">{profileViews}</div>
                                    <p className="text-sm text-gray-600">This month</p>
                                    <div className="mt-2 text-sm text-green-600">+12% from last month</div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">Buyer Matches</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-3xl font-bold text-green-600">{matchesThisMonth}</div>
                                    <p className="text-sm text-gray-600">This month</p>
                                    <div className="mt-2 text-sm text-green-600">+3 new matches</div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">Response Rate</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-3xl font-bold text-purple-600">92%</div>
                                    <p className="text-sm text-gray-600">Average response</p>
                                    <div className="mt-2 text-sm text-green-600">Above average</div>
                                </CardContent>
                            </Card>
                        </div>

                        <Card>
                            <CardHeader>
                                <CardTitle>Recent Activity</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                                        <div>
                                            <p className="font-medium">New buyer match: Sarah Chen</p>
                                            <p className="text-sm text-gray-600">Investment range matches your asking price</p>
                                            <p className="text-xs text-gray-500">2 hours ago</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                                        <div>
                                            <p className="font-medium">Profile viewed by Michael Rodriguez</p>
                                            <p className="text-sm text-gray-600">Growth Capital Partners - PE firm</p>
                                            <p className="text-xs text-gray-500">5 hours ago</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3 p-3 bg-purple-50 rounded-lg">
                                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                                        <div>
                                            <p className="font-medium">Message received from Jennifer Park</p>
                                            <p className="text-sm text-gray-600">Interested in learning more about your business</p>
                                            <p className="text-xs text-gray-500">1 day ago</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3 p-3 bg-amber-50 rounded-lg">
                                        <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                                        <div>
                                            <p className="font-medium">Profile completeness improved</p>
                                            <p className="text-sm text-gray-600">Added financial documents - now 85% complete</p>
                                            <p className="text-xs text-gray-500">2 days ago</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}
