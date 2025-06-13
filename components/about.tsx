import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background gradient - more subtle */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-blue-900/10 to-blue-700/10 blur-3xl" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">OUR STORY</h2>
          <div className="w-24 h-1 bg-blue-700 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl shadow-blue-900/20">
              <Image src="/placeholder.svg?height=400&width=600" alt="Our restaurant" fill className="object-cover" />
            </div>

            {/* Decorative elements - more subtle */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border border-blue-900/30 rounded-lg -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-blue-900/30 rounded-lg -z-10"></div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-blue-900/30">
            <h3 className="text-2xl font-bold mb-6 text-white">Passion for Authentic Flavors</h3>
            <p className="text-gray-400 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies lacinia,
              nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc sit amet ultricies
              lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
            </p>
            <p className="text-gray-400 mb-6">
              Sed euismod, nunc sit amet ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet
              nisl. Sed euismod, nunc sit amet ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit
              amet nisl.
            </p>
            <div className="flex items-center p-4 bg-gray-800/50 rounded-lg">
              <div className="w-16 h-16 relative mr-4">
                <Image
                  src="/placeholder.svg?height=64&width=64"
                  alt="Chef"
                  fill
                  className="object-cover rounded-full border-2 border-blue-700"
                />
              </div>
              <div>
                <p className="font-bold text-white">Chef Name</p>
                <p className="text-gray-400">Head Chef</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

