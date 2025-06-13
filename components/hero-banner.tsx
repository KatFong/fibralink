"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroBanner() {
  return (
    <section className="relative h-[70vh] min-h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/in-an-industrial-or-server-room-setting-_knH9HXCfSpeweaz2tYxJyw_lbUFtMTAQ36kJ6uAajcjKQ.png-wgSX8dOXWbXmezFLaeTi4hL2hObH8S.jpeg"
          alt="Professional technicians installing fiber optic network"
          fill
          priority
          className="object-cover object-center opacity-60"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        {/* Blue light effect */}
        <div className="absolute inset-0 bg-blue-500/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl">
            <div className="mb-2 inline-block rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-400 backdrop-blur-sm">
              Professional Fiber Optic Network Solutions
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="block">Enterprise-Grade</span>
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Fiber Optic Networks
              </span>
            </h1>
            <p className="mb-8 max-w-2xl text-lg text-gray-300 md:text-xl">
              Our expert team provides high-speed, stable, and secure fiber optic infrastructure to ensure your business
              runs smoothly
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button size="lg" className="group bg-blue-600 hover:bg-blue-700">
                Get a Custom Solution
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="border-blue-700 text-white hover:bg-blue-900/20">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating data card */}
      <div className="absolute bottom-8 right-8 z-10 hidden md:block">
        <div className="w-64 rounded-lg border border-blue-900/30 bg-blue-950/40 p-4 backdrop-blur-md">
          <h3 className="mb-2 text-sm font-medium text-blue-400">Our Service Coverage</h3>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm text-gray-400">Business Clients</span>
            <span className="text-sm font-medium text-white">1,000+</span>
          </div>
          <div className="mb-2 h-1.5 w-full overflow-hidden rounded-full bg-blue-900/30">
            <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"></div>
          </div>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm text-gray-400">Network Availability</span>
            <span className="text-sm font-medium text-white">99.99%</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-blue-900/30">
            <div className="h-full w-[99%] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"></div>
          </div>
        </div>
      </div>

      {/* Technical indicator */}
      <div className="absolute bottom-8 left-8 z-10 hidden md:block">
        <div className="flex items-center space-x-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-900/30 bg-blue-950/40 backdrop-blur-md">
            <div className="h-3 w-3 rounded-full bg-blue-400"></div>
          </div>
          <div className="rounded-lg border border-blue-900/30 bg-blue-950/40 px-4 py-2 backdrop-blur-md">
            <span className="text-sm text-blue-400">24/7 Technical Support</span>
          </div>
        </div>
      </div>
    </section>
  )
}

