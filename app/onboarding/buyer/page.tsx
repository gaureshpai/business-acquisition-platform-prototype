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

export default function BuyerOnboarding() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: "",
    lastName: "",
    title: "",
    company: "",
    phone: "",

    // Investment Profile
    investmentRange: "",
    preferredIndustries: [] as string[],
    geographicPreference: "",
    timeframe: "",

    // Experience & Goals
    acquisitionExperience: "",
    businessGoals: "",
    dealStructure: [] as string[],

    // Financial Capacity
    liquidCapital: "",
    financingNeeded: "",
    creditScore: "",
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

  const dealStructures = [
    "Asset Purchase",
    "Stock Purchase",
    "Merger",
    "Management Buyout",
    "Leveraged Buyout",
    "Earnout Structure",
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

  const handleIndustryChange = (industry: string, checked: boolean) => {
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        preferredIndustries: [...prev.preferredIndustries, industry],
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        preferredIndustries: prev.preferredIndustries.filter((i) => i !== industry),
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
            <h2 className="text-2xl font-bold text-gray-900">Buyer Profile Setup</h2>
            <p className="text-gray-600">Help us understand your investment preferences</p>
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
              {currentStep === 1 && "Personal Information"}
              {currentStep === 2 && "Investment Profile"}
              {currentStep === 3 && "Experience & Goals"}
              {currentStep === 4 && "Financial Capacity"}
            </CardTitle>
            <CardDescription>
              {currentStep === 1 && "Tell us about yourself"}
              {currentStep === 2 && "What type of businesses interest you?"}
              {currentStep === 3 && "Your acquisition experience and objectives"}
              {currentStep === 4 && "Your financial readiness for acquisitions"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {currentStep === 1 && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData((prev) => ({ ...prev, firstName: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData((prev) => ({ ...prev, lastName: e.target.value }))}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="title">Professional Title</Label>
                  <Input
                    id="title"
                    placeholder="e.g., CEO, Investor, Entrepreneur"
                    value={formData.title}
                    onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Current Company (Optional)</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                  />
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label>Investment Range</Label>
                  <Select
                    value={formData.investmentRange}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, investmentRange: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your investment range" />
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

                <div className="space-y-3">
                  <Label>Preferred Industries (Select all that apply)</Label>
                  <div className="grid grid-cols-2 gap-3">
                    {industries.map((industry) => (
                      <div key={industry} className="flex items-center space-x-2">
                        <Checkbox
                          id={industry}
                          checked={formData.preferredIndustries.includes(industry)}
                          onCheckedChange={(checked) => handleIndustryChange(industry, checked as boolean)}
                        />
                        <Label htmlFor={industry} className="text-sm">
                          {industry}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Geographic Preference</Label>
                  <Select
                    value={formData.geographicPreference}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, geographicPreference: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Where are you looking to invest?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="local">Local/Regional</SelectItem>
                      <SelectItem value="national">National</SelectItem>
                      <SelectItem value="international">International</SelectItem>
                      <SelectItem value="no-preference">No Preference</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Investment Timeframe</Label>
                  <Select
                    value={formData.timeframe}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, timeframe: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="When are you looking to invest?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate">Immediately</SelectItem>
                      <SelectItem value="3-months">Within 3 months</SelectItem>
                      <SelectItem value="6-months">Within 6 months</SelectItem>
                      <SelectItem value="12-months">Within 12 months</SelectItem>
                      <SelectItem value="exploring">Just exploring</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label>Acquisition Experience</Label>
                  <Select
                    value={formData.acquisitionExperience}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, acquisitionExperience: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Your experience with business acquisitions" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="first-time">First-time buyer</SelectItem>
                      <SelectItem value="some-experience">Some experience (1-2 deals)</SelectItem>
                      <SelectItem value="experienced">Experienced (3-5 deals)</SelectItem>
                      <SelectItem value="very-experienced">Very experienced (5+ deals)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="businessGoals">Business Goals & Strategy</Label>
                  <Textarea
                    id="businessGoals"
                    placeholder="What are you hoping to achieve with this acquisition? (e.g., portfolio expansion, operational synergies, market entry)"
                    value={formData.businessGoals}
                    onChange={(e) => setFormData((prev) => ({ ...prev, businessGoals: e.target.value }))}
                    rows={4}
                  />
                </div>

                <div className="space-y-3">
                  <Label>Preferred Deal Structure (Select all that apply)</Label>
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
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label>Available Liquid Capital</Label>
                  <Select
                    value={formData.liquidCapital}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, liquidCapital: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="How much liquid capital do you have available?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-100k">Under $100K</SelectItem>
                      <SelectItem value="100k-500k">$100K - $500K</SelectItem>
                      <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                      <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                      <SelectItem value="5m-plus">$5M+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Financing Needed</Label>
                  <Select
                    value={formData.financingNeeded}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, financingNeeded: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Will you need external financing?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="no-financing">No, all cash</SelectItem>
                      <SelectItem value="some-financing">Some financing (less than 50%)</SelectItem>
                      <SelectItem value="significant-financing">Significant financing (50-80%)</SelectItem>
                      <SelectItem value="mostly-financing">Mostly financing (80%+)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Credit Score Range</Label>
                  <Select
                    value={formData.creditScore}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, creditScore: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Your credit score range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="excellent">Excellent (750+)</SelectItem>
                      <SelectItem value="good">Good (700-749)</SelectItem>
                      <SelectItem value="fair">Fair (650-699)</SelectItem>
                      <SelectItem value="poor">Poor (less than 650)</SelectItem>
                      <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Privacy Note:</strong> Your financial information is encrypted and only shared with matched
                    sellers during the due diligence process with your explicit consent.
                  </p>
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
