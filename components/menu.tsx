"use client"

import { useState } from "react"
import Image from "next/image"

// Sample menu data - replace with your actual menu items
const menuCategories = [
  {
    id: "signature",
    name: "Signature Dishes",
    items: [
      {
        id: 1,
        name: "Dish Name 1",
        description: "Description of this amazing dish with its ingredients and special preparation method.",
        price: "$18.99",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 2,
        name: "Dish Name 2",
        description: "Description of this amazing dish with its ingredients and special preparation method.",
        price: "$21.99",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 3,
        name: "Dish Name 3",
        description: "Description of this amazing dish with its ingredients and special preparation method.",
        price: "$16.99",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  },
  {
    id: "starters",
    name: "Starters",
    items: [
      {
        id: 4,
        name: "Starter 1",
        description: "Description of this amazing starter with its ingredients and special preparation method.",
        price: "$9.99",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 5,
        name: "Starter 2",
        description: "Description of this amazing starter with its ingredients and special preparation method.",
        price: "$8.99",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    items: [
      {
        id: 6,
        name: "Dessert 1",
        description: "Description of this amazing dessert with its ingredients and special preparation method.",
        price: "$7.99",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 7,
        name: "Dessert 2",
        description: "Description of this amazing dessert with its ingredients and special preparation method.",
        price: "$6.99",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  },
]

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id)

  return (
    <section id="menu" className="py-24 bg-background relative overflow-hidden">
      {/* Background gradient - more subtle */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-900/10 to-blue-700/10 blur-3xl" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">OUR MENU</h2>
          <div className="w-24 h-1 bg-blue-700 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover our carefully crafted menu featuring the finest ingredients and authentic flavors.
          </p>
        </div>

        {/* Menu Categories */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-2 bg-gray-900/50 backdrop-blur-sm p-2 rounded-md border border-blue-900/30">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-blue-700 text-white shadow-md shadow-blue-900/20"
                    : "text-gray-400 hover:text-white"
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuCategories
            .find((category) => category.id === activeCategory)
            ?.items.map((item) => (
              <div
                key={item.id}
                className="bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden border border-blue-900/30 hover:border-blue-800/50 hover:shadow-lg hover:shadow-blue-900/10 group"
              >
                <div className="relative h-48">
                  <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-white">{item.name}</h3>
                    <span className="text-blue-400 font-bold">{item.price}</span>
                  </div>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="bg-blue-700 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-md inline-block transition-all shadow-md shadow-blue-900/20 hover:shadow-blue-900/30"
          >
            RESERVE A TABLE
          </a>
        </div>
      </div>
    </section>
  )
}

