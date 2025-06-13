import Image from "next/image"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Background gradient effects - more subtle and professional */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-900/20 to-blue-700/20 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-blue-800/20 to-blue-600/20 blur-3xl" />

      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
              <span className="block">Authentic</span>
              <span className="block mt-2">Culinary Experience</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0">
              Discover the perfect blend of tradition and innovation with our carefully crafted menu and immersive
              dining atmosphere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#menu"
                className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-md transition-colors"
              >
                VIEW MENU
              </a>
              <a
                href="#contact"
                className="border border-gray-700 hover:border-gray-500 text-foreground hover:text-white font-medium py-3 px-8 rounded-md transition-colors"
              >
                RESERVE A TABLE
              </a>
            </div>
          </div>

          <div className="relative h-[400px] lg:h-[500px]">
            {/* Main dish image */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80">
              <Image
                src="/placeholder.svg?height=320&width=320"
                alt="Signature dish"
                width={320}
                height={320}
                className="rounded-lg shadow-2xl shadow-blue-900/20 object-cover"
              />
            </div>

            {/* Floating icons/elements - more subtle */}
            <div className="floating-icon absolute top-[20%] left-[20%] w-16 h-16">
              <Image
                src="/placeholder.svg?height=64&width=64"
                alt="Icon 1"
                width={64}
                height={64}
                className="rounded-lg shadow-lg shadow-blue-900/30"
              />
            </div>
            <div className="floating-icon absolute top-[70%] left-[30%] w-12 h-12">
              <Image
                src="/placeholder.svg?height=48&width=48"
                alt="Icon 2"
                width={48}
                height={48}
                className="rounded-lg shadow-lg shadow-blue-800/30"
              />
            </div>
            <div className="floating-icon absolute top-[30%] right-[20%] w-14 h-14">
              <Image
                src="/placeholder.svg?height=56&width=56"
                alt="Icon 3"
                width={56}
                height={56}
                className="rounded-lg shadow-lg shadow-blue-900/30"
              />
            </div>
            <div className="floating-icon absolute top-[60%] right-[25%] w-10 h-10">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Icon 4"
                width={40}
                height={40}
                className="rounded-lg shadow-lg shadow-blue-800/30"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

