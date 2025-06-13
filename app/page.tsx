"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronRight, Server, Network, Database, CheckCircle2, Quote } from "lucide-react"
import HeroBanner from "@/components/hero-banner"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <HeroBanner />

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-background to-blue-950/20">
        <div className="container px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Our Services</h2>
            <div className="mx-auto mb-4 h-1 w-24 bg-blue-500"></div>
            <p className="mx-auto max-w-2xl text-gray-400">
              Providing comprehensive fiber optic network solutions to meet the needs of all types of businesses
            </p>
          </div>

          {/* Services content */}
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Professional Fiber Installation",
                description:
                  "Our expert team plans and installs high-speed fiber optic networks for your business, ensuring optimal performance and reliability",
                icon: <Network className="h-10 w-10 text-blue-400" />,
              },
              {
                title: "Enterprise Network Solutions",
                description:
                  "Comprehensive network solutions providing high-speed, stable, and secure enterprise network environments",
                icon: <Server className="h-10 w-10 text-blue-400" />,
              },
              {
                title: "24/7 Technical Support",
                description:
                  "Round-the-clock professional technical support ensures your network runs smoothly and resolves any issues quickly",
                icon: <Database className="h-10 w-10 text-blue-400" />,
              },
            ].map((service, index) => (
              <div
                key={index}
                className="rounded-lg border border-blue-900/20 bg-blue-950/20 p-6 backdrop-blur-sm transition-all hover:border-blue-800/30 hover:shadow-lg hover:shadow-blue-500/5"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="mb-2 text-xl font-bold text-white">{service.title}</h3>
                <p className="mb-4 text-gray-400">{service.description}</p>
                <Link href="/services" className="inline-flex items-center text-blue-400 hover:text-blue-300">
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Success Stories</h2>
            <div className="mx-auto mb-4 h-1 w-24 bg-blue-500"></div>
            <p className="mx-auto max-w-2xl text-gray-400">
              See how our fiber optic solutions have transformed businesses across various industries
            </p>
          </div>

          <Tabs defaultValue="corporate" className="space-y-8">
            <TabsList className="mx-auto flex w-full max-w-md justify-center bg-blue-950/30 p-1">
              <TabsTrigger value="corporate" className="flex-1 data-[state=active]:bg-blue-600">
                Corporate
              </TabsTrigger>
              <TabsTrigger value="education" className="flex-1 data-[state=active]:bg-blue-600">
                Education
              </TabsTrigger>
              <TabsTrigger value="healthcare" className="flex-1 data-[state=active]:bg-blue-600">
                Healthcare
              </TabsTrigger>
            </TabsList>

            <TabsContent value="corporate" className="space-y-4">
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div className="relative h-[300px] rounded-lg overflow-hidden border border-blue-900/30">
                  <Image
                    src="/images/corporate-network.png"
                    alt="IT professional monitoring network performance in a modern data center"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <div className="inline-block rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
                    Financial Services
                  </div>
                  <h3 className="text-2xl font-bold text-white">Global Investment Bank Network Upgrade</h3>
                  <p className="text-gray-400">
                    We implemented a high-performance fiber optic network for a leading investment bank, connecting
                    their 15 floors in a Hong Kong skyscraper with redundant 100Gbps connections.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                      <span className="text-gray-400">Reduced network latency by 85%</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                      <span className="text-gray-400">99.999% uptime with redundant systems</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                      <span className="text-gray-400">Seamless integration with global network</span>
                    </li>
                  </ul>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="education" className="space-y-4">
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div className="relative h-[300px] rounded-lg overflow-hidden border border-blue-900/30">
                  <Image
                    src="/images/education-network.webp"
                    alt="University campus with network connections between buildings"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <div className="inline-block rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
                    Higher Education
                  </div>
                  <h3 className="text-2xl font-bold text-white">University Campus-Wide Network</h3>
                  <p className="text-gray-400">
                    We designed and implemented a comprehensive fiber optic network across a major university campus,
                    connecting 25 buildings and supporting over 20,000 simultaneous users.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                      <span className="text-gray-400">10Gbps connections to all academic buildings</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                      <span className="text-gray-400">Supported advanced research computing needs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                      <span className="text-gray-400">Scalable infrastructure for future expansion</span>
                    </li>
                  </ul>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="healthcare" className="space-y-4">
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div className="relative h-[300px] rounded-lg overflow-hidden border border-blue-900/30">
                  <Image
                    src="/images/healthcare-network.webp"
                    alt="Modern data center for hospital network infrastructure"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <div className="inline-block rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
                    Healthcare
                  </div>
                  <h3 className="text-2xl font-bold text-white">Hospital Network Modernization</h3>
                  <p className="text-gray-400">
                    We upgraded the entire network infrastructure for a 1,200-bed hospital, enabling high-speed data
                    transfer for medical imaging and electronic health records.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                      <span className="text-gray-400">Reduced medical image transfer time by 90%</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                      <span className="text-gray-400">Enhanced security for patient data</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                      <span className="text-gray-400">Fault-tolerant design for critical care systems</span>
                    </li>
                  </ul>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-blue-950/20 to-background">
        <div className="container px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Client Testimonials</h2>
            <div className="mx-auto mb-4 h-1 w-24 bg-blue-500"></div>
            <p className="mx-auto max-w-2xl text-gray-400">
              Hear what our clients have to say about our fiber optic solutions and services
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote:
                  "Fibralink's enterprise network solution transformed our operations. The speed and reliability have been exceptional, and their support team is always responsive.",
                author: "Sarah Chen",
                position: "CTO, Global Financial Services",
                company: "AsiaPac Banking Ltd",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                quote:
                  "We needed a network that could handle massive data transfers for our research projects. Fibralink delivered a solution that exceeded our expectations and scaled with our needs.",
                author: "Dr. Michael Wong",
                position: "IT Director",
                company: "Hong Kong Research Institute",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                quote:
                  "The reliability of our network is critical for patient care. Since implementing Fibralink's solution, we've had zero downtime and significantly improved our digital healthcare services.",
                author: "Jennifer Lau",
                position: "Head of IT Infrastructure",
                company: "Central Medical Center",
                image: "/placeholder.svg?height=100&width=100",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-blue-900/20 bg-blue-950/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <Quote className="h-10 w-10 text-blue-500/20 mb-4" />
                  <p className="mb-6 text-gray-300 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="mr-4 h-12 w-12 overflow-hidden rounded-full border border-blue-900/30">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.author}
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">{testimonial.author}</h4>
                      <p className="text-sm text-gray-400">{testimonial.position}</p>
                      <p className="text-sm text-blue-400">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-950/30 backdrop-blur-sm">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { value: "10+", label: "Years of Experience" },
              { value: "1,000+", label: "Business Clients" },
              { value: "99.99%", label: "Network Availability" },
              { value: "24/7", label: "Technical Support" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 text-4xl font-bold text-blue-400 md:text-5xl">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="rounded-lg border border-blue-900/20 bg-gradient-to-r from-blue-950/50 to-blue-900/20 p-8 backdrop-blur-sm md:p-12">
            <div className="flex flex-col items-center text-center">
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Ready to Upgrade Your Network?</h2>
              <p className="mb-8 max-w-2xl text-gray-300">
                Contact our professional consultants to get a customized fiber optic solution and quote for your
                business
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Get a Quote Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-blue-700 text-white hover:bg-blue-900/20">
                  Learn More About Our Services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}

