"use client"

import { Facebook, Instagram, Share2 } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface SocialShareProps {
  url?: string
  title?: string
  description?: string
}

export function SocialShare({
  url = typeof window !== "undefined" ? window.location.href : "",
  title = "Experience Wadi Rum with Mohammed Mutlak Camp",
  description = "Authentic Bedouin desert experiences, tours, and camping in the heart of Wadi Rum, Jordan.",
}: SocialShareProps) {
  const [showTooltip, setShowTooltip] = useState(false)

  // Ensure we have the full URL
  const fullUrl = url.startsWith("http") ? url : `https://wadirum-adventures.com${url}`

  const shareToFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`,
      "_blank",
      "width=600,height=400",
    )
  }

  const shareToInstagram = () => {
    // Instagram doesn't have a direct share URL, so we'll copy to clipboard
    // and show instructions
    navigator.clipboard.writeText(fullUrl)
    setShowTooltip(true)
    setTimeout(() => setShowTooltip(false), 3000)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(fullUrl)
    setShowTooltip(true)
    setTimeout(() => setShowTooltip(false), 3000)
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <p className="text-sm font-medium text-gray-700">Share this experience:</p>

      <div className="flex space-x-3">
        <button onClick={shareToFacebook} className="relative group" aria-label="Share on Facebook">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-500 transition-transform transform group-hover:scale-110">
            <Image
              src="/images/traditional-camp.jpg"
              alt="Share on Facebook"
              width={48}
              height={48}
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
              <Facebook className="w-5 h-5 text-white" />
            </div>
          </div>
        </button>

        <button onClick={shareToInstagram} className="relative group" aria-label="Share on Instagram">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-500 transition-transform transform group-hover:scale-110">
            <Image
              src="/images/traditional-camp.jpg"
              alt="Share on Instagram"
              width={48}
              height={48}
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
              <Instagram className="w-5 h-5 text-white" />
            </div>
          </div>
        </button>

        <button onClick={copyToClipboard} className="relative group" aria-label="Copy link">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-500 transition-transform transform group-hover:scale-110">
            <Image src="/images/traditional-camp.jpg" alt="Copy link" width={48} height={48} className="object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
              <Share2 className="w-5 h-5 text-white" />
            </div>
          </div>
        </button>
      </div>

      {showTooltip && (
        <div className="bg-gray-800 text-white text-xs rounded py-1 px-2 absolute -bottom-8">
          Link copied to clipboard!
        </div>
      )}
    </div>
  )
}
