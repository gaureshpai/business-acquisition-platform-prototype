"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, ArrowLeft, Building2 } from "lucide-react"

export default function SellerOnboarding() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Business Basics
    businessName: "",
    industry: "",
    yearEstablished: "",
    location: "",
    employees: "",

    // Financial Performance
    annualRevenue: "",
    profitMargin: "",
    growthRate: "",
    askingPrice: "",

    // Business Details
    businessModel: "",
    keyAssets: [] as string[],
    reasonForSelling: "",
    businessDescription: "",

    // Seller Preferences
    preferredBuyerType: "",
    timeline: "",
    dealStructure: [] as string[],
    minimumCash: "",
  })

  const totalSteps = 4
  const progress = (currentStep / totalSteps) * 100

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
    "Technology Systems",
  ]

  const dealStructures = [
    "Asset Sale",
    "Stock Sale",
    "Earnout",
    "Seller Financing",
    "Management Retention",
    "Gradual Transition",
  ]

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    } else {
      // Complete onboarding
      window.location.href = "/dashboard"
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleKeyAssetsChange = (asset: string, checked: boolean) => {
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        keyAssets: [...prev.keyAssets, asset],
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        keyAssets: prev.keyAssets.filter((a) => a !== asset),
      }))
    }
  }

  const handleDealStructureChange = (structure: string, checked: boolean) => {
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        dealStructure: [...prev.dealStructure, structure],
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        dealStructure: prev.dealStructure.filter((s) => s !== structure),
      }))
    }
  }

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              DealFlow
            </h1>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Business Profile Setup</h2>
            <p className="text-gray-600">Tell us about your business to attract the right buyers</p>
          </div>
          <div className="space-y-2">
            <Progress value={progress} className="w-full" />
            <p className="text-sm text-gray-500">
              Step {currentStep} of {totalSteps}
            </p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>
              {currentStep === 1 && "Business Basics"}
              {currentStep === 2 && "Financial Performance"}
              {currentStep === 3 && "Business Details"}
              {currentStep === 4 && "Sale Preferences"}
            </CardTitle>
            <CardDescription>
              {currentStep === 1 && "Basic information about your business"}
              {currentStep === 2 && "Financial metrics and performance data"}
              {currentStep === 3 && "Detailed business information and assets"}
              {currentStep === 4 && "Your preferences for the sale process"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {currentStep === 1 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="businessName">Business Name</Label>
                  <Input
                    id="businessName"
                    value={formData.businessName}
                    onChange={(e) => setFormData((prev) => ({ ...prev, businessName: e.target.value }))}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Industry</Label>
                  <Select
                    value={formData.industry}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, industry: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your industry" />
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

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="yearEstablished">Year Established</Label>
                    <Input
                      id="yearEstablished"
                      type="number"
                      placeholder="e.g., 2015"
                      value={formData.yearEstablished}
                      onChange={(e) => setFormData((prev) => ({ ...prev, yearEstablished: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="employees">Number of Employees</Label>
                    <Select
                      value={formData.employees}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, employees: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select range" />
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
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Business Location</Label>
                  <Input
                    id="location"
                    placeholder="City, State"
                    value={formData.location}
                    onChange={(e) => setFormData((prev) => ({ ...prev, location: e.target.value }))}
                  />
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label>Annual Revenue</Label>
                  <Select
                    value={formData.annualRevenue}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, annualRevenue: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select revenue range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-100k">Under $100K</SelectItem>
                      <SelectItem value="100k-500k">$100K - $500K</SelectItem>
                      <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                      <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                      <SelectItem value="5m-10m">$5M - $10M</SelectItem>
                      <SelectItem value="10m-plus">$10M+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Profit Margin</Label>
                  <Select
                    value={formData.profitMargin}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, profitMargin: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select profit margin range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-10">Under 10%</SelectItem>
                      <SelectItem value="10-20">10% - 20%</SelectItem>
                      <SelectItem value="20-30">20% - 30%</SelectItem>
                      <SelectItem value="30-40">30% - 40%</SelectItem>
                      <SelectItem value="40-plus">40%+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Growth Rate (Last 3 Years)</Label>
                  <Select
                    value={formData.growthRate}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, growthRate: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select growth rate" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="declining">Declining</SelectItem>
                      <SelectItem value="stable">Stable (0-5%)</SelectItem>
                      <SelectItem value="moderate">Moderate (5-15%)</SelectItem>
                      <SelectItem value="strong">Strong (15-30%)</SelectItem>
                      <SelectItem value="rapid">Rapid (30%+)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Asking Price Range</Label>
                  <Select
                    value={formData.askingPrice}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, askingPrice: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select asking price range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-500k">Under $500K</SelectItem>
                      <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                      <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                      <SelectItem value="5m-10m">$5M - $10M</SelectItem>
                      <SelectItem value="10m-25m">$10M - $25M</SelectItem>
                      <SelectItem value="25m-plus">$25M+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="text-sm text-amber-800">
                    <strong>Note:</strong> Financial information will only be shared with qualified, matched buyers
                    during due diligence.
                  </p>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="businessDescription">Business Description</Label>
                  <Textarea
                    id="businessDescription"
                    placeholder="Describe your business, what you do, your competitive advantages, and what makes it attractive to buyers..."
                    value={formData.businessDescription}
                    onChange={(e) => setFormData((prev) => ({ ...prev, businessDescription: e.target.value }))}
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Business Model</Label>
                  <Select
                    value={formData.businessModel}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, businessModel: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your business model" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="b2b">B2B (Business to Business)</SelectItem>
                      <SelectItem value="b2c">B2C (Business to Consumer)</SelectItem>
                      <SelectItem value="b2b2c">B2B2C (Business to Business to Consumer)</SelectItem>
                      <SelectItem value="marketplace">Marketplace</SelectItem>
                      <SelectItem value="subscription">Subscription</SelectItem>
                      <SelectItem value="franchise">Franchise</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label>Key Business Assets (Select all that apply)</Label>
                  <div className="grid grid-cols-2 gap-3">
                    {keyAssets.map((asset) => (
                      <div key={asset} className="flex items-center space-x-2">
                        <Checkbox
                          id={asset}
                          checked={formData.keyAssets.includes(asset)}
                          onCheckedChange={(checked) => handleKeyAssetsChange(asset, checked as boolean)}
                        />
                        <Label htmlFor={asset} className="text-sm">
                          {asset}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Reason for Selling</Label>
                  <Select
                    value={formData.reasonForSelling}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, reasonForSelling: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select primary reason" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="retirement">Retirement</SelectItem>
                      <SelectItem value="new-venture">Starting new venture</SelectItem>
                      <SelectItem value="health">Health reasons</SelectItem>
                      <SelectItem value="relocation">Relocation</SelectItem>
                      <SelectItem value="partnership-issues">Partnership issues</SelectItem>
                      <SelectItem value="market-conditions">Market conditions</SelectItem>
                      <SelectItem value="growth-capital">Need growth capital</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label>Preferred Buyer Type</Label>
                  <Select
                    value={formData.preferredBuyerType}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, preferredBuyerType: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="What type of buyer do you prefer?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="individual">Individual Investor</SelectItem>
                      <SelectItem value="strategic">Strategic Buyer (Competitor)</SelectItem>
                      <SelectItem value="financial">Financial Buyer (PE/VC)</SelectItem>
                      <SelectItem value="management">Management Team</SelectItem>
                      <SelectItem value="no-preference">No Preference</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Sale Timeline</Label>
                  <Select
                    value={formData.timeline}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, timeline: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="When do you want to sell?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate">Immediately</SelectItem>
                      <SelectItem value="3-months">Within 3 months</SelectItem>
                      <SelectItem value="6-months">Within 6 months</SelectItem>
                      <SelectItem value="12-months">Within 12 months</SelectItem>
                      <SelectItem value="flexible">Flexible timing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label>Acceptable Deal Structures (Select all that apply)</Label>
                  <div className="grid grid-cols-2 gap-3">
                    {dealStructures.map((structure) => (
                      <div key={structure} className="flex items-center space-x-2">
                        <Checkbox
                          id={structure}
                          checked={formData.dealStructure.includes(structure)}
                          onCheckedChange={(checked) => handleDealStructureChange(structure, checked as boolean)}
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
                    value={formData.minimumCash}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, minimumCash: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Minimum cash percentage required" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="100">100% (All cash)</SelectItem>
                      <SelectItem value="75">75%</SelectItem>
                      <SelectItem value="50">50%</SelectItem>
                      <SelectItem value="25">25%</SelectItem>
                      <SelectItem value="negotiable">Negotiable</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            <div className="flex justify-between pt-6">
              <Button variant="outline" onClick={handleBack} disabled={currentStep === 1}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <Button
                onClick={handleNext}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                {currentStep === totalSteps ? "Complete Setup" : "Next"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
