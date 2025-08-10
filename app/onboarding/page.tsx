"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Users, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function OnboardingPage() {
  const [selectedRole, setSelectedRole] = useState<"buyer" | "seller" | null>(null)

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-4xl space-y-8">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              DealFlow
            </h1>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Let's get you started</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose your role to customize your experience. Don't worry, you can always change this later.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card
            className={`cursor-pointer transition-all duration-300 card-hover ${
              selectedRole === "buyer" ? "ring-2 ring-blue-500 bg-blue-50" : ""
            }`}
            onClick={() => setSelectedRole("buyer")}
          >
            <CardHeader className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-2xl">I'm a Buyer</CardTitle>
                <CardDescription className="text-base mt-2">
                  Looking to acquire a business that matches my investment criteria
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Browse seller profiles</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Get matched with sellers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">AI-powered deal analysis</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Streamlined due diligence</span>
                </div>
              </div>
              <Badge variant="secondary" className="w-full justify-center py-2">
                Perfect for investors & entrepreneurs
              </Badge>
            </CardContent>
          </Card>

          <Card
            className={`cursor-pointer transition-all duration-300 card-hover ${
              selectedRole === "seller" ? "ring-2 ring-purple-500 bg-purple-50" : ""
            }`}
            onClick={() => setSelectedRole("seller")}
          >
            <CardHeader className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-2xl">I'm a Seller</CardTitle>
                <CardDescription className="text-base mt-2">
                  Ready to sell my business to the right buyer
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Create compelling business profile</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Reach qualified buyers first</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">AI valuation insights</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Guided selling process</span>
                </div>
              </div>
              <Badge variant="secondary" className="w-full justify-center py-2">
                Perfect for business owners
              </Badge>
            </CardContent>
          </Card>
        </div>

        {selectedRole && (
          <div className="text-center">
            <Link href={`/onboarding/${selectedRole}`}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8"
              >
                Continue as {selectedRole === "buyer" ? "Buyer" : "Seller"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
